---
TitleSEO: "PwnTillDawn — Traverxec (Hard Windows) | ZureFX"
TitlePost: "PwnTillDawn — Traverxec (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Traverxec. IDOR and Docker Escape to achieve hard compromise on Windows."
Keywords: "tryhackme, hard, reversing, forensics, linux"
URL: "https://zurefx.github.io/writeups/htb-traverxec-655.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-traverxec-655/"
Date: "2024-06-03"
Tags: "TryHackMe, Hard, Reversing, Forensics, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-traverxec-655"
Permalink: "/writeups/htb-traverxec-655.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Traverxec** is rated **Hard** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.80.119.163`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.20.39.206
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.11.155.229/FUZZ
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.55.25.115 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **IDOR**.

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
gobuster dir -u http://10.119.43.61/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.47.4.192/FUZZ
nmap -sCV -p464,445,21 10.111.108.231 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.154.86/FUZZ
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `ldapsearch`
- `sharphound`
- `metasploit`
- `psexec`
- `kerbrute`
- `chisel`

### Key Takeaways

- IDOR
- Docker Escape
- Unconstrained Delegation
