---
TitleSEO: "OffSec Proving Grounds — Atom (Insane Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Atom (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Atom. DCSync and LAPS Abuse to achieve insane compromise on Windows."
Keywords: "medium, active directory, offsec, web, linux, ctf, windows"
URL: "https://zurefx.github.io/writeups/htb-atom-678.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-atom-678/"
Date: "2025-06-08"
Tags: "Medium, Active Directory, OffSec, Web, Linux, CTF, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-atom-678"
Permalink: "/writeups/htb-atom-678.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Atom** is rated **Insane** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.32.16.139`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.101.49.126 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.92.214.66 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.18.94.57/FUZZ
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

### Web Enumeration

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.125.60.232/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **SeDebugPrivilege**.

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.110.218.128/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.90.128.185/FUZZ
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.19.212.161/FUZZ
```

### Exploitation

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
gobuster dir -u http://10.126.227.192/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.113.26.143 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `smbexec`
- `metasploit`
- `nmap`
- `wpscan`

### Key Takeaways

- DCSync
- LAPS Abuse
- Golden Ticket
- SeDebugPrivilege
