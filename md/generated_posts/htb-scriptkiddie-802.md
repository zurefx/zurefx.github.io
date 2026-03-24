---
TitleSEO: "VulnHub — ScriptKiddie (Easy FreeBSD) | ZureFX"
TitlePost: "VulnHub — ScriptKiddie (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub ScriptKiddie. SQL Injection and Unconstrained Delegation to achieve easy compromise on FreeBSD."
Keywords: "ctf, active directory, reversing, medium, windows"
URL: "https://zurefx.github.io/writeups/htb-scriptkiddie-802.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-scriptkiddie-802/"
Date: "2025-07-29"
Tags: "CTF, Active Directory, Reversing, Medium, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-scriptkiddie-802"
Permalink: "/writeups/htb-scriptkiddie-802.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **ScriptKiddie** is rated **Easy** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.16.168.108`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
nmap -sCV -p23,5985,587 10.67.197.172 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.95.176.35/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.84.78.68 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

Key finding: **SQL Injection**.

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

```powershell
crackmapexec smb 10.86.72.26 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.106.212.227 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `netcat`
- `GetUserSPNs`
- `socat`
- `rpcclient`
- `wmiexec`
- `evil-winrm`
- `hydra`

### Key Takeaways

- SQL Injection
- Unconstrained Delegation
