---
TitleSEO: "OffSec Proving Grounds — Forge (Insane Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Forge (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Forge. Unconstrained Delegation and CORS Misconfiguration to achieve insane compromise on Windows."
Keywords: "active directory, medium, ctf"
URL: "https://zurefx.github.io/writeups/htb-forge-143.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-forge-143/"
Date: "2025-04-14"
Tags: "Active Directory, Medium, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-forge-143"
Permalink: "/writeups/htb-forge-143.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Forge** is rated **Insane** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.102.214.28`.

### Objectives

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
nmap -sCV -p445,445,80 10.12.6.155 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
crackmapexec smb 10.63.14.115 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.16.46.83/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.83.70.48/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.115.91.181/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.113.33.249 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **CORS Misconfiguration**.

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.8.96/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
feroxbuster -h
crackmapexec smb 10.24.123.105 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.42.226.77 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

```powershell
nmap -sCV -p5432,443,993 10.85.31.160 -oN scan.txt
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `nmap`
- `pwncat`
- `wmiexec`
- `kerbrute`
- `secretsdump`
- `evil-winrm`
- `metasploit`
- `burpsuite`

### Key Takeaways

- Unconstrained Delegation
- CORS Misconfiguration
