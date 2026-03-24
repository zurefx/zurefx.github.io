---
TitleSEO: "PwnTillDawn — Steel Mountain (Easy OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Steel Mountain (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Steel Mountain. ACL Abuse and DLL Hijacking to achieve easy compromise on OpenBSD."
Keywords: "offsec, active directory, linux, medium"
URL: "https://zurefx.github.io/writeups/htb-steel-mountain-315.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-steel-mountain-315/"
Date: "2025-03-25"
Tags: "OffSec, Active Directory, Linux, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-steel-mountain-315"
Permalink: "/writeups/htb-steel-mountain-315.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Steel Mountain** is rated **Easy** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.96.115.168`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.40.70.31/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```bash
gobuster dir -u http://10.34.26.88/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.38.200.222 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.22.153.2 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **ACL Abuse**.

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.118.114.247 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.73.218.60 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.247.209 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
feroxbuster -h
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.186.26 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `smbclient`
- `wmiexec`
- `ffuf`
- `nikto`
- `wpscan`

### Key Takeaways

- ACL Abuse
- DLL Hijacking
