---
TitleSEO: "OffSec Proving Grounds — Fuse (Medium FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Fuse (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Fuse. GPP Password and Pass the Hash to achieve medium compromise on FreeBSD."
Keywords: "easy, ctf, web, medium, forensics, linux"
URL: "https://zurefx.github.io/writeups/htb-fuse-977.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-fuse-977/"
Date: "2024-04-20"
Tags: "Easy, CTF, Web, Medium, Forensics, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-fuse-977"
Permalink: "/writeups/htb-fuse-977.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Fuse** is rated **Medium** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.31.221.254`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.30.236.164 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.95.190.183/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

### Web Enumeration

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **SSRF**.

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

```bash
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

```powershell
gobuster dir -u http://10.67.226.63/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `sharphound`
- `rpcclient`
- `hashcat`
- `feroxbuster`
- `gobuster`
- `evil-winrm`
- `ffuf`
- `john`

### Key Takeaways

- GPP Password
- Pass the Hash
- ACL Abuse
- SSRF
