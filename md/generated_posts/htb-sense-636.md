---
TitleSEO: "PwnTillDawn — Sense (Hard Windows) | ZureFX"
TitlePost: "PwnTillDawn — Sense (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Sense. AlwaysInstallElevated and Writable PATH to achieve hard compromise on Windows."
Keywords: "insane, offsec, reversing, windows, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-sense-636.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sense-636/"
Date: "2025-01-20"
Tags: "Insane, OffSec, Reversing, Windows, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-sense-636"
Permalink: "/writeups/htb-sense-636.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sense** is rated **Hard** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.37.128.142`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.116.131.17 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p23,3268,993 10.48.27.127 -oN scan.txt
feroxbuster -h
```

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.101.234
```

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.26.107/FUZZ
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

Key finding: **AlwaysInstallElevated**.

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.124.207.97/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.185.236
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.90.15.65
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.92.243.171 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.11.209.227/FUZZ
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.45.253.78
```

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `lookupsid`
- `GetUserSPNs`
- `sharphound`
- `wmiexec`
- `rubeus`
- `dcomexec`
- `msfvenom`
- `ffuf`

### Key Takeaways

- AlwaysInstallElevated
- Writable PATH
- Constrained Delegation
