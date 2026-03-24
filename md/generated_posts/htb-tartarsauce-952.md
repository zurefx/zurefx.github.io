---
TitleSEO: "OffSec Proving Grounds — Tartarsauce (Hard Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Tartarsauce (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Tartarsauce. IDOR and Open Redirect to achieve hard compromise on Windows."
Keywords: "linux, insane, forensics, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-tartarsauce-952.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tartarsauce-952/"
Date: "2025-08-30"
Tags: "Linux, Insane, Forensics, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-tartarsauce-952"
Permalink: "/writeups/htb-tartarsauce-952.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tartarsauce** is rated **Hard** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.116.95.9`.

### Objectives

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.35.73.61/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
evil-winrm -i 10.121.109.35 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

Key finding: **Open Redirect**.

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```bash
gobuster dir -u http://10.15.123.91/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

```powershell
nmap -sCV -p389,139,8443 10.103.117.75 -oN scan.txt
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
gobuster dir -u http://10.42.44.117/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `crackmapexec`
- `atexec`
- `burpsuite`
- `john`
- `ligolo-ng`

### Key Takeaways

- IDOR
- Open Redirect
- NTLM Relay
