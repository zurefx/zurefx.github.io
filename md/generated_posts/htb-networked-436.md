---
TitleSEO: "OffSec Proving Grounds — Networked (Hard OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Networked (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Networked. LXD Privilege Escalation and NFS No Root Squash to achieve hard compromise on OpenBSD."
Keywords: "windows, ctf, linux, offsec"
URL: "https://zurefx.github.io/writeups/htb-networked-436.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-networked-436/"
Date: "2025-04-06"
Tags: "Windows, CTF, Linux, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-networked-436"
Permalink: "/writeups/htb-networked-436.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Networked** is rated **Hard** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.10.173.196`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.49.11.64/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.81.178.212 -u administrator -p 'P@ssw0rd!'
```

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.28.203.232 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.188.128/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.157.229 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.115.241 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.115.33.52/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

Key finding: **LXD Privilege Escalation**.

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p5986,139,5986 10.49.194.86 -oN scan.txt
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
feroxbuster -h
evil-winrm -i 10.81.2.160 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

```powershell
gobuster dir -u http://10.113.235.155/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.2.128/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `gobuster`
- `evil-winrm`
- `feroxbuster`
- `burpsuite`
- `mimikatz`
- `wpscan`
- `enum4linux`
- `dcomexec`

### Key Takeaways

- LXD Privilege Escalation
- NFS No Root Squash
- CSRF
