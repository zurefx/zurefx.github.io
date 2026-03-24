---
TitleSEO: "VulnHub — Crossfit (Hard OpenBSD) | ZureFX"
TitlePost: "VulnHub — Crossfit (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Crossfit. Remote File Inclusion and DLL Hijacking to achieve hard compromise on OpenBSD."
Keywords: "easy, offsec, ctf"
URL: "https://zurefx.github.io/writeups/htb-crossfit-588.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-crossfit-588/"
Date: "2025-05-08"
Tags: "Easy, OffSec, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-crossfit-588"
Permalink: "/writeups/htb-crossfit-588.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Crossfit** is rated **Hard** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.106.6.18`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
```

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.94.94 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.95.228.180 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.27.83.29/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.51.215.50
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.92.15.9/FUZZ
feroxbuster -h
```

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **Broken Access Control**.

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

### Initial Access

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.20.11.72 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.36.51 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.109.220.47
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
nmap -sCV -p445,1433,445 10.126.191.248 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.97.36
evil-winrm -i 10.13.244.207 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `msfvenom`
- `sharphound`
- `metasploit`
- `kerbrute`
- `smbexec`
- `wmiexec`
- `wpscan`

### Key Takeaways

- Remote File Inclusion
- DLL Hijacking
- ACL Abuse
- Broken Access Control
