---
TitleSEO: "HackTheBox — Shocker (Medium FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Shocker (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Shocker. Golden Ticket and Remote Code Execution to achieve medium compromise on FreeBSD."
Keywords: "medium, web, offsec, hackthebox, ctf, active directory"
URL: "https://zurefx.github.io/writeups/htb-shocker-957.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-shocker-957/"
Date: "2025-06-16"
Tags: "Medium, Web, OffSec, HackTheBox, CTF, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-shocker-957"
Permalink: "/writeups/htb-shocker-957.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Shocker** is rated **Medium** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.48.6.225`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.112.182.66 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.197.194/FUZZ
```

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.99.11.14 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

### Web Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
evil-winrm -i 10.127.128.70 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.116.7.58/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.105.206.60 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

Key finding: **Golden Ticket**.

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.68.10.3
evil-winrm -i 10.23.168.95 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

```powershell
feroxbuster -h
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
evil-winrm -i 10.76.100.159 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p443,995,636 10.54.240.180 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `enum4linux`
- `dcomexec`
- `netcat`
- `wmiexec`
- `ffuf`
- `burpsuite`
- `sqlmap`
- `gobuster`

### Key Takeaways

- Golden Ticket
- Remote Code Execution
- CSRF
