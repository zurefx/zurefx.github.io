---
TitleSEO: "OffSec Proving Grounds — Tentacle (Insane OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Tentacle (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Tentacle. Weak Service Permissions and SQL Injection to achieve insane compromise on OpenBSD."
Keywords: "insane, forensics, ctf, hackthebox, reversing, windows"
URL: "https://zurefx.github.io/writeups/htb-tentacle-918.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tentacle-918/"
Date: "2025-11-30"
Tags: "Insane, Forensics, CTF, HackTheBox, Reversing, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-tentacle-918"
Permalink: "/writeups/htb-tentacle-918.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tentacle** is rated **Insane** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.40.65.243`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.111.191.200 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **AlwaysInstallElevated**.

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.13.130.97 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
gobuster dir -u http://10.113.222.82/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.119.202.141/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.163.197/FUZZ
crackmapexec smb 10.42.154.200 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `atexec`
- `rpcclient`
- `psexec`
- `burpsuite`

### Key Takeaways

- Weak Service Permissions
- SQL Injection
- CORS Misconfiguration
- AlwaysInstallElevated
