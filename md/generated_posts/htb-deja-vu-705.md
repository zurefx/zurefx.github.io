---
TitleSEO: "PwnTillDawn — Deja Vu (Medium OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Deja Vu (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Deja Vu. Docker Escape and Weak Service Permissions to achieve medium compromise on OpenBSD."
Keywords: "offsec, active directory, insane, web, easy"
URL: "https://zurefx.github.io/writeups/htb-deja-vu-705.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-deja-vu-705/"
Date: "2025-06-04"
Tags: "OffSec, Active Directory, Insane, Web, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-deja-vu-705"
Permalink: "/writeups/htb-deja-vu-705.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Deja Vu** is rated **Medium** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.76.121.3`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.26.221.144 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.15.246.217/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.8.114/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p9200,636,23 10.56.138.156 -oN scan.txt
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

### Web Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.124.77.45/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Weak Service Permissions**.

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.37.28
crackmapexec smb 10.117.97.211 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.93.139.215 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.90.97.200 -u administrator -p 'P@ssw0rd!'
```

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.65.31.243
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.52.62.146 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.131.60
crackmapexec smb 10.76.154.172 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.25.217.69 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `ldapsearch`
- `evil-winrm`
- `hydra`
- `john`
- `lookupsid`
- `bloodhound`
- `crackmapexec`
- `dcomexec`

### Key Takeaways

- Docker Escape
- Weak Service Permissions
