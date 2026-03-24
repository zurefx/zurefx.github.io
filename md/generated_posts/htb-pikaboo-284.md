---
TitleSEO: "PwnTillDawn — Pikaboo (Hard OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Pikaboo (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Pikaboo. SSRF and LAPS Abuse to achieve hard compromise on OpenBSD."
Keywords: "easy, hard, forensics, medium, active directory"
URL: "https://zurefx.github.io/writeups/htb-pikaboo-284.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pikaboo-284/"
Date: "2024-12-14"
Tags: "Easy, Hard, Forensics, Medium, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-pikaboo-284"
Permalink: "/writeups/htb-pikaboo-284.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Pikaboo** is rated **Hard** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.62.18.90`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.28.194.176/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.60.135.97/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.125.98.160 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

Key finding: **SSRF**.

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.86.99.53/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.42.174/FUZZ
crackmapexec smb 10.32.154.199 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.89.43.69/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.65.10
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.45.94.115 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `GetUserSPNs`
- `impacket`
- `rpcclient`
- `wmiexec`
- `GetNPUsers`

### Key Takeaways

- SSRF
- LAPS Abuse
- Subdomain Takeover
