---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, dfir, linux, persistence, enumeration, malware"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-877.html"
URL_IMAGES: ""
Date: "2024-07-27"
Tags: "Privilege Escalation, DFIR, Linux, Persistence, Enumeration, Malware"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-877"
Permalink: "/notes/note-powershell-for-red-teamers-877.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Sudo Misconfiguration

### PowerShell

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```powershell
evil-winrm -i 10.125.240.21 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.97.33.152/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.13.179.145
feroxbuster -h
```

## Path Traversal

### WinRM

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.55.215/FUZZ
feroxbuster -h
gobuster dir -u http://10.42.190.218/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.34.71.44 -u administrator -p 'P@ssw0rd!' --shares
```

- `Docker Escape`
- `hashcat`
- `Silver Ticket`
- `hydra`

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Ubuntu 20.04

### HTTP

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

```python
feroxbuster -h
```

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.15.192.184/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.
