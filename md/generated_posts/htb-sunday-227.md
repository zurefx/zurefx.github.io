---
TitleSEO: "HackTheBox — Sunday (Insane FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Sunday (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Sunday. SQL Injection and IDOR to achieve insane compromise on FreeBSD."
Keywords: "web, tryhackme, offsec, active directory, insane, hackthebox, reversing"
URL: "https://zurefx.github.io/writeups/htb-sunday-227.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sunday-227/"
Date: "2024-10-12"
Tags: "Web, TryHackMe, OffSec, Active Directory, Insane, HackTheBox, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-sunday-227"
Permalink: "/writeups/htb-sunday-227.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Sunday** is rated **Insane** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.66.23.68`.

### Objectives

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.101.29.186 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.41.5.52/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.21.21.2
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

### Web Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.45.138.20 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.49.206.158/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.104.155.180 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **Unconstrained Delegation**.

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.21.1.149/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.127.46 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.28.213.43/FUZZ
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.54.209.88
nmap -sCV -p445,8443,5432 10.97.90.249 -oN scan.txt
evil-winrm -i 10.94.204.60 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `feroxbuster`
- `chisel`
- `smbexec`
- `GetNPUsers`
- `pwncat`
- `bloodhound`

### Key Takeaways

- SQL Injection
- IDOR
- Unconstrained Delegation
- Writable PATH
