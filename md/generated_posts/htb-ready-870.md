---
TitleSEO: "OffSec Proving Grounds — Ready (Insane Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Ready (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Ready. SSRF and CSRF to achieve insane compromise on Linux."
Keywords: "active directory, medium, tryhackme, web"
URL: "https://zurefx.github.io/writeups/htb-ready-870.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ready-870/"
Date: "2024-06-14"
Tags: "Active Directory, Medium, TryHackMe, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-ready-870"
Permalink: "/writeups/htb-ready-870.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Ready** is rated **Insane** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.86.198.143`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.226.145/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.95.228.101 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Web Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.15.142.126 -u administrator -p 'P@ssw0rd!'
```

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

Key finding: **SSRF**.

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

```bash
feroxbuster -h
feroxbuster -h
crackmapexec smb 10.76.163.75 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

```bash
evil-winrm -i 10.21.134.113 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `psexec`
- `burpsuite`
- `ffuf`
- `kerbrute`
- `smbexec`

### Key Takeaways

- SSRF
- CSRF
