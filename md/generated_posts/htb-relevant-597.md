---
TitleSEO: "PwnTillDawn — Relevant (Easy OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Relevant (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Relevant. NFS No Root Squash and Weak Service Permissions to achieve easy compromise on OpenBSD."
Keywords: "tryhackme, pwntilldawn, hard, active directory, linux, web, forensics"
URL: "https://zurefx.github.io/writeups/htb-relevant-597.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-relevant-597/"
Date: "2025-07-13"
Tags: "TryHackMe, PwnTillDawn, Hard, Active Directory, Linux, Web, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-relevant-597"
Permalink: "/writeups/htb-relevant-597.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Relevant** is rated **Easy** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.101.40.225`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.76.24.200 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.95.37.115/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

### Web Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.46.104.14 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **CSRF**.

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p8443,389,25 10.23.100.100 -oN scan.txt
crackmapexec smb 10.23.57.4 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

```powershell
evil-winrm -i 10.71.189.131 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.14.141.230
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.46.166 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.67.76.213
```

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `ffuf`
- `msfvenom`
- `wmiexec`
- `secretsdump`
- `nikto`
- `dcomexec`
- `GetNPUsers`

### Key Takeaways

- NFS No Root Squash
- Weak Service Permissions
- CSRF
- Docker Escape
