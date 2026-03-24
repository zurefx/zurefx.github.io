---
TitleSEO: "PwnTillDawn — Optimum (Insane FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Optimum (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Optimum. IDOR and SeImpersonatePrivilege to achieve insane compromise on FreeBSD."
Keywords: "reversing, active directory, medium, hackthebox, insane"
URL: "https://zurefx.github.io/writeups/htb-optimum-959.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-optimum-959/"
Date: "2025-01-09"
Tags: "Reversing, Active Directory, Medium, HackTheBox, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-optimum-959"
Permalink: "/writeups/htb-optimum-959.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Optimum** is rated **Insane** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.109.155.25`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.22.42.164/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

```bash
evil-winrm -i 10.38.20.76 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.74.131.158/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

```bash
nmap -sCV -p8080,5986,27017 10.90.75.196 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.126.229.199 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **SeImpersonatePrivilege**.

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.230.81 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.97.196.206 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.105.116.144 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
gobuster dir -u http://10.57.195.238/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.100.214.115/FUZZ
```

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `feroxbuster`
- `wmiexec`
- `netcat`
- `socat`
- `lookupsid`
- `secretsdump`
- `smbexec`

### Key Takeaways

- IDOR
- SeImpersonatePrivilege
- LXD Privilege Escalation
