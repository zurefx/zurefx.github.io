---
TitleSEO: "TryHackMe — Crossfit (Hard FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Crossfit (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Crossfit. Unquoted Service Path and Broken Access Control to achieve hard compromise on FreeBSD."
Keywords: "insane, hackthebox, offsec, ctf, reversing"
URL: "https://zurefx.github.io/writeups/htb-crossfit-426.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-crossfit-426/"
Date: "2024-11-23"
Tags: "Insane, HackTheBox, OffSec, CTF, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-crossfit-426"
Permalink: "/writeups/htb-crossfit-426.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Crossfit** is rated **Hard** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.79.162.130`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p3306,143,27017 10.64.180.145 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p5432,22,1521 10.124.210.236 -oN scan.txt
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Unquoted Service Path**.

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.119.120.139/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.5.23
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.20.220
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
evil-winrm -i 10.23.195.72 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `chisel`
- `GetUserSPNs`
- `ligolo-ng`
- `smbexec`
- `secretsdump`
- `evil-winrm`
- `psexec`

### Key Takeaways

- Unquoted Service Path
- Broken Access Control
- Insecure Deserialization
