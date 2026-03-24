---
TitleSEO: "VulnHub — ServMon (Easy Linux) | ZureFX"
TitlePost: "VulnHub — ServMon (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub ServMon. Silver Ticket and DNS Rebinding to achieve easy compromise on Linux."
Keywords: "forensics, offsec, hard, medium, pwntilldawn, insane, web"
URL: "https://zurefx.github.io/writeups/htb-servmon-701.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-servmon-701/"
Date: "2025-05-20"
Tags: "Forensics, OffSec, Hard, Medium, PwnTillDawn, Insane, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-servmon-701"
Permalink: "/writeups/htb-servmon-701.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **ServMon** is rated **Easy** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.78.174.111`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

```bash
feroxbuster -h
gobuster dir -u http://10.26.10.48/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.96.170.65 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

### Web Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.59.165.76 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.109.125.183/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

Key finding: **Silver Ticket**.

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.123.42.242/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.33.79.3 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.87.187.167/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.120.34.34 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

```bash
gobuster dir -u http://10.23.204.227/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.89.225.114/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `smbclient`
- `socat`
- `hashcat`
- `hydra`
- `ligolo-ng`

### Key Takeaways

- Silver Ticket
- DNS Rebinding
