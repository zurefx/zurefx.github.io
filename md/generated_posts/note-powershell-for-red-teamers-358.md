---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, blue team, oscp, enumeration"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-358.html"
URL_IMAGES: ""
Date: "2025-07-07"
Tags: "Cheatsheet, Blue Team, OSCP, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-358"
Permalink: "/notes/note-powershell-for-red-teamers-358.html"
BtnLabel: "Read Notes"
Pick: 0
---
## evil-winrm

### ligolo-ng

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p9200,995,9200 10.76.74.98 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

## XSS

### C#

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## CMD

### dcomexec

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.
