---
TitleSEO: "TryHackMe — Pikaboo (Insane FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Pikaboo (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Pikaboo. Path Traversal and XSS to achieve insane compromise on FreeBSD."
Keywords: "windows, active directory, hard"
URL: "https://zurefx.github.io/writeups/htb-pikaboo-799.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pikaboo-799/"
Date: "2025-01-14"
Tags: "Windows, Active Directory, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-pikaboo-799"
Permalink: "/writeups/htb-pikaboo-799.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Pikaboo** is rated **Insane** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.89.194.59`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.101.125.150 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.57.171.50/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
gobuster dir -u http://10.128.73.198/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **Path Traversal**.

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.30.98.48 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.114.53.195/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.70.148.1 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

```powershell
nmap -sCV -p23,587,5986 10.21.197.18 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
gobuster dir -u http://10.103.145.3/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

```powershell
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.179.5 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p3268,23,3389 10.99.135.236 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `evil-winrm`
- `ldapsearch`
- `john`
- `ffuf`
- `burpsuite`

### Key Takeaways

- Path Traversal
- XSS
- NTLM Relay
- Cron Job
