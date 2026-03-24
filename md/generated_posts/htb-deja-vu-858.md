---
TitleSEO: "OffSec Proving Grounds — Deja Vu (Insane OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Deja Vu (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Deja Vu. Kerberoasting and Unconstrained Delegation to achieve insane compromise on OpenBSD."
Keywords: "insane, medium, active directory, forensics"
URL: "https://zurefx.github.io/writeups/htb-deja-vu-858.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-deja-vu-858/"
Date: "2025-07-08"
Tags: "Insane, Medium, Active Directory, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-deja-vu-858"
Permalink: "/writeups/htb-deja-vu-858.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Deja Vu** is rated **Insane** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.67.65.28`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.66.182.186 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.56.234.112/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.26.167.195
gobuster dir -u http://10.19.22.142/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.53.204.124/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.64.84.158 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.222.88/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

Key finding: **Kerberoasting**.

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.16.248.72/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
crackmapexec smb 10.80.230.239 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.97.132.11 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

```powershell
evil-winrm -i 10.127.50.103 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.37.153.47/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p636,23,389 10.27.29.136 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `GetNPUsers`
- `nikto`
- `rubeus`
- `impacket`

### Key Takeaways

- Kerberoasting
- Unconstrained Delegation
