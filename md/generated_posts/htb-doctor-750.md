---
TitleSEO: "HackTheBox — Doctor (Hard Windows) | ZureFX"
TitlePost: "HackTheBox — Doctor (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Doctor. NTLM Relay and Command Injection to achieve hard compromise on Windows."
Keywords: "ctf, windows, medium"
URL: "https://zurefx.github.io/writeups/htb-doctor-750.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-doctor-750/"
Date: "2024-07-10"
Tags: "CTF, Windows, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-doctor-750"
Permalink: "/writeups/htb-doctor-750.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Doctor** is rated **Hard** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.10.159.156`.

### Objectives

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.13.8.49 -u administrator -p 'P@ssw0rd!' --shares
```

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.238.39
```

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.125.23.172
```

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Command Injection**.

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.122.186.67
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.36.115.216/FUZZ
```

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.93.141.46/FUZZ
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
evil-winrm -i 10.81.34.114 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p8443,3268,5432 10.42.201.239 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `msfvenom`
- `GetNPUsers`
- `ffuf`
- `hashcat`
- `nmap`
- `sharphound`

### Key Takeaways

- NTLM Relay
- Command Injection
