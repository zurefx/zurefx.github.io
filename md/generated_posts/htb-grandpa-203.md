---
TitleSEO: "HackTheBox — Grandpa (Medium FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Grandpa (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Grandpa. Remote Code Execution and IDOR to achieve medium compromise on FreeBSD."
Keywords: "tryhackme, web, offsec, linux, hackthebox, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-grandpa-203.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-grandpa-203/"
Date: "2026-03-19"
Tags: "TryHackMe, Web, OffSec, Linux, HackTheBox, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-grandpa-203"
Permalink: "/writeups/htb-grandpa-203.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Grandpa** is rated **Medium** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.61.54.134`.

### Objectives

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.22.139.177
crackmapexec smb 10.32.124.228 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

### Web Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.61.19.169 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **XSS**.

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.23.196.237/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.220.65 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

```powershell
nmap -sCV -p1521,1521,995 10.33.186.147 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.75.142.29 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `wmiexec`
- `feroxbuster`
- `nmap`
- `bloodhound`
- `ldapsearch`

### Key Takeaways

- Remote Code Execution
- IDOR
- XSS
