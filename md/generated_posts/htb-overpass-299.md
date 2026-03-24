---
TitleSEO: "OffSec Proving Grounds — Overpass (Hard Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Overpass (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Overpass. Writable PATH and Path Traversal to achieve hard compromise on Windows."
Keywords: "reversing, pwntilldawn, hackthebox, web, tryhackme, linux, active directory"
URL: "https://zurefx.github.io/writeups/htb-overpass-299.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-overpass-299/"
Date: "2024-03-23"
Tags: "Reversing, PwnTillDawn, HackTheBox, Web, TryHackMe, Linux, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-overpass-299"
Permalink: "/writeups/htb-overpass-299.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Overpass** is rated **Hard** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.81.137.181`.

### Objectives

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.69.49.11/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.39.185.26/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.128.32.84 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.81.4.115
```

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

### Web Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
feroxbuster -h
```

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

Key finding: **Path Traversal**.

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.113.133.154/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.124.237.10/FUZZ
gobuster dir -u http://10.44.39.182/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
feroxbuster -h
gobuster dir -u http://10.94.215.106/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.92.165.205 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.26.34.186 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.16.43.197
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `nikto`
- `hydra`
- `wpscan`
- `wmiexec`
- `feroxbuster`
- `nmap`

### Key Takeaways

- Writable PATH
- Path Traversal
