---
TitleSEO: "OffSec Proving Grounds — Passage (Hard Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Passage (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Passage. Unconstrained Delegation and CSRF to achieve hard compromise on Windows."
Keywords: "easy, tryhackme, active directory, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-passage-869.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-passage-869/"
Date: "2025-09-05"
Tags: "Easy, TryHackMe, Active Directory, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-passage-869"
Permalink: "/writeups/htb-passage-869.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Passage** is rated **Hard** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.94.123.150`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.78.56.228 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.70.73.176 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.85.87.94
```

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.19.141.3 -u administrator -p 'P@ssw0rd!'
```

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.44.78.80/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **Unconstrained Delegation**.

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.46.34.209/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
crackmapexec smb 10.46.156.34 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

```powershell
evil-winrm -i 10.112.88.234 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.97.168.220 -u administrator -p 'P@ssw0rd!' --shares
```

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `wpscan`
- `enum4linux`
- `john`
- `smbclient`
- `msfvenom`

### Key Takeaways

- Unconstrained Delegation
- CSRF
