---
TitleSEO: "VulnHub — Beep (Insane OpenBSD) | ZureFX"
TitlePost: "VulnHub — Beep (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Beep. Local File Inclusion and SeDebugPrivilege to achieve insane compromise on OpenBSD."
Keywords: "windows, forensics, tryhackme, offsec, web, hackthebox, easy"
URL: "https://zurefx.github.io/writeups/htb-beep-565.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-beep-565/"
Date: "2024-05-18"
Tags: "Windows, Forensics, TryHackMe, OffSec, Web, HackTheBox, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-beep-565"
Permalink: "/writeups/htb-beep-565.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Beep** is rated **Insane** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.42.79.41`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p445,143,5985 10.23.205.172 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.219.204 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.119.20.79/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p80,110,993 10.103.54.224 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

```bash
gobuster dir -u http://10.30.246.84/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

### Web Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.24.48.125/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.60.128.162/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Local File Inclusion**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.90.99.239/FUZZ
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.18.246.122 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.108.74 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `john`
- `pwncat`
- `ffuf`
- `msfvenom`
- `netcat`
- `hashcat`

### Key Takeaways

- Local File Inclusion
- SeDebugPrivilege
- XSS
- Broken Access Control
