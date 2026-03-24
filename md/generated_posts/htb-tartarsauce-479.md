---
TitleSEO: "TryHackMe — Tartarsauce (Easy Linux) | ZureFX"
TitlePost: "TryHackMe — Tartarsauce (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Tartarsauce. Docker Escape and LAPS Abuse to achieve easy compromise on Linux."
Keywords: "medium, linux, offsec, pwntilldawn, ctf"
URL: "https://zurefx.github.io/writeups/htb-tartarsauce-479.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tartarsauce-479/"
Date: "2025-11-08"
Tags: "Medium, Linux, OffSec, PwnTillDawn, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-tartarsauce-479"
Permalink: "/writeups/htb-tartarsauce-479.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tartarsauce** is rated **Easy** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.85.191.106`.

### Objectives

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.28.55.133 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.199.17/FUZZ
```

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
nmap -sCV -p8443,1521,80 10.72.105.153 -oN scan.txt
evil-winrm -i 10.109.68.164 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p9200,22,143 10.27.221.76 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **IDOR**.

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p3389,443,587 10.13.46.115 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.63.167.213/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.42.234.26/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.43.171.32 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.119.57.90 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.69.42.207/FUZZ
crackmapexec smb 10.15.22.227 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `mimikatz`
- `hydra`
- `msfvenom`
- `wpscan`
- `ldapsearch`
- `sqlmap`
- `rubeus`
- `gobuster`

### Key Takeaways

- Docker Escape
- LAPS Abuse
- Unconstrained Delegation
- IDOR
