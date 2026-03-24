---
TitleSEO: "HackTheBox — Tenet (Easy OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Tenet (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Tenet. IDOR and Writable PATH to achieve easy compromise on OpenBSD."
Keywords: "windows, hard, web, linux, ctf, pwntilldawn, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-tenet-133.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tenet-133/"
Date: "2024-09-17"
Tags: "Windows, Hard, Web, Linux, CTF, PwnTillDawn, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-tenet-133"
Permalink: "/writeups/htb-tenet-133.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tenet** is rated **Easy** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.81.180.18`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.22.111.133/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p110,8443,993 10.83.188.3 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Web Enumeration

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

```bash
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **Golden Ticket**.

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.136.194 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.129.168.125/FUZZ
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
crackmapexec smb 10.90.215.24 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.127.245.229
nmap -sCV -p3389,22,110 10.38.117.231 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `gobuster`
- `lookupsid`
- `netcat`
- `ffuf`

### Key Takeaways

- IDOR
- Writable PATH
- SSTI
- Golden Ticket
