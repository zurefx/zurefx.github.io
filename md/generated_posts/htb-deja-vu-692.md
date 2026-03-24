---
TitleSEO: "VulnHub — Deja Vu (Easy OpenBSD) | ZureFX"
TitlePost: "VulnHub — Deja Vu (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Deja Vu. Sudo Misconfiguration and SUID Binary to achieve easy compromise on OpenBSD."
Keywords: "reversing, hackthebox, offsec, medium, active directory"
URL: "https://zurefx.github.io/writeups/htb-deja-vu-692.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-deja-vu-692/"
Date: "2026-03-15"
Tags: "Reversing, HackTheBox, OffSec, Medium, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-deja-vu-692"
Permalink: "/writeups/htb-deja-vu-692.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Deja Vu** is rated **Easy** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.49.139.152`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
```

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.82.91/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.25.220 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.27.110.198 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.60.111.102 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.11.150.220/FUZZ
evil-winrm -i 10.34.204.42 -u administrator -p 'P@ssw0rd!'
```

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **SUID Binary**.

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3268,22,8888 10.76.150.5 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.96.133 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
evil-winrm -i 10.115.168.138 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.20.177.77/FUZZ
nmap -sCV -p3389,143,135 10.46.19.233 -oN scan.txt
crackmapexec smb 10.75.103.146 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `crackmapexec`
- `enum4linux`
- `dcomexec`
- `ldapsearch`
- `burpsuite`

### Key Takeaways

- Sudo Misconfiguration
- SUID Binary
- Broken Access Control
