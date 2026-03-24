---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "windows, lateral movement, dfir"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-776.html"
URL_IMAGES: ""
Date: "2024-09-25"
Tags: "Windows, Lateral Movement, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-776"
Permalink: "/notes/note-blue-team-detection-techniques-776.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Telnet

### WinRM

```bash
crackmapexec smb 10.46.153.42 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.31.243.134 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p993,389,5986 10.57.100.121 -oN scan.txt
```

> **Note:** NTLM Relay was identified as the primary attack vector in this scenario.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.35.82.235/FUZZ
evil-winrm -i 10.89.50.53 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.95.26.87 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.16.222.90/FUZZ
```

## DLL Hijacking

### ldapsearch

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

```python
crackmapexec smb 10.127.179.247 -u administrator -p 'P@ssw0rd!' --shares
```

## psexec

### Command Injection

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.
