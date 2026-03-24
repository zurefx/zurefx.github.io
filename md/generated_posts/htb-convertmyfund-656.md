---
TitleSEO: "VulnHub — Convertmyfund (Insane FreeBSD) | ZureFX"
TitlePost: "VulnHub — Convertmyfund (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Convertmyfund. CORS Misconfiguration and Path Traversal to achieve insane compromise on FreeBSD."
Keywords: "forensics, ctf, linux, easy"
URL: "https://zurefx.github.io/writeups/htb-convertmyfund-656.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-convertmyfund-656/"
Date: "2024-03-31"
Tags: "Forensics, CTF, Linux, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-convertmyfund-656"
Permalink: "/writeups/htb-convertmyfund-656.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Convertmyfund** is rated **Insane** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.84.218.165`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.12.114.53 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.99.37.46/FUZZ
```

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.170.103 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **CORS Misconfiguration**.

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

```powershell
evil-winrm -i 10.128.222.243 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p9200,139,23 10.95.167.65 -oN scan.txt
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `ligolo-ng`
- `netcat`
- `lookupsid`
- `nmap`
- `evil-winrm`
- `secretsdump`
- `hashcat`

### Key Takeaways

- CORS Misconfiguration
- Path Traversal
