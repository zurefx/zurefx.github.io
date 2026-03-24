---
TitleSEO: "PwnTillDawn — Cronos (Hard OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Cronos (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Cronos. Resource-Based Constrained Delegation and DCSync to achieve hard compromise on OpenBSD."
Keywords: "tryhackme, linux, web, medium"
URL: "https://zurefx.github.io/writeups/htb-cronos-823.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cronos-823/"
Date: "2025-07-27"
Tags: "TryHackMe, Linux, Web, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-cronos-823"
Permalink: "/writeups/htb-cronos-823.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Cronos** is rated **Hard** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.94.241.161`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.85.146.102 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

```bash
crackmapexec smb 10.97.166.107 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Web Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.124.171.35 -u administrator -p 'P@ssw0rd!'
```

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **DCSync**.

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

### Initial Access

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.228.110
feroxbuster -h
crackmapexec smb 10.106.16.18 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

```powershell
nmap -sCV -p139,9200,110 10.55.55.161 -oN scan.txt
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.100.112.213
```

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `socat`
- `burpsuite`
- `wpscan`
- `wmiexec`
- `crackmapexec`

### Key Takeaways

- Resource-Based Constrained Delegation
- DCSync
