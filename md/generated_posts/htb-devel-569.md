---
TitleSEO: "OffSec Proving Grounds — Devel (Hard FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Devel (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Devel. Sudo Misconfiguration and AS-REP Roasting to achieve hard compromise on FreeBSD."
Keywords: "easy, active directory, tryhackme, hard"
URL: "https://zurefx.github.io/writeups/htb-devel-569.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-devel-569/"
Date: "2026-01-23"
Tags: "Easy, Active Directory, TryHackMe, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-devel-569"
Permalink: "/writeups/htb-devel-569.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Devel** is rated **Hard** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.118.175.35`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.68.199.223
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.61.21.71/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

Key finding: **AS-REP Roasting**.

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

### Initial Access

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
gobuster dir -u http://10.106.135.164/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.38.246.64 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.125.74.200
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.17.155 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `wmiexec`
- `chisel`
- `ligolo-ng`
- `john`
- `mimikatz`
- `impacket`
- `gobuster`

### Key Takeaways

- Sudo Misconfiguration
- AS-REP Roasting
