---
TitleSEO: "PwnTillDawn — SwagShop (Hard Windows) | ZureFX"
TitlePost: "PwnTillDawn — SwagShop (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn SwagShop. Command Injection and Weak Service Permissions to achieve hard compromise on Windows."
Keywords: "offsec, active directory, windows, linux, reversing, forensics, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-swagshop-402.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-swagshop-402/"
Date: "2025-05-12"
Tags: "OffSec, Active Directory, Windows, Linux, Reversing, Forensics, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-swagshop-402"
Permalink: "/writeups/htb-swagshop-402.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **SwagShop** is rated **Hard** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.100.225.132`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p27017,5432,27017 10.89.254.68 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.72.168.102 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.21.83.15/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.102.116.160/FUZZ
nmap -sCV -p636,1433,389 10.126.165.236 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.35.15.45 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Weak Service Permissions**.

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p25,8888,8888 10.120.60.71 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

```powershell
crackmapexec smb 10.66.70.148 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.83.24.79/FUZZ
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `chisel`
- `rubeus`
- `sqlmap`
- `dcomexec`
- `metasploit`

### Key Takeaways

- Command Injection
- Weak Service Permissions
