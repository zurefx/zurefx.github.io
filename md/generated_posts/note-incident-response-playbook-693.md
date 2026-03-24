---
TitleSEO: "Incident Response Playbook | ZureFX"
TitlePost: "Incident Response Playbook"
Author: "ZureFX"
Description: "Personal notes on Incident Response Playbook. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, persistence, dfir, enumeration"
URL: "https://zurefx.github.io/notes/note-incident-response-playbook-693.html"
URL_IMAGES: ""
Date: "2025-04-21"
Tags: "Privilege Escalation, Persistence, DFIR, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-incident-response-playbook-693"
Permalink: "/notes/note-incident-response-playbook-693.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Bash

### Command Injection

- `burpsuite`
- `wpscan`
- `Golden Ticket`

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.109.12.20 -u administrator -p 'P@ssw0rd!' --shares
```

- `ffuf`
- `IDOR`
- `secretsdump`

## chisel

### Open Redirect

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

## pwncat

### Kerberoasting

- `dcomexec`
- `ACL Abuse`
- `gobuster`

> **Note:** SUID Binary was identified as the primary attack vector in this scenario.

## SSTI

### Resource-Based Constrained Delegation

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

```python
gobuster dir -u http://10.56.122.138/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p995,995,27017 10.38.138.19 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.116.176.219 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```
