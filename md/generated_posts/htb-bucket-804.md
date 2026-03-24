---
TitleSEO: "TryHackMe — Bucket (Insane FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Bucket (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Bucket. IDOR and Silver Ticket to achieve insane compromise on FreeBSD."
Keywords: "ctf, offsec, web, forensics, windows, hard"
URL: "https://zurefx.github.io/writeups/htb-bucket-804.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-bucket-804/"
Date: "2025-12-21"
Tags: "CTF, OffSec, Web, Forensics, Windows, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-bucket-804"
Permalink: "/writeups/htb-bucket-804.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Bucket** is rated **Insane** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.55.163.250`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p5432,389,443 10.91.122.52 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.175.69 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.71.46.131/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.18.245.244/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.11.215.168 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

### Web Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.71.223 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.56.77.115 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **SSTI**.

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

```bash
nmap -sCV -p995,443,21 10.33.40.2 -oN scan.txt
crackmapexec smb 10.30.223.225 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

```powershell
nmap -sCV -p8080,53,445 10.27.14.98 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.15.203.146 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `sqlmap`
- `kerbrute`
- `nikto`
- `crackmapexec`
- `wpscan`

### Key Takeaways

- IDOR
- Silver Ticket
- SSTI
- Sudo Misconfiguration
