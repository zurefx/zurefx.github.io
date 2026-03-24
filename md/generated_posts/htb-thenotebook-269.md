---
TitleSEO: "TryHackMe — TheNotebook (Medium Windows) | ZureFX"
TitlePost: "TryHackMe — TheNotebook (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe TheNotebook. Cron Job and XSS to achieve medium compromise on Windows."
Keywords: "hackthebox, windows, forensics, offsec, reversing, pwntilldawn, hard"
URL: "https://zurefx.github.io/writeups/htb-thenotebook-269.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-thenotebook-269/"
Date: "2025-11-25"
Tags: "HackTheBox, Windows, Forensics, OffSec, Reversing, PwnTillDawn, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-thenotebook-269"
Permalink: "/writeups/htb-thenotebook-269.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **TheNotebook** is rated **Medium** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.34.146.16`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.104.61.84 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.113.78.177/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.80.67.109/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.52.51.177
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Cron Job**.

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

```bash
gobuster dir -u http://10.42.73.168/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.94.66.186/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.42.223.25 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

```powershell
gobuster dir -u http://10.62.233.130/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `GetNPUsers`
- `rubeus`
- `impacket`
- `enum4linux`

### Key Takeaways

- Cron Job
- XSS
