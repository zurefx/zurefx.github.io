---
TitleSEO: "HackTheBox — Valentine (Medium Windows) | ZureFX"
TitlePost: "HackTheBox — Valentine (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Valentine. Silver Ticket and Open Redirect to achieve medium compromise on Windows."
Keywords: "medium, tryhackme, forensics"
URL: "https://zurefx.github.io/writeups/htb-valentine-261.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-valentine-261/"
Date: "2026-01-24"
Tags: "Medium, TryHackMe, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-valentine-261"
Permalink: "/writeups/htb-valentine-261.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Valentine** is rated **Medium** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.119.29.200`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.30.25.241 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.125.198.245/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.65.213.33/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
crackmapexec smb 10.10.197.150 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.103.139.64 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.108.55.234 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Open Redirect**.

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.70.134 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.72.252.133/FUZZ
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
evil-winrm -i 10.30.129.208 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
evil-winrm -i 10.37.16.30 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `dcomexec`
- `ffuf`
- `nmap`
- `sqlmap`
- `kerbrute`
- `crackmapexec`
- `wmiexec`

### Key Takeaways

- Silver Ticket
- Open Redirect
