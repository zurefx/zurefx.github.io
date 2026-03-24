---
TitleSEO: "OffSec Proving Grounds — Poison (Hard FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Poison (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Poison. Remote File Inclusion and Cron Job to achieve hard compromise on FreeBSD."
Keywords: "reversing, linux, offsec, easy, medium, ctf"
URL: "https://zurefx.github.io/writeups/htb-poison-220.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-poison-220/"
Date: "2024-11-09"
Tags: "Reversing, Linux, OffSec, Easy, Medium, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-poison-220"
Permalink: "/writeups/htb-poison-220.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Poison** is rated **Hard** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.113.141.64`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.37.33.172 -u administrator -p 'P@ssw0rd!'
```

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
evil-winrm -i 10.53.140.217 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.168.213 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.121.167.38
```

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Remote File Inclusion**.

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p5985,8443,21 10.47.97.236 -oN scan.txt
```

### Exploitation

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.101.37.149 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `msfvenom`
- `sqlmap`
- `GetNPUsers`
- `GetUserSPNs`
- `mimikatz`
- `lookupsid`
- `sharphound`

### Key Takeaways

- Remote File Inclusion
- Cron Job
- Kerberoasting
- Golden Ticket
