---
TitleSEO: "TryHackMe — Pikaboo (Medium FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Pikaboo (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Pikaboo. Writable PATH and AS-REP Roasting to achieve medium compromise on FreeBSD."
Keywords: "medium, easy, offsec, forensics, tryhackme, hard"
URL: "https://zurefx.github.io/writeups/htb-pikaboo-798.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pikaboo-798/"
Date: "2025-10-27"
Tags: "Medium, Easy, OffSec, Forensics, TryHackMe, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-pikaboo-798"
Permalink: "/writeups/htb-pikaboo-798.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Pikaboo** is rated **Medium** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.35.233.225`.

### Objectives

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
gobuster dir -u http://10.33.38.207/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.110.157.102/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Writable PATH**.

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
nmap -sCV -p5985,8443,1433 10.114.243.199 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.88.3.31/FUZZ
gobuster dir -u http://10.42.81.110/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.67.227.117 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.84.163.117/FUZZ
nmap -sCV -p5986,5986,1521 10.93.218.154 -oN scan.txt
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

```powershell
crackmapexec smb 10.114.142.179 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.102.40.148 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `ldapsearch`
- `wmiexec`
- `nmap`
- `kerbrute`
- `evil-winrm`
- `atexec`
- `impacket`
- `crackmapexec`

### Key Takeaways

- Writable PATH
- AS-REP Roasting
