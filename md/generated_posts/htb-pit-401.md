---
TitleSEO: "PwnTillDawn — Pit (Easy Windows) | ZureFX"
TitlePost: "PwnTillDawn — Pit (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Pit. Remote File Inclusion and IDOR to achieve easy compromise on Windows."
Keywords: "web, reversing, tryhackme, medium, hackthebox, linux"
URL: "https://zurefx.github.io/writeups/htb-pit-401.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pit-401/"
Date: "2024-12-09"
Tags: "Web, Reversing, TryHackMe, Medium, HackTheBox, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-pit-401"
Permalink: "/writeups/htb-pit-401.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Pit** is rated **Easy** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.103.10.54`.

### Objectives

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.108.211.215
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.110.108.200 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.22.87.147/FUZZ
```

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

### Service Enumeration

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

### Web Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
crackmapexec smb 10.67.69.70 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **Remote File Inclusion**.

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.40.242.129
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.123.217.133/FUZZ
gobuster dir -u http://10.57.64.174/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

```powershell
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.72.220.156/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `kerbrute`
- `chisel`
- `nikto`
- `impacket`

### Key Takeaways

- Remote File Inclusion
- IDOR
- AlwaysInstallElevated
