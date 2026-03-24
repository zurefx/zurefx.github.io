---
TitleSEO: "OffSec Proving Grounds — Skynet (Hard FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Skynet (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Skynet. Kerberoasting and IDOR to achieve hard compromise on FreeBSD."
Keywords: "insane, pwntilldawn, forensics, easy, linux"
URL: "https://zurefx.github.io/writeups/htb-skynet-208.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-skynet-208/"
Date: "2025-04-28"
Tags: "Insane, PwnTillDawn, Forensics, Easy, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-skynet-208"
Permalink: "/writeups/htb-skynet-208.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Skynet** is rated **Hard** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.25.7.107`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.52.148.127 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.21.8.247/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.126.30.173 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

Key finding: **IDOR**.

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.127.169.174 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
nmap -sCV -p5986,21,5432 10.83.123.23 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.104.54.169
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.97.59.139
```

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `smbclient`
- `john`
- `wmiexec`
- `nmap`
- `sqlmap`
- `hashcat`
- `sharphound`
- `evil-winrm`

### Key Takeaways

- Kerberoasting
- IDOR
