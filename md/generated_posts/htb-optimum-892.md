---
TitleSEO: "HackTheBox — Optimum (Medium OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Optimum (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Optimum. SQL Injection and SeImpersonatePrivilege to achieve medium compromise on OpenBSD."
Keywords: "medium, tryhackme, pwntilldawn, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-optimum-892.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-optimum-892/"
Date: "2025-07-08"
Tags: "Medium, TryHackMe, PwnTillDawn, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-optimum-892"
Permalink: "/writeups/htb-optimum-892.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Optimum** is rated **Medium** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.105.145.58`.

### Objectives

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
nmap -sCV -p21,139,3306 10.25.208.133 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.51.200.181
nmap -sCV -p5432,25,5432 10.66.13.164 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **SeImpersonatePrivilege**.

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.37.72.220 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
gobuster dir -u http://10.17.18.227/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.115.160.47 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.19.27.209 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.151.90
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `feroxbuster`
- `ldapsearch`
- `secretsdump`
- `lookupsid`
- `john`
- `ffuf`
- `metasploit`

### Key Takeaways

- SQL Injection
- SeImpersonatePrivilege
- Local File Inclusion
