---
TitleSEO: "VulnHub — Cronos (Easy FreeBSD) | ZureFX"
TitlePost: "VulnHub — Cronos (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Cronos. Local File Inclusion and IDOR to achieve easy compromise on FreeBSD."
Keywords: "web, offsec, reversing"
URL: "https://zurefx.github.io/writeups/htb-cronos-578.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cronos-578/"
Date: "2025-02-10"
Tags: "Web, OffSec, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-cronos-578"
Permalink: "/writeups/htb-cronos-578.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Cronos** is rated **Easy** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.102.23.191`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.46.153.244/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.115.179.53/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
crackmapexec smb 10.110.242.253 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.55.36.166 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.115.14.34/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

### Web Enumeration

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

Key finding: **Local File Inclusion**.

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
crackmapexec smb 10.73.101.119 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.84.244.61/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.87.132.8
impacket-secretsdump administrator:'P@ssw0rd!'@10.97.41.61
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
gobuster dir -u http://10.126.186.98/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3306,23,80 10.71.29.97 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `crackmapexec`
- `enum4linux`
- `secretsdump`
- `rpcclient`
- `nmap`
- `nikto`

### Key Takeaways

- Local File Inclusion
- IDOR
