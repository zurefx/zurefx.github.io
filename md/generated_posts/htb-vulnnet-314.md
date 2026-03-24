---
TitleSEO: "TryHackMe — Vulnnet (Hard FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Vulnnet (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Vulnnet. GPP Password and Constrained Delegation to achieve hard compromise on FreeBSD."
Keywords: "tryhackme, medium, easy, web, hard, ctf, windows"
URL: "https://zurefx.github.io/writeups/htb-vulnnet-314.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-vulnnet-314/"
Date: "2026-01-12"
Tags: "TryHackMe, Medium, Easy, Web, Hard, CTF, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-vulnnet-314"
Permalink: "/writeups/htb-vulnnet-314.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Vulnnet** is rated **Hard** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.87.113.122`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.45.118.177 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.110.5/FUZZ
feroxbuster -h
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.11.61.229
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

### Web Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.219.70 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **GPP Password**.

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.51.172.20/FUZZ
nmap -sCV -p587,993,110 10.111.173.150 -oN scan.txt
gobuster dir -u http://10.88.117.212/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
feroxbuster -h
```

### Exploitation

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

```powershell
crackmapexec smb 10.57.184.178 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `dcomexec`
- `atexec`
- `wmiexec`
- `netcat`

### Key Takeaways

- GPP Password
- Constrained Delegation
- Subdomain Takeover
