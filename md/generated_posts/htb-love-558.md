---
TitleSEO: "PwnTillDawn — Love (Medium FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Love (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Love. Kerberoasting and Resource-Based Constrained Delegation to achieve medium compromise on FreeBSD."
Keywords: "tryhackme, offsec, windows, reversing, web, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-love-558.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-love-558/"
Date: "2025-12-13"
Tags: "TryHackMe, OffSec, Windows, Reversing, Web, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-love-558"
Permalink: "/writeups/htb-love-558.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Love** is rated **Medium** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.116.76.65`.

### Objectives

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.55.166.12 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p443,139,445 10.125.139.181 -oN scan.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.3.100/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

### Web Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **Kerberoasting**.

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.59.193.16/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.40.170.112/FUZZ
```

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.215.170
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
crackmapexec smb 10.105.185.24 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `atexec`
- `smbclient`
- `ldapsearch`
- `nmap`

### Key Takeaways

- Kerberoasting
- Resource-Based Constrained Delegation
