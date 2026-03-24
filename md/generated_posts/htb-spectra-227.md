---
TitleSEO: "TryHackMe — Spectra (Medium Windows) | ZureFX"
TitlePost: "TryHackMe — Spectra (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Spectra. CORS Misconfiguration and SUID Binary to achieve medium compromise on Windows."
Keywords: "tryhackme, linux, offsec, forensics, medium, insane"
URL: "https://zurefx.github.io/writeups/htb-spectra-227.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-227/"
Date: "2024-12-30"
Tags: "TryHackMe, Linux, OffSec, Forensics, Medium, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-227"
Permalink: "/writeups/htb-spectra-227.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Spectra** is rated **Medium** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.90.98.156`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.111.122.162/FUZZ
gobuster dir -u http://10.37.3.94/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
crackmapexec smb 10.71.224.211 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.77.51.16 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.22.23.212
```

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **SUID Binary**.

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.77.224.129/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.30.163.212 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.59.148.166/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.125.102.57/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```powershell
gobuster dir -u http://10.10.57.137/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.13.103.51 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `mimikatz`
- `socat`
- `gobuster`
- `bloodhound`
- `ldapsearch`
- `netcat`
- `enum4linux`

### Key Takeaways

- CORS Misconfiguration
- SUID Binary
- DLL Hijacking
