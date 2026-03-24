---
TitleSEO: "HackTheBox — Anthem (Insane Windows) | ZureFX"
TitlePost: "HackTheBox — Anthem (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Anthem. Docker Escape and NTLM Relay to achieve insane compromise on Windows."
Keywords: "windows, hard, insane"
URL: "https://zurefx.github.io/writeups/htb-anthem-519.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-anthem-519/"
Date: "2025-10-23"
Tags: "Windows, Hard, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-anthem-519"
Permalink: "/writeups/htb-anthem-519.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Anthem** is rated **Insane** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.92.108.184`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.105.52.86 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p3306,5986,587 10.38.168.32 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.46.117/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p27017,3389,22 10.128.187.199 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

Key finding: **Unconstrained Delegation**.

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p464,143,1433 10.84.47.87 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.64.118.101 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.79.15.50/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
gobuster dir -u http://10.10.222.38/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p995,1521,5432 10.37.254.202 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `john`
- `smbclient`
- `atexec`
- `mimikatz`
- `hashcat`
- `sqlmap`
- `ldapsearch`

### Key Takeaways

- Docker Escape
- NTLM Relay
- Unconstrained Delegation
