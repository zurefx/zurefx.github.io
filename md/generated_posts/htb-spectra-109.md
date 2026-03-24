---
TitleSEO: "HackTheBox — Spectra (Hard Windows) | ZureFX"
TitlePost: "HackTheBox — Spectra (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Spectra. XXE and Docker Escape to achieve hard compromise on Windows."
Keywords: "forensics, linux, medium, hard, active directory, offsec, web"
URL: "https://zurefx.github.io/writeups/htb-spectra-109.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-109/"
Date: "2026-03-15"
Tags: "Forensics, Linux, Medium, Hard, Active Directory, OffSec, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-109"
Permalink: "/writeups/htb-spectra-109.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Spectra** is rated **Hard** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.86.136.83`.

### Objectives

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.15.116.210
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.88.38.8
```

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

### Web Enumeration

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
gobuster dir -u http://10.63.78.48/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.60.32.42 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

Key finding: **XXE**.

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.33.160/FUZZ
crackmapexec smb 10.112.203.227 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

```powershell
evil-winrm -i 10.24.178.41 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.61.164.147
evil-winrm -i 10.112.14.154 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `enum4linux`
- `msfvenom`
- `wmiexec`
- `mimikatz`
- `atexec`
- `wpscan`
- `metasploit`
- `hydra`

### Key Takeaways

- XXE
- Docker Escape
