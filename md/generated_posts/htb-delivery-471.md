---
TitleSEO: "PwnTillDawn — Delivery (Easy OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Delivery (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Delivery. XXE and NFS No Root Squash to achieve easy compromise on OpenBSD."
Keywords: "ctf, hard, offsec, linux, easy"
URL: "https://zurefx.github.io/writeups/htb-delivery-471.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-delivery-471/"
Date: "2025-10-18"
Tags: "CTF, Hard, OffSec, Linux, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-delivery-471"
Permalink: "/writeups/htb-delivery-471.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Delivery** is rated **Easy** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.79.240.123`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.88.19.41 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.92.99.83 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.70.250.93 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.81.170.35
```

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

### SMB Enumeration

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.57.187.53 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

Key finding: **NFS No Root Squash**.

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.62.94.240 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.62.214.44/FUZZ
nmap -sCV -p5986,389,3306 10.48.55.34 -oN scan.txt
nmap -sCV -p21,53,636 10.72.82.163 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
crackmapexec smb 10.20.101.137 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `sqlmap`
- `metasploit`
- `hashcat`
- `lookupsid`

### Key Takeaways

- XXE
- NFS No Root Squash
