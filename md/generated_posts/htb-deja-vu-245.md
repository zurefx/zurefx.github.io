---
TitleSEO: "VulnHub — Deja Vu (Hard FreeBSD) | ZureFX"
TitlePost: "VulnHub — Deja Vu (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Deja Vu. AS-REP Roasting and Silver Ticket to achieve hard compromise on FreeBSD."
Keywords: "windows, offsec, forensics, ctf, reversing, medium"
URL: "https://zurefx.github.io/writeups/htb-deja-vu-245.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-deja-vu-245/"
Date: "2024-06-13"
Tags: "Windows, OffSec, Forensics, CTF, Reversing, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-deja-vu-245"
Permalink: "/writeups/htb-deja-vu-245.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Deja Vu** is rated **Hard** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.98.38.78`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.56.58.238 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.18.190/FUZZ
crackmapexec smb 10.38.138.15 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p5986,21,25 10.20.225.219 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **Silver Ticket**.

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

```powershell
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.63.225.203/FUZZ
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

```powershell
evil-winrm -i 10.112.60.191 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `GetUserSPNs`
- `burpsuite`
- `hydra`
- `pwncat`
- `hashcat`
- `nikto`
- `wmiexec`

### Key Takeaways

- AS-REP Roasting
- Silver Ticket
- SeImpersonatePrivilege
