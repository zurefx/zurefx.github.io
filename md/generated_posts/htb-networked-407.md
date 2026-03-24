---
TitleSEO: "OffSec Proving Grounds — Networked (Hard Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Networked (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Networked. XXE and Pass the Ticket to achieve hard compromise on Windows."
Keywords: "hackthebox, pwntilldawn, windows"
URL: "https://zurefx.github.io/writeups/htb-networked-407.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-networked-407/"
Date: "2025-02-26"
Tags: "HackTheBox, PwnTillDawn, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-networked-407"
Permalink: "/writeups/htb-networked-407.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Networked** is rated **Hard** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.90.45.224`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.85.84.203 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

Key finding: **Pass the Ticket**.

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.16.74.234/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.128.205.210 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
nmap -sCV -p3389,135,143 10.81.20.171 -oN scan.txt
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.76.88.111/FUZZ
gobuster dir -u http://10.19.176.134/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `feroxbuster`
- `nikto`
- `ldapsearch`
- `evil-winrm`

### Key Takeaways

- XXE
- Pass the Ticket
