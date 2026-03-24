---
TitleSEO: "TryHackMe — Academy (Easy Linux) | ZureFX"
TitlePost: "TryHackMe — Academy (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Academy. DLL Hijacking and Docker Escape to achieve easy compromise on Linux."
Keywords: "insane, active directory, easy, hard"
URL: "https://zurefx.github.io/writeups/htb-academy-635.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-academy-635/"
Date: "2025-03-30"
Tags: "Insane, Active Directory, Easy, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-academy-635"
Permalink: "/writeups/htb-academy-635.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Academy** is rated **Easy** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.16.116.96`.

### Objectives

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.103.113.245
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
gobuster dir -u http://10.40.32.118/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.120.32.14
impacket-secretsdump administrator:'P@ssw0rd!'@10.83.20.96
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

Key finding: **Docker Escape**.

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

```bash
gobuster dir -u http://10.74.55.116/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.116.90.236
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.103.225
evil-winrm -i 10.73.3.189 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.32.181.212
```

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **root** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `ldapsearch`
- `feroxbuster`
- `netcat`
- `ligolo-ng`

### Key Takeaways

- DLL Hijacking
- Docker Escape
- Writable PATH
