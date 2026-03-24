---
TitleSEO: "PwnTillDawn — Breadcrumbs (Medium FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Breadcrumbs (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Breadcrumbs. Docker Escape and NTLM Relay to achieve medium compromise on FreeBSD."
Keywords: "active directory, reversing, insane, pwntilldawn, hackthebox, easy, forensics"
URL: "https://zurefx.github.io/writeups/htb-breadcrumbs-795.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-breadcrumbs-795/"
Date: "2024-08-15"
Tags: "Active Directory, Reversing, Insane, PwnTillDawn, HackTheBox, Easy, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-breadcrumbs-795"
Permalink: "/writeups/htb-breadcrumbs-795.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Breadcrumbs** is rated **Medium** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.114.240.188`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.25.221.77
```

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.100.125.95
```

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.32.108.156 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p636,464,464 10.103.47.235 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **NTLM Relay**.

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
feroxbuster -h
evil-winrm -i 10.23.190.241 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.52.127.192
evil-winrm -i 10.77.119.154 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.83.140.12 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `GetUserSPNs`
- `ldapsearch`
- `lookupsid`
- `hashcat`
- `atexec`
- `crackmapexec`

### Key Takeaways

- Docker Escape
- NTLM Relay
- SeImpersonatePrivilege
- SSTI
