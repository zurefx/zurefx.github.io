---
TitleSEO: "PwnTillDawn — Deja Vu (Insane FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Deja Vu (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Deja Vu. XXE and DLL Hijacking to achieve insane compromise on FreeBSD."
Keywords: "forensics, offsec, easy"
URL: "https://zurefx.github.io/writeups/htb-deja-vu-949.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-deja-vu-949/"
Date: "2026-01-03"
Tags: "Forensics, OffSec, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-deja-vu-949"
Permalink: "/writeups/htb-deja-vu-949.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Deja Vu** is rated **Insane** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.103.78.84`.

### Objectives

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.108.86.31 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.223.224 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.74.5.165 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **XXE**.

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.83.123.117 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p464,110,139 10.81.135.137 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

```powershell
feroxbuster -h
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
crackmapexec smb 10.15.86.67 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.46.99.55 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p3306,5985,993 10.86.207.58 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `gobuster`
- `GetUserSPNs`
- `burpsuite`
- `smbexec`
- `nikto`
- `metasploit`

### Key Takeaways

- XXE
- DLL Hijacking
