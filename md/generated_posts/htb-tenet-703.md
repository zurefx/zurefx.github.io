---
TitleSEO: "VulnHub — Tenet (Hard FreeBSD) | ZureFX"
TitlePost: "VulnHub — Tenet (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Tenet. AlwaysInstallElevated and Open Redirect to achieve hard compromise on FreeBSD."
Keywords: "ctf, reversing, hackthebox, insane, offsec"
URL: "https://zurefx.github.io/writeups/htb-tenet-703.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tenet-703/"
Date: "2025-05-09"
Tags: "CTF, Reversing, HackTheBox, Insane, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-tenet-703"
Permalink: "/writeups/htb-tenet-703.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Tenet** is rated **Hard** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.128.57.147`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.98.184.28/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p9200,110,139 10.59.158.46 -oN scan.txt
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

```bash
feroxbuster -h
crackmapexec smb 10.46.156.61 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.126.213.37 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

### SMB Enumeration

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.41.233.174 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p135,9200,135 10.12.32.142 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

Key finding: **Open Redirect**.

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

```bash
gobuster dir -u http://10.14.154.223/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
feroxbuster -h
crackmapexec smb 10.30.75.11 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.101.103.167 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

```powershell
evil-winrm -i 10.55.43.215 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.40.239.61
```

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `GetNPUsers`
- `gobuster`
- `crackmapexec`
- `pwncat`

### Key Takeaways

- AlwaysInstallElevated
- Open Redirect
- Command Injection
