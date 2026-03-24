---
TitleSEO: "VulnHub — Beep (Easy FreeBSD) | ZureFX"
TitlePost: "VulnHub — Beep (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Beep. Open Redirect and Constrained Delegation to achieve easy compromise on FreeBSD."
Keywords: "medium, offsec, reversing"
URL: "https://zurefx.github.io/writeups/htb-beep-888.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-beep-888/"
Date: "2025-07-12"
Tags: "Medium, OffSec, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-beep-888"
Permalink: "/writeups/htb-beep-888.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Beep** is rated **Easy** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.63.105.251`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.62.231.113 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.27.128.243
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

```bash
gobuster dir -u http://10.53.105.234/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

Key finding: **Constrained Delegation**.

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

```bash
feroxbuster -h
```

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

```powershell
crackmapexec smb 10.119.190.236 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
nmap -sCV -p5432,445,8443 10.29.53.216 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.70.202.211 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `socat`
- `bloodhound`
- `kerbrute`
- `burpsuite`
- `smbexec`
- `lookupsid`
- `enum4linux`

### Key Takeaways

- Open Redirect
- Constrained Delegation
