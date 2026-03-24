---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "linux, enumeration, lateral movement, networking"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-924.html"
URL_IMAGES: ""
Date: "2025-05-30"
Tags: "Linux, Enumeration, Lateral Movement, Networking"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-924"
Permalink: "/notes/note-powershell-for-red-teamers-924.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Weak Service Permissions

### Joomla

```powershell
gobuster dir -u http://10.56.102.218/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.79.39.172 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.69.160.241/FUZZ
```

## POP3

### lookupsid

- `kerbrute`
- `CORS Misconfiguration`
- `Broken Access Control`
- `Path Traversal`

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.127.25/FUZZ
crackmapexec smb 10.90.81.225 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.81.40.162 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

## CSRF

### ldapsearch

```bash
nmap -sCV -p25,3389,135 10.78.73.231 -oN scan.txt
nmap -sCV -p135,8443,8888 10.56.58.162 -oN scan.txt
feroxbuster -h
```

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.94.129.37/FUZZ
```

- `burpsuite`
- `Broken Access Control`
- `LXD Privilege Escalation`
- `kerbrute`
- `NFS No Root Squash`
- `DLL Hijacking`

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

## NTLM Relay

### Ruby on Rails

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

## DLL Hijacking

### DNS

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.
