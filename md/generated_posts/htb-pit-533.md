---
TitleSEO: "TryHackMe — Pit (Hard FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Pit (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Pit. SQL Injection and Path Traversal to achieve hard compromise on FreeBSD."
Keywords: "windows, web, easy, linux, forensics, hard"
URL: "https://zurefx.github.io/writeups/htb-pit-533.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pit-533/"
Date: "2025-03-11"
Tags: "Windows, Web, Easy, Linux, Forensics, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-pit-533"
Permalink: "/writeups/htb-pit-533.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Pit** is rated **Hard** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.63.222.234`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.21.59/FUZZ
crackmapexec smb 10.123.20.153 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

```bash
gobuster dir -u http://10.58.108.111/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

### Web Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.118.187.192/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

Key finding: **Path Traversal**.

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.34.99.98/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

```powershell
gobuster dir -u http://10.21.192.145/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
crackmapexec smb 10.116.225.123 -u administrator -p 'P@ssw0rd!' --shares
```

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `ligolo-ng`
- `crackmapexec`
- `john`
- `netcat`

### Key Takeaways

- SQL Injection
- Path Traversal
