---
TitleSEO: "VulnHub — Breadcrumbs (Insane OpenBSD) | ZureFX"
TitlePost: "VulnHub — Breadcrumbs (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Breadcrumbs. Pass the Hash and Unquoted Service Path to achieve insane compromise on OpenBSD."
Keywords: "offsec, windows, hard"
URL: "https://zurefx.github.io/writeups/htb-breadcrumbs-171.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-breadcrumbs-171/"
Date: "2025-01-06"
Tags: "OffSec, Windows, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-breadcrumbs-171"
Permalink: "/writeups/htb-breadcrumbs-171.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Breadcrumbs** is rated **Insane** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.63.53.13`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.119.23.21 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.214.181 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p443,993,993 10.120.211.9 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
nmap -sCV -p5432,5432,3389 10.75.46.236 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.97.228.109/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Unquoted Service Path**.

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p5985,21,445 10.95.234.199 -oN scan.txt
evil-winrm -i 10.65.204.198 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.125.246.112
evil-winrm -i 10.15.130.4 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `GetUserSPNs`
- `lookupsid`
- `hydra`
- `bloodhound`
- `netcat`
- `chisel`
- `atexec`

### Key Takeaways

- Pass the Hash
- Unquoted Service Path
