---
TitleSEO: "OffSec Proving Grounds — Passage (Easy OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Passage (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Passage. Pass the Hash and Unconstrained Delegation to achieve easy compromise on OpenBSD."
Keywords: "tryhackme, offsec, linux, forensics"
URL: "https://zurefx.github.io/writeups/htb-passage-834.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-passage-834/"
Date: "2024-05-11"
Tags: "TryHackMe, OffSec, Linux, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-passage-834"
Permalink: "/writeups/htb-passage-834.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Passage** is rated **Easy** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.82.94.124`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.10.240.59/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
evil-winrm -i 10.99.143.252 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.128.65.158/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.123.24.224/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p135,389,3306 10.22.247.177 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.198.51 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.87.55.80/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Unconstrained Delegation**.

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
crackmapexec smb 10.123.30.59 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.97.120
nmap -sCV -p389,80,25 10.115.5.189 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

```powershell
evil-winrm -i 10.103.116.87 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.46.209.223/FUZZ
feroxbuster -h
```

### Exploitation

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
crackmapexec smb 10.70.115.186 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `ffuf`
- `impacket`
- `metasploit`
- `enum4linux`
- `psexec`
- `dcomexec`
- `atexec`

### Key Takeaways

- Pass the Hash
- Unconstrained Delegation
