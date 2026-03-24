---
TitleSEO: "OffSec Proving Grounds — Legacy (Insane Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Legacy (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Legacy. SSTI and Open Redirect to achieve insane compromise on Windows."
Keywords: "hackthebox, web, medium, hard, insane, offsec"
URL: "https://zurefx.github.io/writeups/htb-legacy-939.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-legacy-939/"
Date: "2024-03-02"
Tags: "HackTheBox, Web, Medium, Hard, Insane, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-legacy-939"
Permalink: "/writeups/htb-legacy-939.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Legacy** is rated **Insane** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.66.59.21`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

```bash
crackmapexec smb 10.10.212.3 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p995,995,587 10.69.92.92 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Web Enumeration

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.125.150.34 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **SSTI**.

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.90.216.62
```

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

```powershell
gobuster dir -u http://10.25.29.167/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
evil-winrm -i 10.120.189.151 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `crackmapexec`
- `nmap`
- `lookupsid`
- `nikto`

### Key Takeaways

- SSTI
- Open Redirect
- Sudo Misconfiguration
