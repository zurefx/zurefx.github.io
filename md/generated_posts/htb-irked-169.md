---
TitleSEO: "PwnTillDawn — Irked (Hard OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Irked (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Irked. SeDebugPrivilege and DLL Hijacking to achieve hard compromise on OpenBSD."
Keywords: "hackthebox, tryhackme, medium, ctf"
URL: "https://zurefx.github.io/writeups/htb-irked-169.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-irked-169/"
Date: "2025-03-03"
Tags: "HackTheBox, TryHackMe, Medium, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-irked-169"
Permalink: "/writeups/htb-irked-169.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Irked** is rated **Hard** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.117.74.192`.

### Objectives

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.104.59.152/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.90.95.187/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.23.169.189 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

Key finding: **SeDebugPrivilege**.

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
crackmapexec smb 10.126.189.51 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.59.183.23 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.113.229.134/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

```powershell
evil-winrm -i 10.51.24.251 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.97.239.167 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.81.55.79 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `ldapsearch`
- `metasploit`
- `ffuf`
- `enum4linux`
- `atexec`
- `GetUserSPNs`
- `wmiexec`

### Key Takeaways

- SeDebugPrivilege
- DLL Hijacking
- CSRF
