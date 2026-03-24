---
TitleSEO: "VulnHub — Writer (Medium FreeBSD) | ZureFX"
TitlePost: "VulnHub — Writer (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Writer. IDOR and SUID Binary to achieve medium compromise on FreeBSD."
Keywords: "offsec, insane, easy, linux"
URL: "https://zurefx.github.io/writeups/htb-writer-963.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-writer-963/"
Date: "2024-09-20"
Tags: "OffSec, Insane, Easy, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-writer-963"
Permalink: "/writeups/htb-writer-963.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Writer** is rated **Medium** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.28.173.153`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.75.192.1 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.25.155.184/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.26.181.223/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p5432,135,3268 10.110.183.39 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.32.21
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.207.102/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.208.66
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **IDOR**.

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
crackmapexec smb 10.103.223.131 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.19.202.230 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.73.131.148 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

```powershell
feroxbuster -h
```

### Exploitation

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.35.104.236 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.54.99.218 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `wmiexec`
- `wpscan`
- `hydra`
- `ldapsearch`
- `pwncat`

### Key Takeaways

- IDOR
- SUID Binary
- DCSync
- AS-REP Roasting
