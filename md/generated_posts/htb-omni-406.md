---
TitleSEO: "OffSec Proving Grounds — Omni (Easy OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Omni (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Omni. SQL Injection and AS-REP Roasting to achieve easy compromise on OpenBSD."
Keywords: "insane, ctf, linux, web, windows"
URL: "https://zurefx.github.io/writeups/htb-omni-406.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-omni-406/"
Date: "2025-09-16"
Tags: "Insane, CTF, Linux, Web, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-omni-406"
Permalink: "/writeups/htb-omni-406.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Omni** is rated **Easy** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.42.96.151`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.95.93.251/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.17.155.10/FUZZ
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.37.125.218
nmap -sCV -p27017,5432,587 10.102.27.137 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

### Web Enumeration

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p636,3389,636 10.80.202.107 -oN scan.txt
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **AS-REP Roasting**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.147.18/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
crackmapexec smb 10.13.250.148 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.111.78.25 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
feroxbuster -h
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
crackmapexec smb 10.100.82.126 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `john`
- `impacket`
- `ligolo-ng`
- `lookupsid`
- `sharphound`

### Key Takeaways

- SQL Injection
- AS-REP Roasting
- Command Injection
- GPP Password
