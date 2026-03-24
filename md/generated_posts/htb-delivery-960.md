---
TitleSEO: "OffSec Proving Grounds — Delivery (Insane OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Delivery (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Delivery. Resource-Based Constrained Delegation and Docker Escape to achieve insane compromise on OpenBSD."
Keywords: "linux, web, medium, ctf, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-delivery-960.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-delivery-960/"
Date: "2025-05-04"
Tags: "Linux, Web, Medium, CTF, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-delivery-960"
Permalink: "/writeups/htb-delivery-960.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Delivery** is rated **Insane** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.94.13.9`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.23.5.93 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p993,23,8080 10.83.66.80 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.99.199.31/FUZZ
crackmapexec smb 10.58.130.219 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.127.106.254 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Web Enumeration

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```bash
gobuster dir -u http://10.120.146.39/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.59.121.194 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

Key finding: **Docker Escape**.

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.92.136.202/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
evil-winrm -i 10.113.55.208 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.58.109.70/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
evil-winrm -i 10.18.220.40 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.247.74 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `lookupsid`
- `netcat`
- `burpsuite`
- `feroxbuster`
- `enum4linux`
- `hydra`
- `hashcat`
- `mimikatz`

### Key Takeaways

- Resource-Based Constrained Delegation
- Docker Escape
