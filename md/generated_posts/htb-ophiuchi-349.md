---
TitleSEO: "TryHackMe — Ophiuchi (Medium Windows) | ZureFX"
TitlePost: "TryHackMe — Ophiuchi (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Ophiuchi. Path Traversal and SQL Injection to achieve medium compromise on Windows."
Keywords: "medium, web, pwntilldawn, hackthebox, reversing"
URL: "https://zurefx.github.io/writeups/htb-ophiuchi-349.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ophiuchi-349/"
Date: "2025-08-09"
Tags: "Medium, Web, PwnTillDawn, HackTheBox, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-ophiuchi-349"
Permalink: "/writeups/htb-ophiuchi-349.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ophiuchi** is rated **Medium** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.100.13.246`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.125.128.159 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.51.89.92
evil-winrm -i 10.124.162.219 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.15.246.118/FUZZ
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.43.158.203 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

### Web Enumeration

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.127.111.11
```

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **SQL Injection**.

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

```bash
evil-winrm -i 10.33.34.210 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.75.104.110/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.114.188.210/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
nmap -sCV -p25,8443,3268 10.85.149.235 -oN scan.txt
crackmapexec smb 10.81.85.233 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

```powershell
crackmapexec smb 10.19.210.238 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `sqlmap`
- `mimikatz`
- `gobuster`
- `atexec`
- `msfvenom`
- `lookupsid`
- `enum4linux`

### Key Takeaways

- Path Traversal
- SQL Injection
