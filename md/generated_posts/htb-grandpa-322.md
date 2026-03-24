---
TitleSEO: "HackTheBox — Grandpa (Hard Linux) | ZureFX"
TitlePost: "HackTheBox — Grandpa (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Grandpa. Unquoted Service Path and CORS Misconfiguration to achieve hard compromise on Linux."
Keywords: "forensics, windows, medium, tryhackme, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-grandpa-322.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-grandpa-322/"
Date: "2025-03-07"
Tags: "Forensics, Windows, Medium, TryHackMe, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-grandpa-322"
Permalink: "/writeups/htb-grandpa-322.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Grandpa** is rated **Hard** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.60.205.183`.

### Objectives

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.43.32.92/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
evil-winrm -i 10.90.133.156 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.100.254.42 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.10.129
evil-winrm -i 10.126.247.218 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.96.41.116 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.44.5.189 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.124.65.11 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Unquoted Service Path**.

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.65.112.21/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.231.56/FUZZ
```

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
feroxbuster -h
feroxbuster -h
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.10.162.82/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.54.147.134 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.71.124.59 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `kerbrute`
- `smbexec`
- `nmap`
- `atexec`
- `netcat`
- `wmiexec`

### Key Takeaways

- Unquoted Service Path
- CORS Misconfiguration
- Remote File Inclusion
