---
TitleSEO: "TryHackMe — Horizontall (Medium OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Horizontall (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Horizontall. Golden Ticket and SSTI to achieve medium compromise on OpenBSD."
Keywords: "insane, hard, active directory, web, offsec, reversing, forensics"
URL: "https://zurefx.github.io/writeups/htb-horizontall-131.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-horizontall-131/"
Date: "2024-04-26"
Tags: "Insane, Hard, Active Directory, Web, OffSec, Reversing, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-horizontall-131"
Permalink: "/writeups/htb-horizontall-131.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Horizontall** is rated **Medium** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.61.135.63`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.114.167.174 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

```bash
gobuster dir -u http://10.49.254.13/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Web Enumeration

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.13.206.55 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.101.236.44/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.23.233.191/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.95.109.161 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **SSTI**.

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

```bash
evil-winrm -i 10.128.154.90 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

```powershell
crackmapexec smb 10.127.207.163 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p22,9200,445 10.28.105.247 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.89.221.17
```

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `john`
- `impacket`
- `burpsuite`
- `mimikatz`

### Key Takeaways

- Golden Ticket
- SSTI
- Broken Access Control
- Command Injection
