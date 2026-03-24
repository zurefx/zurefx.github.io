---
TitleSEO: "PwnTillDawn — Dynstr (Medium OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Dynstr (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Dynstr. LXD Privilege Escalation and AS-REP Roasting to achieve medium compromise on OpenBSD."
Keywords: "forensics, tryhackme, reversing, easy, active directory, ctf"
URL: "https://zurefx.github.io/writeups/htb-dynstr-372.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-dynstr-372/"
Date: "2025-07-09"
Tags: "Forensics, TryHackMe, Reversing, Easy, Active Directory, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-dynstr-372"
Permalink: "/writeups/htb-dynstr-372.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Dynstr** is rated **Medium** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.86.232.1`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p389,1433,8443 10.91.138.182 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.25.162.132 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.19.206.151/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.72.91.193 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.90.113.1/FUZZ
```

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

Key finding: **AS-REP Roasting**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
crackmapexec smb 10.77.86.253 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.92.17.102 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.84.66.136/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.99.147.12/FUZZ
evil-winrm -i 10.33.88.56 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
evil-winrm -i 10.12.117.3 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

```powershell
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `GetUserSPNs`
- `ffuf`
- `smbexec`
- `bloodhound`

### Key Takeaways

- LXD Privilege Escalation
- AS-REP Roasting
