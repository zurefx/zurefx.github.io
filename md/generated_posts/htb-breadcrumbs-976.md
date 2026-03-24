---
TitleSEO: "TryHackMe — Breadcrumbs (Hard Windows) | ZureFX"
TitlePost: "TryHackMe — Breadcrumbs (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Breadcrumbs. SSTI and Unquoted Service Path to achieve hard compromise on Windows."
Keywords: "pwntilldawn, active directory, insane, tryhackme, linux, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-breadcrumbs-976.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-breadcrumbs-976/"
Date: "2025-12-23"
Tags: "PwnTillDawn, Active Directory, Insane, TryHackMe, Linux, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-breadcrumbs-976"
Permalink: "/writeups/htb-breadcrumbs-976.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Breadcrumbs** is rated **Hard** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.18.153.168`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
crackmapexec smb 10.112.201.55 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.183.84 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.59.94.206
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.110.36 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

```bash
nmap -sCV -p135,445,993 10.11.239.175 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.65.149.27 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Unquoted Service Path**.

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

```bash
gobuster dir -u http://10.71.248.132/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.62.176.48 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.58.174.209/FUZZ
crackmapexec smb 10.22.4.59 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p389,8443,139 10.49.225.151 -oN scan.txt
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.235.11 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.53.170.142 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `pwncat`
- `enum4linux`
- `lookupsid`
- `mimikatz`
- `impacket`

### Key Takeaways

- SSTI
- Unquoted Service Path
