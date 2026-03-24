---
TitleSEO: "VulnHub — Bucket (Hard Windows) | ZureFX"
TitlePost: "VulnHub — Bucket (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Bucket. Pass the Hash and GPP Password to achieve hard compromise on Windows."
Keywords: "offsec, hard, easy, web, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-bucket-395.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-bucket-395/"
Date: "2025-04-29"
Tags: "OffSec, Hard, Easy, Web, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-bucket-395"
Permalink: "/writeups/htb-bucket-395.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Bucket** is rated **Hard** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.114.85.99`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.93.120.50/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
gobuster dir -u http://10.46.215.40/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.105.108.150/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.82.109.67/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

### Web Enumeration

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Pass the Hash**.

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.61.36.1/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.65.181.202/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

```powershell
feroxbuster -h
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

```powershell
nmap -sCV -p8888,80,135 10.82.177.253 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `msfvenom`
- `hashcat`
- `burpsuite`
- `wmiexec`

### Key Takeaways

- Pass the Hash
- GPP Password
