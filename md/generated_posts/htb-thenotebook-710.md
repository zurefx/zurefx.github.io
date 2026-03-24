---
TitleSEO: "HackTheBox — TheNotebook (Easy OpenBSD) | ZureFX"
TitlePost: "HackTheBox — TheNotebook (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox TheNotebook. AS-REP Roasting and Remote File Inclusion to achieve easy compromise on OpenBSD."
Keywords: "reversing, offsec, windows, web, forensics"
URL: "https://zurefx.github.io/writeups/htb-thenotebook-710.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-thenotebook-710/"
Date: "2024-07-17"
Tags: "Reversing, OffSec, Windows, Web, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-thenotebook-710"
Permalink: "/writeups/htb-thenotebook-710.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **TheNotebook** is rated **Easy** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.17.238.194`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.138.111 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.88.33.69 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

### Web Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.98.106.242/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.66.251.222 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **AS-REP Roasting**.

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
crackmapexec smb 10.73.55.31 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.53.29.47/FUZZ
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

```powershell
gobuster dir -u http://10.83.240.254/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.97.109
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `impacket`
- `ffuf`
- `netcat`
- `enum4linux`

### Key Takeaways

- AS-REP Roasting
- Remote File Inclusion
- Sudo Misconfiguration
