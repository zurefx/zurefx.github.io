---
TitleSEO: "TryHackMe — Traverxec (Medium Windows) | ZureFX"
TitlePost: "TryHackMe — Traverxec (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Traverxec. ACL Abuse and DNS Rebinding to achieve medium compromise on Windows."
Keywords: "offsec, insane, linux, forensics, hard, pwntilldawn, easy"
URL: "https://zurefx.github.io/writeups/htb-traverxec-489.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-traverxec-489/"
Date: "2025-12-03"
Tags: "OffSec, Insane, Linux, Forensics, Hard, PwnTillDawn, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-traverxec-489"
Permalink: "/writeups/htb-traverxec-489.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Traverxec** is rated **Medium** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.120.23.87`.

### Objectives

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.36.86.197/FUZZ
gobuster dir -u http://10.23.214.194/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.83.114.209 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p139,3268,22 10.109.133.101 -oN scan.txt
evil-winrm -i 10.73.2.27 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.94.19 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **DNS Rebinding**.

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

```bash
feroxbuster -h
nmap -sCV -p8080,135,110 10.78.80.248 -oN scan.txt
feroxbuster -h
```

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.134.36 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.17.101.190 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
evil-winrm -i 10.16.151.78 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.82.143.192/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `wmiexec`
- `smbexec`
- `lookupsid`
- `hydra`
- `john`

### Key Takeaways

- ACL Abuse
- DNS Rebinding
- Cron Job
- Local File Inclusion
