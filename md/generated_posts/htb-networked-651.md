---
TitleSEO: "HackTheBox — Networked (Insane FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Networked (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Networked. IDOR and SSTI to achieve insane compromise on FreeBSD."
Keywords: "pwntilldawn, ctf, windows, tryhackme, medium, forensics"
URL: "https://zurefx.github.io/writeups/htb-networked-651.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-networked-651/"
Date: "2025-07-18"
Tags: "PwnTillDawn, CTF, Windows, TryHackMe, Medium, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-networked-651"
Permalink: "/writeups/htb-networked-651.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Networked** is rated **Insane** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.64.151.162`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.197.199 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.83.119.3/FUZZ
nmap -sCV -p21,3268,143 10.60.2.80 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.101.69.138
```

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **IDOR**.

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.36.222.241/FUZZ
gobuster dir -u http://10.127.24.56/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.28.92.158/FUZZ
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.128.65.150 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.80.33.82/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.5.158 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `pwncat`
- `psexec`
- `secretsdump`
- `bloodhound`
- `sharphound`
- `netcat`
- `ldapsearch`
- `atexec`

### Key Takeaways

- IDOR
- SSTI
