---
TitleSEO: "HackTheBox — Ice (Hard OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Ice (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Ice. Path Traversal and LXD Privilege Escalation to achieve hard compromise on OpenBSD."
Keywords: "active directory, insane, offsec, linux"
URL: "https://zurefx.github.io/writeups/htb-ice-469.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ice-469/"
Date: "2024-10-26"
Tags: "Active Directory, Insane, OffSec, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-ice-469"
Permalink: "/writeups/htb-ice-469.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ice** is rated **Hard** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.94.128.133`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.62.78.88/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.52.27.158
```

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.23.168.29 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.86.104.117 -u administrator -p 'P@ssw0rd!' --shares
```

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

Key finding: **Path Traversal**.

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

### Initial Access

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.104.49.86/FUZZ
crackmapexec smb 10.114.177.14 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.116.39.107 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.62.155/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
crackmapexec smb 10.50.218.71 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.39.127.254
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.43.231.142/FUZZ
evil-winrm -i 10.129.163.91 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.72.7.203/FUZZ
```

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `dcomexec`
- `evil-winrm`
- `ldapsearch`
- `rubeus`
- `pwncat`

### Key Takeaways

- Path Traversal
- LXD Privilege Escalation
