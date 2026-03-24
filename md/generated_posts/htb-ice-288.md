---
TitleSEO: "TryHackMe — Ice (Insane FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Ice (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Ice. SQL Injection and Local File Inclusion to achieve insane compromise on FreeBSD."
Keywords: "forensics, easy, hackthebox, medium, active directory, linux, insane"
URL: "https://zurefx.github.io/writeups/htb-ice-288.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ice-288/"
Date: "2024-03-31"
Tags: "Forensics, Easy, HackTheBox, Medium, Active Directory, Linux, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-ice-288"
Permalink: "/writeups/htb-ice-288.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ice** is rated **Insane** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.44.65.254`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.147.210 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.127.35.181 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.66.118 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.126.89.91/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

Key finding: **Local File Inclusion**.

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.75.50.88 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
feroxbuster -h
```

### Exploitation

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.30.52.254 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.47.108.117 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.17.193.158 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `GetUserSPNs`
- `pwncat`
- `impacket`
- `burpsuite`

### Key Takeaways

- SQL Injection
- Local File Inclusion
- LAPS Abuse
