---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, malware, enumeration, networking, oscp, persistence"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-780.html"
URL_IMAGES: ""
Date: "2025-02-01"
Tags: "Lateral Movement, Malware, Enumeration, Networking, OSCP, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-780"
Permalink: "/notes/note-cryptography-fundamentals-780.html"
BtnLabel: "Read Notes"
Pick: 0
---
## DNS

### psexec

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

## SeImpersonatePrivilege

### Command Injection

```bash
feroxbuster -h
crackmapexec smb 10.108.154.170 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.112.235.55/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.38.235.68 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.70.212.43 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.12.105.104/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Laravel

### IDOR

- `dcomexec`
- `rubeus`
- `Docker Escape`
- `Remote File Inclusion`
- `IDOR`
- `Weak Service Permissions`

- `Local File Inclusion`
- `Command Injection`
- `Weak Service Permissions`

## Kerberoasting

### rpcclient

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

- `Unquoted Service Path`
- `rubeus`
- `Kerberoasting`
- `Writable PATH`
- `Docker Escape`

- `rubeus`
- `Command Injection`
- `Pass the Hash`

> **Note:** Insecure Deserialization was identified as the primary attack vector in this scenario.

- `feroxbuster`
- `impacket`
- `wpscan`
- `XXE`

## ligolo-ng

### mimikatz

- `LAPS Abuse`
- `XSS`
- `IDOR`

> **Note:** Writable PATH was identified as the primary attack vector in this scenario.

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.
