---
TitleSEO: "VulnHub — Atom (Medium FreeBSD) | ZureFX"
TitlePost: "VulnHub — Atom (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Atom. SQL Injection and Resource-Based Constrained Delegation to achieve medium compromise on FreeBSD."
Keywords: "linux, tryhackme, medium, ctf, windows, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-atom-793.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-atom-793/"
Date: "2024-07-16"
Tags: "Linux, TryHackMe, Medium, CTF, Windows, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-atom-793"
Permalink: "/writeups/htb-atom-793.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Atom** is rated **Medium** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.25.83.101`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.103.218.20/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.45.102.16 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p53,143,27017 10.83.1.210 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **NFS No Root Squash**.

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.51.35.214 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
evil-winrm -i 10.110.123.66 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.11.52.20 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `metasploit`
- `burpsuite`
- `netcat`
- `sharphound`

### Key Takeaways

- SQL Injection
- Resource-Based Constrained Delegation
- NFS No Root Squash
