---
TitleSEO: "VulnHub — Sense (Easy Windows) | ZureFX"
TitlePost: "VulnHub — Sense (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Sense. DLL Hijacking and Local File Inclusion to achieve easy compromise on Windows."
Keywords: "medium, pwntilldawn, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-sense-798.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sense-798/"
Date: "2025-03-29"
Tags: "Medium, PwnTillDawn, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-sense-798"
Permalink: "/writeups/htb-sense-798.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sense** is rated **Easy** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.76.103.136`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.129.69.127 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.82.180.153 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.71.149.21 -u administrator -p 'P@ssw0rd!'
```

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **SQL Injection**.

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.135.230
crackmapexec smb 10.90.47.56 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.102.104.148 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.56.63.139/FUZZ
crackmapexec smb 10.39.40.92 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
nmap -sCV -p995,139,1521 10.84.178.147 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `wpscan`
- `hashcat`
- `GetUserSPNs`
- `nikto`

### Key Takeaways

- DLL Hijacking
- Local File Inclusion
- SQL Injection
