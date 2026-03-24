---
TitleSEO: "HackTheBox — Bastard (Hard OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Bastard (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Bastard. NFS No Root Squash and XSS to achieve hard compromise on OpenBSD."
Keywords: "web, hard, linux"
URL: "https://zurefx.github.io/writeups/htb-bastard-843.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-bastard-843/"
Date: "2024-06-27"
Tags: "Web, Hard, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-bastard-843"
Permalink: "/writeups/htb-bastard-843.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Bastard** is rated **Hard** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.82.86.193`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.81.206.235
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.117.82.72
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.37.23.89/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

### Web Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.56.91
```

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **XSS**.

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

```bash
nmap -sCV -p8888,3389,445 10.127.92.212 -oN scan.txt
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.119.65.150 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.222.132
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `metasploit`
- `sharphound`
- `enum4linux`
- `bloodhound`
- `mimikatz`

### Key Takeaways

- NFS No Root Squash
- XSS
- DNS Rebinding
- Silver Ticket
