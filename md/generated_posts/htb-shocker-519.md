---
TitleSEO: "VulnHub — Shocker (Hard FreeBSD) | ZureFX"
TitlePost: "VulnHub — Shocker (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Shocker. SeImpersonatePrivilege and Cron Job to achieve hard compromise on FreeBSD."
Keywords: "insane, pwntilldawn, active directory, windows, easy, offsec"
URL: "https://zurefx.github.io/writeups/htb-shocker-519.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-shocker-519/"
Date: "2024-08-25"
Tags: "Insane, PwnTillDawn, Active Directory, Windows, Easy, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-shocker-519"
Permalink: "/writeups/htb-shocker-519.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Shocker** is rated **Hard** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.25.63.4`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.78.155.164
crackmapexec smb 10.26.211.65 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

```bash
feroxbuster -h
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.169.142 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.80.125.201 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.164.13/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **Cron Job**.

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.66.110.42 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

```powershell
nmap -sCV -p3268,25,587 10.53.144.49 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.60.7.182/FUZZ
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `dcomexec`
- `ldapsearch`
- `smbexec`
- `evil-winrm`

### Key Takeaways

- SeImpersonatePrivilege
- Cron Job
