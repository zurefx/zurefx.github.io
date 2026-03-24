---
TitleSEO: "PwnTillDawn — Node (Hard Windows) | ZureFX"
TitlePost: "PwnTillDawn — Node (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Node. SSRF and Unquoted Service Path to achieve hard compromise on Windows."
Keywords: "hackthebox, ctf, medium, offsec, linux, pwntilldawn, reversing"
URL: "https://zurefx.github.io/writeups/htb-node-119.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-node-119/"
Date: "2024-02-27"
Tags: "HackTheBox, CTF, Medium, OffSec, Linux, PwnTillDawn, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-node-119"
Permalink: "/writeups/htb-node-119.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Node** is rated **Hard** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.55.123.194`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.11.145.153
nmap -sCV -p443,5986,3268 10.10.145.225 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p110,587,445 10.72.155.6 -oN scan.txt
nmap -sCV -p9200,21,8888 10.14.153.57 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.22.144.175 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Unquoted Service Path**.

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.11.241.227/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.30.28.208 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p636,21,25 10.19.217.59 -oN scan.txt
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

```powershell
feroxbuster -h
crackmapexec smb 10.11.50.115 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `ffuf`
- `evil-winrm`
- `enum4linux`
- `bloodhound`
- `atexec`
- `metasploit`
- `nmap`
- `sqlmap`

### Key Takeaways

- SSRF
- Unquoted Service Path
- Golden Ticket
- Cron Job
