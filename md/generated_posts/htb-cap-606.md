---
TitleSEO: "OffSec Proving Grounds — Cap (Medium Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Cap (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Cap. Golden Ticket and Command Injection to achieve medium compromise on Windows."
Keywords: "reversing, offsec, medium, web, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-cap-606.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cap-606/"
Date: "2025-07-01"
Tags: "Reversing, OffSec, Medium, Web, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-cap-606"
Permalink: "/writeups/htb-cap-606.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Cap** is rated **Medium** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.96.116.17`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.75.210.199/FUZZ
crackmapexec smb 10.21.17.138 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

### Web Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p1521,143,1521 10.116.241.135 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.94.153.246
```

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

Key finding: **Command Injection**.

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.107.117.102/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.112.238.53 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.47.92.49/FUZZ
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
evil-winrm -i 10.54.121.188 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p110,143,135 10.32.157.86 -oN scan.txt
gobuster dir -u http://10.29.115.191/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `wmiexec`
- `burpsuite`
- `ffuf`
- `sqlmap`
- `evil-winrm`

### Key Takeaways

- Golden Ticket
- Command Injection
