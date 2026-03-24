---
TitleSEO: "OffSec Proving Grounds — Sense (Insane Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Sense (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Sense. Sudo Misconfiguration and Local File Inclusion to achieve insane compromise on Windows."
Keywords: "forensics, ctf, active directory, easy"
URL: "https://zurefx.github.io/writeups/htb-sense-934.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sense-934/"
Date: "2026-02-25"
Tags: "Forensics, CTF, Active Directory, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-sense-934"
Permalink: "/writeups/htb-sense-934.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sense** is rated **Insane** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.128.90.156`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.15.90.138 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.32.184.223 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.105.24.251 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.92.86.134 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

```bash
gobuster dir -u http://10.123.67.133/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.17.45.239 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.28.210.134 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Constrained Delegation**.

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.96.173.97 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.31.200 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
evil-winrm -i 10.24.16.66 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.128.33.162 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p22,110,5432 10.66.22.220 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `burpsuite`
- `mimikatz`
- `wmiexec`
- `bloodhound`

### Key Takeaways

- Sudo Misconfiguration
- Local File Inclusion
- GPP Password
- Constrained Delegation
