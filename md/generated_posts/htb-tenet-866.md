---
TitleSEO: "VulnHub — Tenet (Hard Windows) | ZureFX"
TitlePost: "VulnHub — Tenet (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Tenet. SSTI and CORS Misconfiguration to achieve hard compromise on Windows."
Keywords: "linux, reversing, ctf, tryhackme, hard"
URL: "https://zurefx.github.io/writeups/htb-tenet-866.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tenet-866/"
Date: "2026-02-23"
Tags: "Linux, Reversing, CTF, TryHackMe, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-tenet-866"
Permalink: "/writeups/htb-tenet-866.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tenet** is rated **Hard** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.22.55.7`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.119.8.128/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

### Service Enumeration

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.104.47.222/FUZZ
crackmapexec smb 10.58.151.31 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
evil-winrm -i 10.79.54.238 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **SSTI**.

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
crackmapexec smb 10.117.92.172 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

```powershell
evil-winrm -i 10.64.121.192 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `smbexec`
- `ffuf`
- `wmiexec`
- `chisel`
- `lookupsid`
- `msfvenom`
- `sqlmap`
- `feroxbuster`

### Key Takeaways

- SSTI
- CORS Misconfiguration
- Pass the Ticket
