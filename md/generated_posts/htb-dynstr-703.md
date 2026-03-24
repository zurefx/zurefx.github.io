---
TitleSEO: "HackTheBox — Dynstr (Medium FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Dynstr (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Dynstr. Writable PATH and XSS to achieve medium compromise on FreeBSD."
Keywords: "linux, easy, hard, windows, offsec, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-dynstr-703.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-dynstr-703/"
Date: "2025-01-21"
Tags: "Linux, Easy, Hard, Windows, OffSec, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-dynstr-703"
Permalink: "/writeups/htb-dynstr-703.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Dynstr** is rated **Medium** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.79.6.10`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
nmap -sCV -p110,27017,1521 10.56.184.126 -oN scan.txt
crackmapexec smb 10.80.241.50 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.82.30.106
feroxbuster -h
crackmapexec smb 10.71.203.153 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **Command Injection**.

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.10.22.80 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.97.71.196/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
nmap -sCV -p22,8080,3268 10.39.91.42 -oN scan.txt
crackmapexec smb 10.36.248.151 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.80.241.189/FUZZ
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.54.129.21
```

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `enum4linux`
- `feroxbuster`
- `ldapsearch`
- `lookupsid`

### Key Takeaways

- Writable PATH
- XSS
- Command Injection
- Sudo Misconfiguration
