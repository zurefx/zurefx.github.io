---
TitleSEO: "VulnHub — Steel Mountain (Medium FreeBSD) | ZureFX"
TitlePost: "VulnHub — Steel Mountain (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Steel Mountain. Resource-Based Constrained Delegation and AlwaysInstallElevated to achieve medium compromise on FreeBSD."
Keywords: "hard, easy, medium, tryhackme, insane, linux, forensics"
URL: "https://zurefx.github.io/writeups/htb-steel-mountain-336.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-steel-mountain-336/"
Date: "2025-12-30"
Tags: "Hard, Easy, Medium, TryHackMe, Insane, Linux, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-steel-mountain-336"
Permalink: "/writeups/htb-steel-mountain-336.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Steel Mountain** is rated **Medium** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.27.99.70`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.59.61.204
gobuster dir -u http://10.101.58.66/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.32.135.188 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.79.69.220 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.125.46.66/FUZZ
```

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

Key finding: **Resource-Based Constrained Delegation**.

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.57.98.180 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.58.187.10 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
evil-winrm -i 10.63.48.172 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.94.251.7/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `john`
- `smbexec`
- `rubeus`
- `mimikatz`
- `crackmapexec`

### Key Takeaways

- Resource-Based Constrained Delegation
- AlwaysInstallElevated
- SSRF
