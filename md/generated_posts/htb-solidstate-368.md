---
TitleSEO: "TryHackMe — Solidstate (Hard OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Solidstate (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Solidstate. DNS Rebinding and Kerberoasting to achieve hard compromise on OpenBSD."
Keywords: "active directory, ctf, tryhackme, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-solidstate-368.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-solidstate-368/"
Date: "2025-04-05"
Tags: "Active Directory, CTF, TryHackMe, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-solidstate-368"
Permalink: "/writeups/htb-solidstate-368.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Solidstate** is rated **Hard** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.57.24.58`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.141.74/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.123.139.150
nmap -sCV -p5986,8443,5985 10.87.216.231 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.90.56.81/FUZZ
crackmapexec smb 10.66.250.5 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

Key finding: **DLL Hijacking**.

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.119.53.59/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.110.138.250/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

```powershell
evil-winrm -i 10.13.21.134 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.83.163.169
evil-winrm -i 10.128.105.241 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.49.19.211 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.103.180.132/FUZZ
gobuster dir -u http://10.91.95.186/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.57.57.155 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `hashcat`
- `rubeus`
- `GetUserSPNs`
- `evil-winrm`

### Key Takeaways

- DNS Rebinding
- Kerberoasting
- DLL Hijacking
- Command Injection
