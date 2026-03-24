---
TitleSEO: "TryHackMe — Ophiuchi (Hard OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Ophiuchi (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Ophiuchi. AlwaysInstallElevated and DLL Hijacking to achieve hard compromise on OpenBSD."
Keywords: "linux, reversing, hackthebox, ctf, forensics, insane, medium"
URL: "https://zurefx.github.io/writeups/htb-ophiuchi-781.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ophiuchi-781/"
Date: "2025-05-30"
Tags: "Linux, Reversing, HackTheBox, CTF, Forensics, Insane, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-ophiuchi-781"
Permalink: "/writeups/htb-ophiuchi-781.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Ophiuchi** is rated **Hard** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.31.56.245`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.49.89.137
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.43.154.153 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.15.232.45
```

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p993,22,80 10.105.212.180 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.94.83.133/FUZZ
crackmapexec smb 10.29.229.68 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Sudo Misconfiguration**.

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

```powershell
evil-winrm -i 10.23.234.115 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3389,110,1521 10.30.5.180 -oN scan.txt
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `impacket`
- `nmap`
- `hashcat`
- `nikto`
- `GetUserSPNs`

### Key Takeaways

- AlwaysInstallElevated
- DLL Hijacking
- Sudo Misconfiguration
- ACL Abuse
