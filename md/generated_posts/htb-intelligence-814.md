---
TitleSEO: "PwnTillDawn — Intelligence (Hard FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Intelligence (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Intelligence. Subdomain Takeover and Cron Job to achieve hard compromise on FreeBSD."
Keywords: "web, medium, hackthebox, ctf, windows, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-intelligence-814.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-intelligence-814/"
Date: "2024-08-19"
Tags: "Web, Medium, HackTheBox, CTF, Windows, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-intelligence-814"
Permalink: "/writeups/htb-intelligence-814.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Intelligence** is rated **Hard** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.36.124.60`.

### Objectives

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.191.238 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.36.20.227 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.91.167.156
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.18.195.22/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

### Web Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.125.228.120 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Broken Access Control**.

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.76.123.74 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.95.40.90 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.94.116.29/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.6.68 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

```powershell
evil-winrm -i 10.82.197.7 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `john`
- `msfvenom`
- `dcomexec`
- `impacket`
- `smbclient`

### Key Takeaways

- Subdomain Takeover
- Cron Job
- Broken Access Control
- LAPS Abuse
