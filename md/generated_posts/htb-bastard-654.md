---
TitleSEO: "VulnHub — Bastard (Easy FreeBSD) | ZureFX"
TitlePost: "VulnHub — Bastard (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Bastard. DCSync and SUID Binary to achieve easy compromise on FreeBSD."
Keywords: "easy, offsec, ctf, pwntilldawn, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-bastard-654.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-bastard-654/"
Date: "2024-04-27"
Tags: "Easy, OffSec, CTF, PwnTillDawn, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-bastard-654"
Permalink: "/writeups/htb-bastard-654.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Bastard** is rated **Easy** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.24.10.121`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.48.147.213/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.18.39 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.35.52.143 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p143,8080,21 10.53.15.41 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **Weak Service Permissions**.

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.63.243.237
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.71.107.37 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

```powershell
crackmapexec smb 10.85.186.208 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.33.241.93 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `nmap`
- `hashcat`
- `psexec`
- `rubeus`
- `evil-winrm`
- `feroxbuster`
- `lookupsid`
- `john`

### Key Takeaways

- DCSync
- SUID Binary
- SQL Injection
- Weak Service Permissions
