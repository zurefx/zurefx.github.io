---
TitleSEO: "OffSec Proving Grounds — Admirer (Insane FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Admirer (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Admirer. DLL Hijacking and Remote File Inclusion to achieve insane compromise on FreeBSD."
Keywords: "forensics, linux, offsec, tryhackme, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-admirer-804.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-admirer-804/"
Date: "2024-09-02"
Tags: "Forensics, Linux, OffSec, TryHackMe, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-admirer-804"
Permalink: "/writeups/htb-admirer-804.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Admirer** is rated **Insane** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.71.140.240`.

### Objectives

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.96.226.67 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

```bash
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

### SMB Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.83.104.198
gobuster dir -u http://10.92.250.209/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.61.217.78/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **Remote File Inclusion**.

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.91.227.21 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

```powershell
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

```powershell
feroxbuster -h
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.192.69 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.37.192.126/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `feroxbuster`
- `gobuster`
- `pwncat`
- `impacket`
- `atexec`
- `ligolo-ng`
- `socat`
- `enum4linux`

### Key Takeaways

- DLL Hijacking
- Remote File Inclusion
