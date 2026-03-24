---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, windows, malware, lateral movement"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-240.html"
URL_IMAGES: ""
Date: "2024-03-07"
Tags: "Enumeration, Windows, Malware, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-240"
Permalink: "/notes/note-linux-privilege-escalation-techniques-240.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SMB

### DLL Hijacking

- `Unconstrained Delegation`
- `kerbrute`
- `CSRF`
- `Subdomain Takeover`

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Flask

### gobuster

- `DLL Hijacking`
- `SQL Injection`
- `Open Redirect`
- `XSS`
- `gobuster`
- `Broken Access Control`

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

- `Golden Ticket`
- `rubeus`
- `ldapsearch`

- `NTLM Relay`
- `DCSync`
- `smbclient`
- `Silver Ticket`

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

## CMD

### crackmapexec

- `hydra`
- `Path Traversal`
- `Golden Ticket`
- `Pass the Ticket`
- `SeImpersonatePrivilege`
- `IDOR`

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.40.197.103
gobuster dir -u http://10.104.107.129/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.177.63
```
