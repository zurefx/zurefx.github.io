---
TitleSEO: "HackTheBox — Cereal (Hard FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Cereal (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Cereal. XXE and CSRF to achieve hard compromise on FreeBSD."
Keywords: "offsec, hard, easy, hackthebox, medium, windows, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-cereal-900.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cereal-900/"
Date: "2024-03-06"
Tags: "OffSec, Hard, Easy, HackTheBox, Medium, Windows, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-cereal-900"
Permalink: "/writeups/htb-cereal-900.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Cereal** is rated **Hard** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.69.232.161`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.79.203.140/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
nmap -sCV -p3389,22,143 10.123.84.18 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

### SMB Enumeration

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.82.201.129 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p53,464,636 10.15.170.158 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.247.115 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **CSRF**.

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
gobuster dir -u http://10.105.53.140/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `nmap`
- `evil-winrm`
- `bloodhound`
- `gobuster`
- `GetNPUsers`
- `rpcclient`
- `rubeus`

### Key Takeaways

- XXE
- CSRF
- Sudo Misconfiguration
- Kerberoasting
