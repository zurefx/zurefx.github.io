---
TitleSEO: "TryHackMe — Sense (Medium Windows) | ZureFX"
TitlePost: "TryHackMe — Sense (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Sense. Open Redirect and XXE to achieve medium compromise on Windows."
Keywords: "hard, web, offsec, medium, insane, ctf, reversing"
URL: "https://zurefx.github.io/writeups/htb-sense-794.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sense-794/"
Date: "2025-06-21"
Tags: "Hard, Web, OffSec, Medium, Insane, CTF, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-sense-794"
Permalink: "/writeups/htb-sense-794.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sense** is rated **Medium** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.23.44.221`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p9200,80,23 10.105.245.41 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.38.138.23 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

### Web Enumeration

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

Key finding: **Open Redirect**.

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.31.28.218
```

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
nmap -sCV -p993,53,22 10.67.94.28 -oN scan.txt
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
feroxbuster -h
evil-winrm -i 10.103.253.88 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `atexec`
- `burpsuite`
- `impacket`
- `gobuster`
- `netcat`

### Key Takeaways

- Open Redirect
- XXE
