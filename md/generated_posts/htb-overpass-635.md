---
TitleSEO: "TryHackMe — Overpass (Easy OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Overpass (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Overpass. SSTI and Kerberoasting to achieve easy compromise on OpenBSD."
Keywords: "hackthebox, windows, tryhackme, reversing, forensics"
URL: "https://zurefx.github.io/writeups/htb-overpass-635.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-overpass-635/"
Date: "2024-05-04"
Tags: "HackTheBox, Windows, TryHackMe, Reversing, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-overpass-635"
Permalink: "/writeups/htb-overpass-635.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Overpass** is rated **Easy** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.30.157.146`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p464,389,23 10.87.75.223 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

```bash
evil-winrm -i 10.86.232.183 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

```bash
evil-winrm -i 10.40.162.166 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.96.53.94 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.116.155.100 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.99.144.225
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

Key finding: **SSTI**.

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.128.172.140 -u administrator -p 'P@ssw0rd!'
```

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
nmap -sCV -p3268,995,143 10.126.12.252 -oN scan.txt
nmap -sCV -p995,995,587 10.44.243.147 -oN scan.txt
evil-winrm -i 10.102.252.93 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p5986,110,3306 10.37.128.115 -oN scan.txt
nmap -sCV -p21,8080,25 10.21.148.149 -oN scan.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `kerbrute`
- `burpsuite`
- `chisel`
- `psexec`
- `secretsdump`
- `metasploit`

### Key Takeaways

- SSTI
- Kerberoasting
- GPP Password
