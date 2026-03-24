---
TitleSEO: "TryHackMe — Sense (Medium OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Sense (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Sense. Cron Job and CSRF to achieve medium compromise on OpenBSD."
Keywords: "ctf, linux, windows, web, offsec, forensics"
URL: "https://zurefx.github.io/writeups/htb-sense-566.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sense-566/"
Date: "2025-04-09"
Tags: "CTF, Linux, Windows, Web, OffSec, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-sense-566"
Permalink: "/writeups/htb-sense-566.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sense** is rated **Medium** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.70.210.24`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.90.92
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.34.174.159 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.127.230.174 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.76.18.60/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Web Enumeration

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

```bash
nmap -sCV -p25,139,5432 10.46.246.238 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p25,1521,110 10.96.43.80 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

Key finding: **CSRF**.

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.57.220.163/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p464,3268,23 10.54.82.130 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.34.187/FUZZ
evil-winrm -i 10.48.33.59 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

```powershell
gobuster dir -u http://10.80.19.212/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `smbexec`
- `netcat`
- `ldapsearch`
- `wpscan`
- `chisel`

### Key Takeaways

- Cron Job
- CSRF
- Constrained Delegation
