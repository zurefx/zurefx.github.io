---
TitleSEO: "TryHackMe — Pikaboo (Insane FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Pikaboo (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Pikaboo. DLL Hijacking and Writable PATH to achieve insane compromise on FreeBSD."
Keywords: "tryhackme, forensics, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-pikaboo-796.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pikaboo-796/"
Date: "2024-08-10"
Tags: "TryHackMe, Forensics, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-pikaboo-796"
Permalink: "/writeups/htb-pikaboo-796.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Pikaboo** is rated **Insane** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.124.96.236`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.54.77.164/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

```bash
gobuster dir -u http://10.100.9.94/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.114.60.217 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p389,80,25 10.128.251.19 -oN scan.txt
```

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.189.103
```

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **DLL Hijacking**.

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

```powershell
evil-winrm -i 10.20.152.241 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.60.107.158 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.120.22.166/FUZZ
```

### Exploitation

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

```powershell
gobuster dir -u http://10.71.47.182/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.82.193.76/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `hydra`
- `wmiexec`
- `smbclient`
- `netcat`

### Key Takeaways

- DLL Hijacking
- Writable PATH
- Command Injection
