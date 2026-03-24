---
TitleSEO: "VulnHub — Ophiuchi (Insane FreeBSD) | ZureFX"
TitlePost: "VulnHub — Ophiuchi (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Ophiuchi. DNS Rebinding and Docker Escape to achieve insane compromise on FreeBSD."
Keywords: "forensics, medium, offsec, windows, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-ophiuchi-309.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ophiuchi-309/"
Date: "2025-08-17"
Tags: "Forensics, Medium, OffSec, Windows, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-ophiuchi-309"
Permalink: "/writeups/htb-ophiuchi-309.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Ophiuchi** is rated **Insane** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.32.149.237`.

### Objectives

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.14.157.103
```

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

```bash
feroxbuster -h
nmap -sCV -p993,445,464 10.96.102.220 -oN scan.txt
crackmapexec smb 10.67.58.39 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.151.148 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
evil-winrm -i 10.39.78.146 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.74.194.22 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.85.25.55
```

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **Docker Escape**.

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.18.219.186 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.107.199.124/FUZZ
crackmapexec smb 10.100.172.222 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.105.246.168/FUZZ
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.53.196.189/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `socat`
- `chisel`
- `rubeus`
- `smbclient`

### Key Takeaways

- DNS Rebinding
- Docker Escape
