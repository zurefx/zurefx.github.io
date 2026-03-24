---
TitleSEO: "TryHackMe — Pikaboo (Insane FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Pikaboo (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Pikaboo. Unquoted Service Path and Broken Access Control to achieve insane compromise on FreeBSD."
Keywords: "medium, easy, hackthebox, reversing, offsec"
URL: "https://zurefx.github.io/writeups/htb-pikaboo-765.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pikaboo-765/"
Date: "2024-09-06"
Tags: "Medium, Easy, HackTheBox, Reversing, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-pikaboo-765"
Permalink: "/writeups/htb-pikaboo-765.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Pikaboo** is rated **Insane** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.28.109.27`.

### Objectives

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.68.91.85 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
feroxbuster -h
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.51.55.50
```

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.43.241.175 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.101.9.74 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.29.244 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **Subdomain Takeover**.

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

```bash
crackmapexec smb 10.110.68.62 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
gobuster dir -u http://10.18.216.184/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.39.26.84
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.84.173.128/FUZZ
crackmapexec smb 10.126.135.155 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `rubeus`
- `gobuster`
- `kerbrute`
- `sqlmap`
- `enum4linux`

### Key Takeaways

- Unquoted Service Path
- Broken Access Control
- Subdomain Takeover
