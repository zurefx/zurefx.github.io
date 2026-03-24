---
TitleSEO: "VulnHub — Nibbles (Medium OpenBSD) | ZureFX"
TitlePost: "VulnHub — Nibbles (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Nibbles. Docker Escape and Insecure Deserialization to achieve medium compromise on OpenBSD."
Keywords: "insane, medium, active directory, easy"
URL: "https://zurefx.github.io/writeups/htb-nibbles-363.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-nibbles-363/"
Date: "2024-10-30"
Tags: "Insane, Medium, Active Directory, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-nibbles-363"
Permalink: "/writeups/htb-nibbles-363.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Nibbles** is rated **Medium** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.37.73.68`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.117.223.206 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
nmap -sCV -p389,80,5985 10.75.164.21 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
```

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Broken Access Control**.

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p636,5432,3389 10.79.76.199 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

```powershell
crackmapexec smb 10.63.130.131 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
crackmapexec smb 10.29.105.156 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p21,135,587 10.114.254.191 -oN scan.txt
evil-winrm -i 10.42.76.186 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `impacket`
- `msfvenom`
- `smbclient`
- `enum4linux`
- `mimikatz`
- `psexec`
- `crackmapexec`

### Key Takeaways

- Docker Escape
- Insecure Deserialization
- ACL Abuse
- Broken Access Control
