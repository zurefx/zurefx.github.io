---
TitleSEO: "TryHackMe — Mustacchio (Insane FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Mustacchio (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Mustacchio. Unconstrained Delegation and SSRF to achieve insane compromise on FreeBSD."
Keywords: "offsec, web, forensics, insane, windows, active directory, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-mustacchio-244.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mustacchio-244/"
Date: "2024-09-13"
Tags: "OffSec, Web, Forensics, Insane, Windows, Active Directory, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-mustacchio-244"
Permalink: "/writeups/htb-mustacchio-244.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mustacchio** is rated **Insane** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.100.224.150`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.70.214.70 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

```bash
feroxbuster -h
feroxbuster -h
evil-winrm -i 10.44.167.17 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

### Web Enumeration

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **Docker Escape**.

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.147.89
crackmapexec smb 10.54.152.14 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.41.54.68/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.66.172.61
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.42.236.125/FUZZ
evil-winrm -i 10.59.72.127 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

```powershell
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `rpcclient`
- `ldapsearch`
- `rubeus`
- `crackmapexec`
- `psexec`
- `metasploit`
- `kerbrute`
- `hashcat`

### Key Takeaways

- Unconstrained Delegation
- SSRF
- LXD Privilege Escalation
- Docker Escape
