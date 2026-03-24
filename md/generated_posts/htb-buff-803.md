---
TitleSEO: "HackTheBox — Buff (Hard FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Buff (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Buff. ACL Abuse and Writable PATH to achieve hard compromise on FreeBSD."
Keywords: "hackthebox, windows, forensics, medium"
URL: "https://zurefx.github.io/writeups/htb-buff-803.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-buff-803/"
Date: "2024-12-11"
Tags: "HackTheBox, Windows, Forensics, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-buff-803"
Permalink: "/writeups/htb-buff-803.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Buff** is rated **Hard** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.124.233.194`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.74.222.108 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.11.112.82 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p80,993,443 10.24.137.58 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.12.30.253
```

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **ACL Abuse**.

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p1521,8080,27017 10.92.235.86 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.109.128.33/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.222.222/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
crackmapexec smb 10.41.82.120 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
crackmapexec smb 10.102.219.73 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `hashcat`
- `wmiexec`
- `evil-winrm`
- `kerbrute`

### Key Takeaways

- ACL Abuse
- Writable PATH
- AlwaysInstallElevated
- DNS Rebinding
