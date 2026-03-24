---
TitleSEO: "TryHackMe — SwagShop (Medium FreeBSD) | ZureFX"
TitlePost: "TryHackMe — SwagShop (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe SwagShop. LXD Privilege Escalation and SUID Binary to achieve medium compromise on FreeBSD."
Keywords: "insane, pwntilldawn, hard, offsec, active directory, easy"
URL: "https://zurefx.github.io/writeups/htb-swagshop-703.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-swagshop-703/"
Date: "2025-04-08"
Tags: "Insane, PwnTillDawn, Hard, OffSec, Active Directory, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-swagshop-703"
Permalink: "/writeups/htb-swagshop-703.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **SwagShop** is rated **Medium** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.118.186.39`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.19.164.195 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.70.224.47 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.28.231.58/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.29.93.91 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.19.139.22 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.54.180.162 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.84.5.173 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.44.225.142/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **LXD Privilege Escalation**.

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
```

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.49.193.9 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `GetNPUsers`
- `rubeus`
- `impacket`
- `bloodhound`
- `gobuster`

### Key Takeaways

- LXD Privilege Escalation
- SUID Binary
