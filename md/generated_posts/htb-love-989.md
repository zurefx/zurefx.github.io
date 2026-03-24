---
TitleSEO: "OffSec Proving Grounds — Love (Hard FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Love (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Love. Subdomain Takeover and Broken Access Control to achieve hard compromise on FreeBSD."
Keywords: "offsec, insane, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-love-989.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-love-989/"
Date: "2024-02-10"
Tags: "OffSec, Insane, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-love-989"
Permalink: "/writeups/htb-love-989.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Love** is rated **Hard** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.118.130.67`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.17.233.143 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

```bash
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.77.246/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **DCSync**.

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

```bash
evil-winrm -i 10.19.82.134 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.65.104.199/FUZZ
```

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.44.212.215/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.114.188.222
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.80.141.99 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.63.136
```

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `feroxbuster`
- `atexec`
- `GetNPUsers`
- `impacket`
- `ldapsearch`
- `bloodhound`

### Key Takeaways

- Subdomain Takeover
- Broken Access Control
- DCSync
