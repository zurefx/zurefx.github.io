---
TitleSEO: "TryHackMe — Networked (Hard Linux) | ZureFX"
TitlePost: "TryHackMe — Networked (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Networked. Unquoted Service Path and Resource-Based Constrained Delegation to achieve hard compromise on Linux."
Keywords: "windows, pwntilldawn, offsec, linux, ctf, forensics, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-networked-194.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-networked-194/"
Date: "2025-10-08"
Tags: "Windows, PwnTillDawn, OffSec, Linux, CTF, Forensics, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-networked-194"
Permalink: "/writeups/htb-networked-194.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Networked** is rated **Hard** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.70.192.108`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.110.5.239 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.56.136.24
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.10.247.140 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.11.153.81/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.120.86.154/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Resource-Based Constrained Delegation**.

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.138.181 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p443,8080,143 10.69.169.74 -oN scan.txt
crackmapexec smb 10.122.217.93 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
gobuster dir -u http://10.43.77.100/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.87.36.80 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `wmiexec`
- `mimikatz`
- `hashcat`
- `nmap`

### Key Takeaways

- Unquoted Service Path
- Resource-Based Constrained Delegation
- Unconstrained Delegation
