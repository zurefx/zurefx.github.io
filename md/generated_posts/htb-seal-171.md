---
TitleSEO: "OffSec Proving Grounds — Seal (Insane FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Seal (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Seal. Writable PATH and Pass the Ticket to achieve insane compromise on FreeBSD."
Keywords: "forensics, web, hackthebox, hard, easy, offsec"
URL: "https://zurefx.github.io/writeups/htb-seal-171.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-seal-171/"
Date: "2025-08-22"
Tags: "Forensics, Web, HackTheBox, Hard, Easy, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-seal-171"
Permalink: "/writeups/htb-seal-171.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Seal** is rated **Insane** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.16.19.193`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.90.20.219/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```bash
nmap -sCV -p5986,993,80 10.127.254.20 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Web Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

Key finding: **Writable PATH**.

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
crackmapexec smb 10.114.60.8 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.209.227 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

### Exploitation

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
feroxbuster -h
evil-winrm -i 10.14.21.237 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.114.220.48 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.72.8.170 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `msfvenom`
- `wmiexec`
- `gobuster`
- `atexec`
- `ffuf`
- `hashcat`
- `dcomexec`
- `sharphound`

### Key Takeaways

- Writable PATH
- Pass the Ticket
- Cron Job
- AlwaysInstallElevated
