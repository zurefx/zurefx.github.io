---
TitleSEO: "PwnTillDawn — Delivery (Easy OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Delivery (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Delivery. SUID Binary and Remote Code Execution to achieve easy compromise on OpenBSD."
Keywords: "linux, easy, medium, forensics, ctf, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-delivery-241.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-delivery-241/"
Date: "2024-12-21"
Tags: "Linux, Easy, Medium, Forensics, CTF, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-delivery-241"
Permalink: "/writeups/htb-delivery-241.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Delivery** is rated **Easy** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.13.190.252`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.78.94.196 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.54.87.33/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.39.83.38
gobuster dir -u http://10.115.213.157/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.243.197
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.175.207/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Remote Code Execution**.

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

```bash
gobuster dir -u http://10.17.235.135/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
feroxbuster -h
nmap -sCV -p9200,27017,445 10.106.131.98 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.94.205.131
evil-winrm -i 10.38.104.160 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

```powershell
crackmapexec smb 10.50.248.5 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.37.222.167/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.66.12.146 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `wpscan`
- `atexec`
- `chisel`
- `lookupsid`
- `wmiexec`

### Key Takeaways

- SUID Binary
- Remote Code Execution
