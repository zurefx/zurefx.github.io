---
TitleSEO: "HackTheBox — Overpass (Hard FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Overpass (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Overpass. DLL Hijacking and NFS No Root Squash to achieve hard compromise on FreeBSD."
Keywords: "hackthebox, reversing, tryhackme, medium, pwntilldawn, web, active directory"
URL: "https://zurefx.github.io/writeups/htb-overpass-932.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-overpass-932/"
Date: "2025-03-31"
Tags: "HackTheBox, Reversing, TryHackMe, Medium, PwnTillDawn, Web, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-overpass-932"
Permalink: "/writeups/htb-overpass-932.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Overpass** is rated **Hard** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.54.196.39`.

### Objectives

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.98.89.179/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.56.202.58
evil-winrm -i 10.91.207.192 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

### Web Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.106.116.108 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **DLL Hijacking**.

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.64.17.170 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.215.50 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p25,445,53 10.95.131.144 -oN scan.txt
feroxbuster -h
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

```powershell
crackmapexec smb 10.26.216.221 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.124.93.59/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `hashcat`
- `nikto`
- `ldapsearch`
- `lookupsid`
- `GetUserSPNs`
- `enum4linux`
- `feroxbuster`

### Key Takeaways

- DLL Hijacking
- NFS No Root Squash
