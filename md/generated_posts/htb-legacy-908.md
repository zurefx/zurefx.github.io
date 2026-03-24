---
TitleSEO: "OffSec Proving Grounds — Legacy (Easy FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Legacy (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Legacy. DCSync and Broken Access Control to achieve easy compromise on FreeBSD."
Keywords: "web, ctf, medium, reversing"
URL: "https://zurefx.github.io/writeups/htb-legacy-908.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-legacy-908/"
Date: "2024-10-20"
Tags: "Web, CTF, Medium, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-legacy-908"
Permalink: "/writeups/htb-legacy-908.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Legacy** is rated **Easy** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.20.33.109`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.112.59.236
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.251.43/FUZZ
evil-winrm -i 10.129.100.25 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

### Web Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.63.60.225/FUZZ
```

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

Key finding: **Broken Access Control**.

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.55.193.99 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p80,995,5432 10.14.141.184 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

```powershell
gobuster dir -u http://10.124.5.253/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.30.235.11 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `sharphound`
- `mimikatz`
- `atexec`
- `metasploit`

### Key Takeaways

- DCSync
- Broken Access Control
- GPP Password
- XXE
