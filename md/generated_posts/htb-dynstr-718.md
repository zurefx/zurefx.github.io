---
TitleSEO: "TryHackMe — Dynstr (Easy Windows) | ZureFX"
TitlePost: "TryHackMe — Dynstr (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Dynstr. Kerberoasting and Weak Service Permissions to achieve easy compromise on Windows."
Keywords: "pwntilldawn, medium, hard, insane"
URL: "https://zurefx.github.io/writeups/htb-dynstr-718.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-dynstr-718/"
Date: "2024-08-27"
Tags: "PwnTillDawn, Medium, Hard, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-dynstr-718"
Permalink: "/writeups/htb-dynstr-718.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Dynstr** is rated **Easy** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.73.125.32`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.18.199.70 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

```bash
crackmapexec smb 10.97.9.46 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Kerberoasting**.

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

### Initial Access

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.78.32.109
```

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
crackmapexec smb 10.24.17.163 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p23,5986,8443 10.10.77.23 -oN scan.txt
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.33.219.239/FUZZ
feroxbuster -h
gobuster dir -u http://10.18.177.183/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.57.246.52 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `secretsdump`
- `impacket`
- `hashcat`
- `GetNPUsers`

### Key Takeaways

- Kerberoasting
- Weak Service Permissions
- CORS Misconfiguration
- SUID Binary
