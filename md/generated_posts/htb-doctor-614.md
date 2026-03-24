---
TitleSEO: "HackTheBox — Doctor (Insane OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Doctor (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Doctor. Golden Ticket and CSRF to achieve insane compromise on OpenBSD."
Keywords: "reversing, web, windows"
URL: "https://zurefx.github.io/writeups/htb-doctor-614.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-doctor-614/"
Date: "2026-03-19"
Tags: "Reversing, Web, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-doctor-614"
Permalink: "/writeups/htb-doctor-614.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Doctor** is rated **Insane** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.51.223.78`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.39.200.186 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
crackmapexec smb 10.80.21.183 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.69.37.79 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

### Web Enumeration

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.17.53.23 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Golden Ticket**.

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.88.179.96/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.82.169.141 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.109.88.217 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
evil-winrm -i 10.26.218.100 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `wmiexec`
- `chisel`
- `smbexec`
- `socat`
- `rpcclient`
- `burpsuite`
- `mimikatz`
- `nikto`

### Key Takeaways

- Golden Ticket
- CSRF
