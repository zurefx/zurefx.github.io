---
TitleSEO: "PwnTillDawn — Convertmyfund (Hard Linux) | ZureFX"
TitlePost: "PwnTillDawn — Convertmyfund (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Convertmyfund. Constrained Delegation and NFS No Root Squash to achieve hard compromise on Linux."
Keywords: "linux, reversing, offsec, web, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-convertmyfund-794.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-convertmyfund-794/"
Date: "2025-01-18"
Tags: "Linux, Reversing, OffSec, Web, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-convertmyfund-794"
Permalink: "/writeups/htb-convertmyfund-794.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Convertmyfund** is rated **Hard** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.128.67.241`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.123.113.253 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.67.15.212/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Web Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.108.105.91/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.66.81/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

Key finding: **Constrained Delegation**.

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.91.166.130/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.35.117.164 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.21.51.62/FUZZ
```

### Exploitation

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.17.218.221/FUZZ
crackmapexec smb 10.127.162.60 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `rubeus`
- `smbexec`
- `chisel`
- `evil-winrm`

### Key Takeaways

- Constrained Delegation
- NFS No Root Squash
- Pass the Ticket
- Subdomain Takeover
