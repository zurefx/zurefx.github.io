---
TitleSEO: "TryHackMe — Nineveh (Medium OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Nineveh (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Nineveh. Docker Escape and SeImpersonatePrivilege to achieve medium compromise on OpenBSD."
Keywords: "easy, forensics, insane, medium"
URL: "https://zurefx.github.io/writeups/htb-nineveh-198.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-nineveh-198/"
Date: "2025-03-30"
Tags: "Easy, Forensics, Insane, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-nineveh-198"
Permalink: "/writeups/htb-nineveh-198.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Nineveh** is rated **Medium** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.98.183.67`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.10.129.43 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.32.4.126 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.27.239.61 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **DNS Rebinding**.

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

```bash
nmap -sCV -p8080,995,143 10.70.50.171 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

```powershell
crackmapexec smb 10.93.223.160 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.66.168.245 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.65.214 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `sqlmap`
- `enum4linux`
- `crackmapexec`
- `hydra`
- `dcomexec`
- `bloodhound`
- `smbclient`

### Key Takeaways

- Docker Escape
- SeImpersonatePrivilege
- DNS Rebinding
