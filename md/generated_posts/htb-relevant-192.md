---
TitleSEO: "OffSec Proving Grounds — Relevant (Insane OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Relevant (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Relevant. Unconstrained Delegation and Resource-Based Constrained Delegation to achieve insane compromise on OpenBSD."
Keywords: "hackthebox, medium, linux"
URL: "https://zurefx.github.io/writeups/htb-relevant-192.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-relevant-192/"
Date: "2026-01-27"
Tags: "HackTheBox, Medium, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-relevant-192"
Permalink: "/writeups/htb-relevant-192.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Relevant** is rated **Insane** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.54.31.136`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.22.114.50 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5986,636,995 10.45.145.219 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.22.22.22 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.33.150.183 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.42.18.49/FUZZ
```

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

Key finding: **Resource-Based Constrained Delegation**.

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
evil-winrm -i 10.31.132.166 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.73.68.28
```

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `ffuf`
- `rpcclient`
- `crackmapexec`
- `kerbrute`
- `hashcat`

### Key Takeaways

- Unconstrained Delegation
- Resource-Based Constrained Delegation
