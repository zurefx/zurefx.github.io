---
TitleSEO: "VulnHub — Networked (Easy FreeBSD) | ZureFX"
TitlePost: "VulnHub — Networked (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Networked. Broken Access Control and Sudo Misconfiguration to achieve easy compromise on FreeBSD."
Keywords: "web, insane, active directory, forensics"
URL: "https://zurefx.github.io/writeups/htb-networked-399.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-networked-399/"
Date: "2025-05-03"
Tags: "Web, Insane, Active Directory, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-networked-399"
Permalink: "/writeups/htb-networked-399.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Networked** is rated **Easy** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.76.212.204`.

### Objectives

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.75.114.53 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.31.55.196 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

### Web Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.116.183.94
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Broken Access Control**.

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.62.62.28 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.54.86.190 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p389,993,8443 10.94.13.134 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `ldapsearch`
- `impacket`
- `kerbrute`
- `hydra`

### Key Takeaways

- Broken Access Control
- Sudo Misconfiguration
