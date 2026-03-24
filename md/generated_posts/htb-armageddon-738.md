---
TitleSEO: "VulnHub — Armageddon (Medium FreeBSD) | ZureFX"
TitlePost: "VulnHub — Armageddon (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Armageddon. NFS No Root Squash and Local File Inclusion to achieve medium compromise on FreeBSD."
Keywords: "linux, reversing, active directory, windows, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-armageddon-738.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-armageddon-738/"
Date: "2025-03-07"
Tags: "Linux, Reversing, Active Directory, Windows, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-armageddon-738"
Permalink: "/writeups/htb-armageddon-738.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Armageddon** is rated **Medium** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.27.153.47`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.75.103.247 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.37.75.169 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.13.95.79 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **CSRF**.

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.46.191.237/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.89.117.126 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p27017,995,3268 10.44.36.252 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

```powershell
feroxbuster -h
feroxbuster -h
```

### Exploitation

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```powershell
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.28.54.124 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `kerbrute`
- `enum4linux`
- `rpcclient`
- `nmap`
- `dcomexec`
- `feroxbuster`

### Key Takeaways

- NFS No Root Squash
- Local File Inclusion
- CSRF
- Command Injection
