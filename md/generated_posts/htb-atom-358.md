---
TitleSEO: "TryHackMe — Atom (Insane FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Atom (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Atom. CSRF and Command Injection to achieve insane compromise on FreeBSD."
Keywords: "insane, hard, linux, medium"
URL: "https://zurefx.github.io/writeups/htb-atom-358.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-atom-358/"
Date: "2025-07-03"
Tags: "Insane, Hard, Linux, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-atom-358"
Permalink: "/writeups/htb-atom-358.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Atom** is rated **Insane** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.94.115.171`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
feroxbuster -h
crackmapexec smb 10.123.246.24 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.53.109.122 -u administrator -p 'P@ssw0rd!' --shares
```

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
evil-winrm -i 10.123.59.139 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.118.134.91 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **Command Injection**.

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.116.9.46/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

```powershell
nmap -sCV -p23,389,53 10.18.3.98 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `evil-winrm`
- `gobuster`
- `bloodhound`
- `wpscan`
- `ffuf`

### Key Takeaways

- CSRF
- Command Injection
- SeDebugPrivilege
- XSS
