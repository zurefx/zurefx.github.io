---
TitleSEO: "OffSec Proving Grounds — Sense (Medium FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Sense (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Sense. SUID Binary and Broken Access Control to achieve medium compromise on FreeBSD."
Keywords: "insane, pwntilldawn, linux, active directory, offsec, forensics"
URL: "https://zurefx.github.io/writeups/htb-sense-630.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sense-630/"
Date: "2025-04-08"
Tags: "Insane, PwnTillDawn, Linux, Active Directory, OffSec, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-sense-630"
Permalink: "/writeups/htb-sense-630.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Sense** is rated **Medium** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.85.238.63`.

### Objectives

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.45.246.219
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.57.113.50 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p587,3306,135 10.63.90.169 -oN scan.txt
crackmapexec smb 10.115.35.209 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p5986,5985,993 10.50.50.251 -oN scan.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
feroxbuster -h
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

Key finding: **Unconstrained Delegation**.

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.31.13.228 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p587,143,23 10.72.26.122 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
nmap -sCV -p5432,21,5432 10.44.139.200 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.99.98.44 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `chisel`
- `kerbrute`
- `evil-winrm`
- `impacket`
- `GetNPUsers`
- `burpsuite`

### Key Takeaways

- SUID Binary
- Broken Access Control
- Unconstrained Delegation
