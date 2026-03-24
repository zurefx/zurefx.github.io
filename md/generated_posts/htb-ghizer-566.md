---
TitleSEO: "VulnHub — Ghizer (Medium FreeBSD) | ZureFX"
TitlePost: "VulnHub — Ghizer (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Ghizer. Insecure Deserialization and LXD Privilege Escalation to achieve medium compromise on FreeBSD."
Keywords: "windows, web, reversing, medium, ctf, offsec, linux"
URL: "https://zurefx.github.io/writeups/htb-ghizer-566.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ghizer-566/"
Date: "2024-02-01"
Tags: "Windows, Web, Reversing, Medium, CTF, OffSec, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-ghizer-566"
Permalink: "/writeups/htb-ghizer-566.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ghizer** is rated **Medium** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.90.149.70`.

### Objectives

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.49.49.178 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
crackmapexec smb 10.109.73.51 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.85.52.215
```

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

### Web Enumeration

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.32.49.22 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.23.77.170
evil-winrm -i 10.77.94.179 -u administrator -p 'P@ssw0rd!'
```

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **LXD Privilege Escalation**.

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.59.113/FUZZ
nmap -sCV -p389,135,389 10.23.5.52 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.69.219.216
feroxbuster -h
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
crackmapexec smb 10.101.103.12 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.25.163.7 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `ligolo-ng`
- `wpscan`
- `wmiexec`
- `secretsdump`
- `atexec`
- `ffuf`
- `sqlmap`

### Key Takeaways

- Insecure Deserialization
- LXD Privilege Escalation
- Open Redirect
- Silver Ticket
