---
TitleSEO: "OffSec Proving Grounds — Overpass (Medium Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Overpass (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Overpass. Open Redirect and Remote File Inclusion to achieve medium compromise on Windows."
Keywords: "web, hackthebox, forensics, windows, easy, active directory, ctf"
URL: "https://zurefx.github.io/writeups/htb-overpass-636.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-overpass-636/"
Date: "2024-03-12"
Tags: "Web, HackTheBox, Forensics, Windows, Easy, Active Directory, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-overpass-636"
Permalink: "/writeups/htb-overpass-636.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Overpass** is rated **Medium** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.86.254.55`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.108.148.66
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.92.20.178
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.46.71.58/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Web Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.50.120.198 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.83.190.116 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Remote File Inclusion**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

```bash
nmap -sCV -p80,5432,3389 10.52.198.216 -oN scan.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
evil-winrm -i 10.48.8.145 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.16.16.245/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.38.98.136 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.106.150
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `feroxbuster`
- `crackmapexec`
- `bloodhound`
- `GetUserSPNs`
- `kerbrute`

### Key Takeaways

- Open Redirect
- Remote File Inclusion
