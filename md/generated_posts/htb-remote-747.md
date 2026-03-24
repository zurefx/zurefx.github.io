---
TitleSEO: "HackTheBox — Remote (Medium Windows) | ZureFX"
TitlePost: "HackTheBox — Remote (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Remote. ACL Abuse and SSTI to achieve medium compromise on Windows."
Keywords: "hackthebox, ctf, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-remote-747.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-remote-747/"
Date: "2025-01-07"
Tags: "HackTheBox, CTF, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-remote-747"
Permalink: "/writeups/htb-remote-747.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Remote** is rated **Medium** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.46.94.21`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.66.44.245/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.89.40.165
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.35.49.210/FUZZ
feroxbuster -h
gobuster dir -u http://10.40.234.71/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.39.167.126
crackmapexec smb 10.39.14.92 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **ACL Abuse**.

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
evil-winrm -i 10.66.234.32 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

```powershell
evil-winrm -i 10.19.180.123 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `dcomexec`
- `smbexec`
- `nmap`
- `evil-winrm`
- `socat`
- `mimikatz`
- `rubeus`
- `metasploit`

### Key Takeaways

- ACL Abuse
- SSTI
