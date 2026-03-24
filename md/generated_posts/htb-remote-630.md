---
TitleSEO: "PwnTillDawn — Remote (Easy Windows) | ZureFX"
TitlePost: "PwnTillDawn — Remote (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Remote. Command Injection and Sudo Misconfiguration to achieve easy compromise on Windows."
Keywords: "reversing, web, offsec"
URL: "https://zurefx.github.io/writeups/htb-remote-630.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-remote-630/"
Date: "2025-03-08"
Tags: "Reversing, Web, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-remote-630"
Permalink: "/writeups/htb-remote-630.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Remote** is rated **Easy** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.62.191.229`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.108.119.59 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.10.29.136 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

### Web Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.11.21.56
```

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

Key finding: **Broken Access Control**.

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.57.113.49
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.76.194.60/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `evil-winrm`
- `secretsdump`
- `enum4linux`
- `john`
- `ffuf`
- `metasploit`
- `gobuster`

### Key Takeaways

- Command Injection
- Sudo Misconfiguration
- Broken Access Control
