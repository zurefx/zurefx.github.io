---
TitleSEO: "TryHackMe — Worker (Medium OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Worker (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Worker. SUID Binary and Silver Ticket to achieve medium compromise on OpenBSD."
Keywords: "windows, forensics, insane, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-worker-601.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-worker-601/"
Date: "2025-10-30"
Tags: "Windows, Forensics, Insane, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-worker-601"
Permalink: "/writeups/htb-worker-601.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Worker** is rated **Medium** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.114.62.193`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.32.202.107/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.66.185.126 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.82.109.178 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.110.6.99/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.127.68.65 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.174.79/FUZZ
```

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.97.237.27 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.113.240.224 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

Key finding: **SUID Binary**.

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
nmap -sCV -p27017,993,389 10.82.190.29 -oN scan.txt
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p445,27017,5985 10.12.13.197 -oN scan.txt
feroxbuster -h
nmap -sCV -p110,143,8888 10.103.41.148 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `ffuf`
- `crackmapexec`
- `rpcclient`
- `sharphound`
- `sqlmap`
- `nmap`

### Key Takeaways

- SUID Binary
- Silver Ticket
- DNS Rebinding
- LXD Privilege Escalation
