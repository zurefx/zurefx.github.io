---
TitleSEO: "PwnTillDawn — Traverxec (Medium FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Traverxec (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Traverxec. Broken Access Control and AlwaysInstallElevated to achieve medium compromise on FreeBSD."
Keywords: "easy, hard, forensics"
URL: "https://zurefx.github.io/writeups/htb-traverxec-818.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-traverxec-818/"
Date: "2025-05-22"
Tags: "Easy, Hard, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-traverxec-818"
Permalink: "/writeups/htb-traverxec-818.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Traverxec** is rated **Medium** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.107.49.50`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p139,5986,53 10.31.82.48 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.74.179.154/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

```bash
feroxbuster -h
crackmapexec smb 10.79.217.228 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
nmap -sCV -p8080,5432,8888 10.81.138.67 -oN scan.txt
crackmapexec smb 10.126.30.132 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **DLL Hijacking**.

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
nmap -sCV -p995,5986,445 10.51.180.199 -oN scan.txt
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.28.195.91/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
gobuster dir -u http://10.90.24.85/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.105.194.243
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `impacket`
- `bloodhound`
- `nmap`
- `GetNPUsers`
- `crackmapexec`

### Key Takeaways

- Broken Access Control
- AlwaysInstallElevated
- Remote File Inclusion
- DLL Hijacking
