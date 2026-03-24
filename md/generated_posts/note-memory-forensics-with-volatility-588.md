---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, linux, enumeration, blue team, dfir, cheatsheet"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-588.html"
URL_IMAGES: ""
Date: "2026-02-03"
Tags: "OSCP, Linux, Enumeration, Blue Team, DFIR, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-588"
Permalink: "/notes/note-memory-forensics-with-volatility-588.html"
BtnLabel: "Read Notes"
Pick: 0
---
## CMD

### RPC

- `Broken Access Control`
- `Sudo Misconfiguration`
- `lookupsid`
- `sharphound`

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

- `Resource-Based Constrained Delegation`
- `evil-winrm`
- `lookupsid`
- `impacket`

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

## Broken Access Control

### Python

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.107.221.241/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

## Writable PATH

### Nginx

- `GetNPUsers`
- `SSRF`
- `Subdomain Takeover`
- `hydra`
- `Silver Ticket`
- `DCSync`

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.219.112 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

- `LXD Privilege Escalation`
- `sqlmap`
- `psexec`
- `gobuster`

## Path Traversal

### .NET

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

- `lookupsid`
- `SQL Injection`
- `rpcclient`
- `DCSync`
- `SSRF`

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.
