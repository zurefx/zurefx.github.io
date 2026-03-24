---
TitleSEO: "VulnHub — Mustacchio (Insane Windows) | ZureFX"
TitlePost: "VulnHub — Mustacchio (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Mustacchio. XSS and CSRF to achieve insane compromise on Windows."
Keywords: "ctf, web, offsec, easy, forensics, active directory"
URL: "https://zurefx.github.io/writeups/htb-mustacchio-947.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mustacchio-947/"
Date: "2024-04-27"
Tags: "CTF, Web, OffSec, Easy, Forensics, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-mustacchio-947"
Permalink: "/writeups/htb-mustacchio-947.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mustacchio** is rated **Insane** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.44.200.204`.

### Objectives

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.85.71.246/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Web Enumeration

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.21.190.170 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.33.193.106 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.111.102.240 -u administrator -p 'P@ssw0rd!' --shares
```

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **XSS**.

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
gobuster dir -u http://10.107.227.151/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.27.78.80
```

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `hashcat`
- `socat`
- `smbexec`
- `netcat`
- `metasploit`
- `crackmapexec`

### Key Takeaways

- XSS
- CSRF
