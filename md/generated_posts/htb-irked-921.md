---
TitleSEO: "OffSec Proving Grounds — Irked (Medium Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Irked (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Irked. SSRF and DNS Rebinding to achieve medium compromise on Windows."
Keywords: "medium, offsec, reversing"
URL: "https://zurefx.github.io/writeups/htb-irked-921.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-irked-921/"
Date: "2025-08-22"
Tags: "Medium, OffSec, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-irked-921"
Permalink: "/writeups/htb-irked-921.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Irked** is rated **Medium** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.58.25.43`.

### Objectives

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.122.231.178/FUZZ
nmap -sCV -p389,443,443 10.31.90.61 -oN scan.txt
gobuster dir -u http://10.29.222.137/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.126.238.49
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.58.28.156/FUZZ
evil-winrm -i 10.30.32.73 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.81.246.246/FUZZ
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.101.236.3 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **SSRF**.

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.74.250.247/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.71.40.234 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.31.78.40 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.40.152 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.45.109.25 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.98.174.128
```

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `secretsdump`
- `mimikatz`
- `kerbrute`
- `smbexec`

### Key Takeaways

- SSRF
- DNS Rebinding
