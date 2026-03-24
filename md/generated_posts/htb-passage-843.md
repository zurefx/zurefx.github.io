---
TitleSEO: "VulnHub — Passage (Medium FreeBSD) | ZureFX"
TitlePost: "VulnHub — Passage (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Passage. Sudo Misconfiguration and SeDebugPrivilege to achieve medium compromise on FreeBSD."
Keywords: "windows, hard, forensics, web"
URL: "https://zurefx.github.io/writeups/htb-passage-843.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-passage-843/"
Date: "2024-10-04"
Tags: "Windows, Hard, Forensics, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-passage-843"
Permalink: "/writeups/htb-passage-843.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Passage** is rated **Medium** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.123.49.31`.

### Objectives

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.57.172
evil-winrm -i 10.90.241.162 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
nmap -sCV -p445,3268,5432 10.103.110.114 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

### Web Enumeration

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.68.193.56/FUZZ
```

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **SeDebugPrivilege**.

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
crackmapexec smb 10.103.156.7 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.245.212/FUZZ
nmap -sCV -p5432,110,143 10.64.246.78 -oN scan.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.62.165.123 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
nmap -sCV -p587,3306,5985 10.129.203.5 -oN scan.txt
nmap -sCV -p587,5432,22 10.95.61.251 -oN scan.txt
crackmapexec smb 10.58.143.80 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `bloodhound`
- `chisel`
- `GetNPUsers`
- `gobuster`
- `rpcclient`

### Key Takeaways

- Sudo Misconfiguration
- SeDebugPrivilege
- Broken Access Control
- Local File Inclusion
