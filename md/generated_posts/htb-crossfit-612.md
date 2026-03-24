---
TitleSEO: "HackTheBox — Crossfit (Hard Windows) | ZureFX"
TitlePost: "HackTheBox — Crossfit (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Crossfit. Weak Service Permissions and Resource-Based Constrained Delegation to achieve hard compromise on Windows."
Keywords: "offsec, linux, hard, tryhackme, easy, windows"
URL: "https://zurefx.github.io/writeups/htb-crossfit-612.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-crossfit-612/"
Date: "2025-01-10"
Tags: "OffSec, Linux, Hard, TryHackMe, Easy, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-crossfit-612"
Permalink: "/writeups/htb-crossfit-612.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Crossfit** is rated **Hard** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.126.49.157`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p135,23,22 10.69.169.217 -oN scan.txt
evil-winrm -i 10.113.85.213 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.92.89.75 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.168.55/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.64.188.150/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.32.76.235/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.14.33.154 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **Weak Service Permissions**.

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.129.19.14 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.47.247.86 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
feroxbuster -h
feroxbuster -h
evil-winrm -i 10.22.57.20 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.40.90.193 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.93.135.109 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `feroxbuster`
- `smbexec`
- `rubeus`
- `sqlmap`
- `burpsuite`
- `GetNPUsers`

### Key Takeaways

- Weak Service Permissions
- Resource-Based Constrained Delegation
- SQL Injection
- IDOR
