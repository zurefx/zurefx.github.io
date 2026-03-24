---
TitleSEO: "VulnHub — Startup (Insane FreeBSD) | ZureFX"
TitlePost: "VulnHub — Startup (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Startup. LXD Privilege Escalation and CSRF to achieve insane compromise on FreeBSD."
Keywords: "active directory, forensics, easy, hackthebox, offsec, tryhackme, ctf"
URL: "https://zurefx.github.io/writeups/htb-startup-458.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-startup-458/"
Date: "2025-09-06"
Tags: "Active Directory, Forensics, Easy, HackTheBox, OffSec, TryHackMe, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-startup-458"
Permalink: "/writeups/htb-startup-458.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Startup** is rated **Insane** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.114.84.21`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.74.173.152/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.72.56.204 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.119.47.133
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.199.190/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.35.37.75
```

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

Key finding: **CSRF**.

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p3268,8888,587 10.27.44.47 -oN scan.txt
evil-winrm -i 10.34.45.241 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.124.100.22 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p80,27017,23 10.28.57.124 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `feroxbuster`
- `gobuster`
- `ligolo-ng`
- `hashcat`
- `enum4linux`
- `atexec`

### Key Takeaways

- LXD Privilege Escalation
- CSRF
- Command Injection
