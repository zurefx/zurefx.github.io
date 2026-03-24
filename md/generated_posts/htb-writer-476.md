---
TitleSEO: "HackTheBox — Writer (Insane OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Writer (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Writer. Command Injection and CSRF to achieve insane compromise on OpenBSD."
Keywords: "linux, windows, web, forensics"
URL: "https://zurefx.github.io/writeups/htb-writer-476.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-writer-476/"
Date: "2024-11-12"
Tags: "Linux, Windows, Web, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-writer-476"
Permalink: "/writeups/htb-writer-476.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Writer** is rated **Insane** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.110.228.109`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.86.67.87 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.114.72.225
```

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

### Web Enumeration

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.91.26.21 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Command Injection**.

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.64.151.246 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.122.116/FUZZ
```

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.14.163.238/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.98.249.133 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

```powershell
gobuster dir -u http://10.98.111.200/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.111.191.237
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `GetNPUsers`
- `burpsuite`
- `gobuster`
- `impacket`
- `nikto`
- `enum4linux`
- `rubeus`

### Key Takeaways

- Command Injection
- CSRF
