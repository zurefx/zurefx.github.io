---
TitleSEO: "HackTheBox — Sense (Easy OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Sense (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Sense. LXD Privilege Escalation and IDOR to achieve easy compromise on OpenBSD."
Keywords: "easy, pwntilldawn, reversing, medium, forensics"
URL: "https://zurefx.github.io/writeups/htb-sense-840.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sense-840/"
Date: "2025-04-29"
Tags: "Easy, PwnTillDawn, Reversing, Medium, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-sense-840"
Permalink: "/writeups/htb-sense-840.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sense** is rated **Easy** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.14.145.31`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.81.78.78/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.93.216.173/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **LXD Privilege Escalation**.

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

### Initial Access

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.35.182.241 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.68.167.234 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.74.25 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

```powershell
nmap -sCV -p3268,80,27017 10.18.10.212 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.73.46.33 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
evil-winrm -i 10.26.213.61 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `GetUserSPNs`
- `metasploit`
- `smbexec`
- `chisel`
- `dcomexec`
- `burpsuite`
- `crackmapexec`

### Key Takeaways

- LXD Privilege Escalation
- IDOR
- CORS Misconfiguration
- Local File Inclusion
