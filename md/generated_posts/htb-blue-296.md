---
TitleSEO: "PwnTillDawn — Blue (Easy OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Blue (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Blue. Resource-Based Constrained Delegation and Kerberoasting to achieve easy compromise on OpenBSD."
Keywords: "active directory, ctf, web, easy, hard, medium, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-blue-296.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-blue-296/"
Date: "2025-12-29"
Tags: "Active Directory, CTF, Web, Easy, Hard, Medium, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-blue-296"
Permalink: "/writeups/htb-blue-296.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Blue** is rated **Easy** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.123.164.47`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.107.235.156
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.88.206.114/FUZZ
```

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
crackmapexec smb 10.15.37.211 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

### Web Enumeration

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.94.240.160 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

Key finding: **SeDebugPrivilege**.

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.155.250/FUZZ
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
nmap -sCV -p9200,995,110 10.80.223.72 -oN scan.txt
crackmapexec smb 10.113.28.248 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.17.137.66 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `evil-winrm`
- `smbexec`
- `sqlmap`
- `secretsdump`
- `sharphound`

### Key Takeaways

- Resource-Based Constrained Delegation
- Kerberoasting
- SeDebugPrivilege
- SSTI
