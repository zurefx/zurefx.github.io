---
TitleSEO: "VulnHub — Overpass (Hard OpenBSD) | ZureFX"
TitlePost: "VulnHub — Overpass (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Overpass. SSTI and SeDebugPrivilege to achieve hard compromise on OpenBSD."
Keywords: "hackthebox, pwntilldawn, tryhackme, windows, web"
URL: "https://zurefx.github.io/writeups/htb-overpass-604.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-overpass-604/"
Date: "2025-01-23"
Tags: "HackTheBox, PwnTillDawn, TryHackMe, Windows, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-overpass-604"
Permalink: "/writeups/htb-overpass-604.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Overpass** is rated **Hard** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.33.141.176`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.78.120.131 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.109.177.209
```

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

```bash
gobuster dir -u http://10.13.12.45/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.104.147.188 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p443,445,8888 10.26.25.25 -oN scan.txt
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

### Web Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

```bash
evil-winrm -i 10.111.125.143 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.115.171.217/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.33.143.43 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.86.157.64 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **IDOR**.

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
evil-winrm -i 10.115.167.15 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
nmap -sCV -p5986,5432,25 10.55.141.56 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

```powershell
evil-winrm -i 10.85.44.221 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.152.198
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `psexec`
- `nmap`
- `crackmapexec`
- `msfvenom`
- `GetUserSPNs`
- `secretsdump`
- `wpscan`

### Key Takeaways

- SSTI
- SeDebugPrivilege
- IDOR
- Broken Access Control
