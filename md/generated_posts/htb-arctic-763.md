---
TitleSEO: "PwnTillDawn — Arctic (Insane FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Arctic (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Arctic. GPP Password and SSRF to achieve insane compromise on FreeBSD."
Keywords: "reversing, tryhackme, active directory"
URL: "https://zurefx.github.io/writeups/htb-arctic-763.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-arctic-763/"
Date: "2025-11-30"
Tags: "Reversing, TryHackMe, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-arctic-763"
Permalink: "/writeups/htb-arctic-763.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Arctic** is rated **Insane** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.121.70.12`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.69.159.146/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.117.243
evil-winrm -i 10.36.242.67 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **Resource-Based Constrained Delegation**.

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.71.211.126 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `evil-winrm`
- `secretsdump`
- `wmiexec`
- `burpsuite`

### Key Takeaways

- GPP Password
- SSRF
- Resource-Based Constrained Delegation
