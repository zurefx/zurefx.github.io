---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, linux, cheatsheet, oscp, networking"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-233.html"
URL_IMAGES: ""
Date: "2026-02-21"
Tags: "Blue Team, Linux, Cheatsheet, OSCP, Networking"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-233"
Permalink: "/notes/note-reverse-engineering-basics-233.html"
BtnLabel: "Read Notes"
Pick: 0
---
## WordPress

### Django

```bash
evil-winrm -i 10.95.254.27 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

## Pass the Ticket

### SMTP

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.134.95/FUZZ
crackmapexec smb 10.76.3.238 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
nmap -sCV -p389,23,21 10.106.246.174 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

## Python

### Sudo Misconfiguration

- `hydra`
- `Insecure Deserialization`
- `IDOR`
- `DCSync`

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
gobuster dir -u http://10.77.20.13/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Python

### MySQL

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.199.172 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

> **Note:** Command Injection was identified as the primary attack vector in this scenario.

## sqlmap

### MSSQL

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

- `enum4linux`
- `rpcclient`
- `SSRF`

- `evil-winrm`
- `socat`
- `DCSync`
- `Path Traversal`

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.
