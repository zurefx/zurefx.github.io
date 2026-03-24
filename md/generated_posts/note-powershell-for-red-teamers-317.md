---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, oscp, cheatsheet, enumeration, privilege escalation"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-317.html"
URL_IMAGES: ""
Date: "2025-06-02"
Tags: "Persistence, OSCP, Cheatsheet, Enumeration, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-317"
Permalink: "/notes/note-powershell-for-red-teamers-317.html"
BtnLabel: "Read Notes"
Pick: 0
---
## smbexec

### XXE

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.169.206
feroxbuster -h
crackmapexec smb 10.102.158.105 -u administrator -p 'P@ssw0rd!' --shares
```

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.10.151.9/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.26.48.133
nmap -sCV -p636,464,1521 10.34.164.197 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

> **Note:** Broken Access Control was identified as the primary attack vector in this scenario.

## FTP

### SSH

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

## smbclient

### Silver Ticket

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.27.53
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.102.39.57/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```
