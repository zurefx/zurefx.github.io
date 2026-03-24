---
TitleSEO: "TryHackMe — Sense (Hard FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Sense (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Sense. Remote File Inclusion and SSRF to achieve hard compromise on FreeBSD."
Keywords: "linux, tryhackme, pwntilldawn, active directory, forensics"
URL: "https://zurefx.github.io/writeups/htb-sense-356.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sense-356/"
Date: "2024-10-12"
Tags: "Linux, TryHackMe, PwnTillDawn, Active Directory, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-sense-356"
Permalink: "/writeups/htb-sense-356.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sense** is rated **Hard** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.81.230.70`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.30.6.130/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.12.115.88 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.107.101.98
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.112.217.150 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **Broken Access Control**.

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
crackmapexec smb 10.11.28.80 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p27017,53,5432 10.88.143.207 -oN scan.txt
```

### Exploitation

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

```powershell
crackmapexec smb 10.105.244.87 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `bloodhound`
- `kerbrute`
- `pwncat`
- `evil-winrm`

### Key Takeaways

- Remote File Inclusion
- SSRF
- Broken Access Control
