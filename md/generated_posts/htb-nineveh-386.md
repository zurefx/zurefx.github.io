---
TitleSEO: "PwnTillDawn — Nineveh (Insane FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Nineveh (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Nineveh. Sudo Misconfiguration and Docker Escape to achieve insane compromise on FreeBSD."
Keywords: "medium, tryhackme, reversing, insane, offsec, forensics"
URL: "https://zurefx.github.io/writeups/htb-nineveh-386.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-nineveh-386/"
Date: "2025-05-21"
Tags: "Medium, TryHackMe, Reversing, Insane, OffSec, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-nineveh-386"
Permalink: "/writeups/htb-nineveh-386.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Nineveh** is rated **Insane** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.23.192.119`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.101.90.230
```

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
gobuster dir -u http://10.94.245.184/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p21,587,3306 10.55.241.149 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.41.234.23
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

```bash
nmap -sCV -p636,993,21 10.78.14.96 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.32.1.88/FUZZ
feroxbuster -h
```

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Sudo Misconfiguration**.

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.23.14.138/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
feroxbuster -h
crackmapexec smb 10.50.3.150 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```powershell
gobuster dir -u http://10.80.103.130/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.42.4.52 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.128.94 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `enum4linux`
- `ligolo-ng`
- `mimikatz`
- `impacket`
- `gobuster`

### Key Takeaways

- Sudo Misconfiguration
- Docker Escape
