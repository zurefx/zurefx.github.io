---
TitleSEO: "PwnTillDawn — Granny (Easy FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Granny (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Granny. SQL Injection and Command Injection to achieve easy compromise on FreeBSD."
Keywords: "reversing, offsec, windows, ctf, forensics, hackthebox, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-granny-184.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-granny-184/"
Date: "2024-12-01"
Tags: "Reversing, OffSec, Windows, CTF, Forensics, HackTheBox, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-granny-184"
Permalink: "/writeups/htb-granny-184.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Granny** is rated **Easy** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.96.5.79`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.64.245.86/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.94.116.121
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.68.126.2 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

```bash
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **XSS**.

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

### Initial Access

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.33.52.223/FUZZ
gobuster dir -u http://10.10.93.59/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.123.115.243 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
gobuster dir -u http://10.106.87.61/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.22.205.84
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.250.134/FUZZ
gobuster dir -u http://10.25.36.221/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `impacket`
- `lookupsid`
- `rubeus`
- `socat`
- `sharphound`
- `kerbrute`
- `ffuf`

### Key Takeaways

- SQL Injection
- Command Injection
- XSS
