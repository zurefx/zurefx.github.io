---
TitleSEO: "OffSec Proving Grounds — Magic (Hard OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Magic (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Magic. LAPS Abuse and LXD Privilege Escalation to achieve hard compromise on OpenBSD."
Keywords: "medium, tryhackme, ctf, windows, offsec, web, active directory"
URL: "https://zurefx.github.io/writeups/htb-magic-868.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-magic-868/"
Date: "2025-08-28"
Tags: "Medium, TryHackMe, CTF, Windows, OffSec, Web, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-magic-868"
Permalink: "/writeups/htb-magic-868.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Magic** is rated **Hard** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.105.212.10`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
nmap -sCV -p21,587,464 10.41.235.74 -oN scan.txt
gobuster dir -u http://10.126.211.62/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.127.122
```

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

### Web Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p5985,993,8888 10.28.197.22 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.129.108.238/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **AlwaysInstallElevated**.

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.100.250.1/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.128.221 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p22,464,587 10.13.6.126 -oN scan.txt
evil-winrm -i 10.55.110.41 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `ligolo-ng`
- `dcomexec`
- `GetUserSPNs`
- `atexec`
- `gobuster`
- `netcat`

### Key Takeaways

- LAPS Abuse
- LXD Privilege Escalation
- Kerberoasting
- AlwaysInstallElevated
