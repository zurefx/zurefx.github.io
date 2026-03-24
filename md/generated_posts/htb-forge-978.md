---
TitleSEO: "TryHackMe — Forge (Insane FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Forge (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Forge. DLL Hijacking and GPP Password to achieve insane compromise on FreeBSD."
Keywords: "web, linux, forensics"
URL: "https://zurefx.github.io/writeups/htb-forge-978.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-forge-978/"
Date: "2024-04-14"
Tags: "Web, Linux, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-forge-978"
Permalink: "/writeups/htb-forge-978.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Forge** is rated **Insane** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.127.71.110`.

### Objectives

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p23,3268,27017 10.14.221.181 -oN scan.txt
gobuster dir -u http://10.126.145.27/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.120.24.83/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.62.199.25/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.85.85.67 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
evil-winrm -i 10.73.181.69 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Web Enumeration

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.220.102 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Sudo Misconfiguration**.

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
feroxbuster -h
```

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.57.101.170
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
nmap -sCV -p135,995,1521 10.81.107.186 -oN scan.txt
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.32.32.102/FUZZ
nmap -sCV -p110,3306,464 10.83.84.141 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `rpcclient`
- `impacket`
- `hydra`
- `burpsuite`
- `ldapsearch`

### Key Takeaways

- DLL Hijacking
- GPP Password
- CORS Misconfiguration
- Sudo Misconfiguration
