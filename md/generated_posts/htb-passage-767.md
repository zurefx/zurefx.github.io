---
TitleSEO: "HackTheBox — Passage (Medium OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Passage (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Passage. DLL Hijacking and Docker Escape to achieve medium compromise on OpenBSD."
Keywords: "linux, medium, offsec, windows, web"
URL: "https://zurefx.github.io/writeups/htb-passage-767.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-passage-767/"
Date: "2025-05-31"
Tags: "Linux, Medium, OffSec, Windows, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-passage-767"
Permalink: "/writeups/htb-passage-767.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Passage** is rated **Medium** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.18.213.209`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.42.12.215/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.54.75.34
gobuster dir -u http://10.102.19.63/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

### Web Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.27.145.203
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.14.164 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Docker Escape**.

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.32.112.249/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.82.147.70 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.52.134
nmap -sCV -p443,53,8443 10.78.188.110 -oN scan.txt
nmap -sCV -p53,389,993 10.65.88.103 -oN scan.txt
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.106.246.218/FUZZ
gobuster dir -u http://10.25.50.33/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `feroxbuster`
- `enum4linux`
- `netcat`
- `mimikatz`
- `kerbrute`
- `wmiexec`

### Key Takeaways

- DLL Hijacking
- Docker Escape
