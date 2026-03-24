---
TitleSEO: "VulnHub — Buff (Medium OpenBSD) | ZureFX"
TitlePost: "VulnHub — Buff (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Buff. SSTI and GPP Password to achieve medium compromise on OpenBSD."
Keywords: "easy, active directory, insane, offsec, pwntilldawn, windows"
URL: "https://zurefx.github.io/writeups/htb-buff-959.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-buff-959/"
Date: "2024-07-25"
Tags: "Easy, Active Directory, Insane, OffSec, PwnTillDawn, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-buff-959"
Permalink: "/writeups/htb-buff-959.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Buff** is rated **Medium** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.89.12.102`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.129.52.38
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.115.217.208/FUZZ
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
gobuster dir -u http://10.100.24.12/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.184.83 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.21.85.76/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **SUID Binary**.

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.124.15.134
crackmapexec smb 10.46.16.114 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

```powershell
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.41.112.36
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
gobuster dir -u http://10.10.33.21/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.37.122.237/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.70.105.59
```

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `kerbrute`
- `netcat`
- `john`
- `impacket`

### Key Takeaways

- SSTI
- GPP Password
- SUID Binary
- Constrained Delegation
