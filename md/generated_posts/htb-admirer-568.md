---
TitleSEO: "HackTheBox — Admirer (Hard Windows) | ZureFX"
TitlePost: "HackTheBox — Admirer (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Admirer. Golden Ticket and Subdomain Takeover to achieve hard compromise on Windows."
Keywords: "medium, active directory, ctf, offsec, hard"
URL: "https://zurefx.github.io/writeups/htb-admirer-568.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-admirer-568/"
Date: "2024-01-10"
Tags: "Medium, Active Directory, CTF, OffSec, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-admirer-568"
Permalink: "/writeups/htb-admirer-568.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Admirer** is rated **Hard** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.10.224.167`.

### Objectives

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.89.224.23/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.96.50.21 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.79.225.146
gobuster dir -u http://10.39.234.93/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Subdomain Takeover**.

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.61.11.34 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.40.123.244/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.10.176.78/FUZZ
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```powershell
gobuster dir -u http://10.99.156.239/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `secretsdump`
- `wpscan`
- `smbclient`
- `john`
- `atexec`

### Key Takeaways

- Golden Ticket
- Subdomain Takeover
- Remote Code Execution
- Pass the Ticket
