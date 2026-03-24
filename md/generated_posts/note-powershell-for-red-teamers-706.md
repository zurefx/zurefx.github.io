---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, dfir, lateral movement, enumeration, windows, networking"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-706.html"
URL_IMAGES: ""
Date: "2024-01-26"
Tags: "Blue Team, DFIR, Lateral Movement, Enumeration, Windows, Networking"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-706"
Permalink: "/notes/note-powershell-for-red-teamers-706.html"
BtnLabel: "Read Notes"
Pick: 0
---
## IMAP

### Open Redirect

> **Note:** DNS Rebinding was identified as the primary attack vector in this scenario.

```bash
evil-winrm -i 10.119.123.36 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.40.66.118 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.42.74.206 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

- `atexec`
- `metasploit`
- `IDOR`
- `NFS No Root Squash`
- `Pass the Ticket`
- `netcat`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.62.18
```

## bloodhound

### Node.js

```powershell
gobuster dir -u http://10.116.118.162/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.17.8.103 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.26.34.11 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.86.235.156 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Ruby on Rails

### nikto

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Unquoted Service Path

### Broken Access Control

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.85.88.182 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.46.133.104/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.245.76
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## GetUserSPNs

### hashcat

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.161.6 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.81.188.20 -u administrator -p 'P@ssw0rd!'
```

> **Note:** Subdomain Takeover was identified as the primary attack vector in this scenario.

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

## .NET

### PostgreSQL

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

> **Note:** Local File Inclusion was identified as the primary attack vector in this scenario.

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.
