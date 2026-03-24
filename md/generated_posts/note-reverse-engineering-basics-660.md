---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, blue team, cheatsheet"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-660.html"
URL_IMAGES: ""
Date: "2025-09-09"
Tags: "Persistence, Blue Team, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-660"
Permalink: "/notes/note-reverse-engineering-basics-660.html"
BtnLabel: "Read Notes"
Pick: 0
---
## LDAP

### MySQL

```bash
crackmapexec smb 10.69.43.173 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.27.66.222/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

## SeImpersonatePrivilege

### CMD

> **Note:** Open Redirect was identified as the primary attack vector in this scenario.

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## IMAP

### metasploit

- `hydra`
- `sqlmap`
- `Resource-Based Constrained Delegation`
- `Path Traversal`
- `Broken Access Control`

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

## Docker Escape

### Windows Server 2019

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

## Python

### WinRM

- `dcomexec`
- `LXD Privilege Escalation`
- `NTLM Relay`
- `wmiexec`

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

- `bloodhound`
- `Constrained Delegation`
- `ldapsearch`

## Path Traversal

### socat

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
feroxbuster -h
```
