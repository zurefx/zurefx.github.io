---
TitleSEO: "TryHackMe — Buff (Insane FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Buff (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Buff. ACL Abuse and Unconstrained Delegation to achieve insane compromise on FreeBSD."
Keywords: "web, hard, insane, offsec, reversing, medium"
URL: "https://zurefx.github.io/writeups/htb-buff-439.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-buff-439/"
Date: "2025-08-11"
Tags: "Web, Hard, Insane, OffSec, Reversing, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-buff-439"
Permalink: "/writeups/htb-buff-439.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Buff** is rated **Insane** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.26.230.184`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.45.248.169 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

### Web Enumeration

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.122.81.176 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.192.160 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

Key finding: **ACL Abuse**.

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.58.205.207/FUZZ
```

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.42.57.75/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.95.61.247/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.44.136.117 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `feroxbuster`
- `wmiexec`
- `secretsdump`
- `metasploit`
- `socat`
- `wpscan`

### Key Takeaways

- ACL Abuse
- Unconstrained Delegation
- CSRF
- Silver Ticket
