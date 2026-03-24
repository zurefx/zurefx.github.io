---
TitleSEO: "VulnHub — Sunday (Hard FreeBSD) | ZureFX"
TitlePost: "VulnHub — Sunday (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Sunday. CORS Misconfiguration and SQL Injection to achieve hard compromise on FreeBSD."
Keywords: "pwntilldawn, hackthebox, medium"
URL: "https://zurefx.github.io/writeups/htb-sunday-405.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sunday-405/"
Date: "2025-12-28"
Tags: "PwnTillDawn, HackTheBox, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-sunday-405"
Permalink: "/writeups/htb-sunday-405.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sunday** is rated **Hard** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.126.221.140`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.93.158.137 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
nmap -sCV -p1433,110,995 10.67.228.214 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.38.252.141
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

Key finding: **SQL Injection**.

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
evil-winrm -i 10.34.35.107 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.10.103.145 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.66.184.250 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.74.51.55 -u administrator -p 'P@ssw0rd!' --shares
```

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.74.152 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.120.143.234 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.96.55.2 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

```powershell
crackmapexec smb 10.118.234.129 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.14.17.128 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `sqlmap`
- `ffuf`
- `burpsuite`
- `metasploit`
- `rpcclient`
- `lookupsid`
- `enum4linux`
- `rubeus`

### Key Takeaways

- CORS Misconfiguration
- SQL Injection
- Command Injection
