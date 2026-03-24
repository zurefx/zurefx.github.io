---
TitleSEO: "OffSec Proving Grounds — Admirer (Medium OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Admirer (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Admirer. DNS Rebinding and Resource-Based Constrained Delegation to achieve medium compromise on OpenBSD."
Keywords: "tryhackme, medium, hackthebox, insane, reversing"
URL: "https://zurefx.github.io/writeups/htb-admirer-212.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-admirer-212/"
Date: "2025-05-27"
Tags: "TryHackMe, Medium, HackTheBox, Insane, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-admirer-212"
Permalink: "/writeups/htb-admirer-212.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Admirer** is rated **Medium** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.70.206.139`.

### Objectives

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.112.212.121 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.92.210.162
```

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.57.166.250/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.67.241.51 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.106.143.246 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.39.204.12 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **Resource-Based Constrained Delegation**.

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p5432,389,3268 10.124.175.15 -oN scan.txt
crackmapexec smb 10.48.95.212 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
feroxbuster -h
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
evil-winrm -i 10.24.79.207 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.126.223.162 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5986,1433,22 10.45.5.156 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `GetUserSPNs`
- `enum4linux`
- `feroxbuster`
- `GetNPUsers`
- `netcat`
- `mimikatz`
- `burpsuite`
- `rpcclient`

### Key Takeaways

- DNS Rebinding
- Resource-Based Constrained Delegation
- Subdomain Takeover
- Kerberoasting
