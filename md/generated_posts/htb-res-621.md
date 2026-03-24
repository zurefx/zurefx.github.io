---
TitleSEO: "VulnHub — Res (Hard Windows) | ZureFX"
TitlePost: "VulnHub — Res (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Res. Remote File Inclusion and Kerberoasting to achieve hard compromise on Windows."
Keywords: "forensics, tryhackme, offsec, pwntilldawn, windows, ctf"
URL: "https://zurefx.github.io/writeups/htb-res-621.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-res-621/"
Date: "2024-03-10"
Tags: "Forensics, TryHackMe, OffSec, PwnTillDawn, Windows, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-res-621"
Permalink: "/writeups/htb-res-621.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Res** is rated **Hard** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.37.96.164`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.63.246.43 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.3.154 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.84.26.211/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Remote File Inclusion**.

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.207.76 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.37.228.154/FUZZ
crackmapexec smb 10.14.6.180 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

```powershell
crackmapexec smb 10.62.137.139 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.96.140.82/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `ldapsearch`
- `GetUserSPNs`
- `ffuf`
- `rubeus`
- `enum4linux`
- `netcat`
- `nikto`
- `secretsdump`

### Key Takeaways

- Remote File Inclusion
- Kerberoasting
