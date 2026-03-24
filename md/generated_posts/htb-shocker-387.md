---
TitleSEO: "VulnHub — Shocker (Easy OpenBSD) | ZureFX"
TitlePost: "VulnHub — Shocker (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Shocker. Golden Ticket and XXE to achieve easy compromise on OpenBSD."
Keywords: "hackthebox, active directory, linux, medium"
URL: "https://zurefx.github.io/writeups/htb-shocker-387.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-shocker-387/"
Date: "2025-08-05"
Tags: "HackTheBox, Active Directory, Linux, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-shocker-387"
Permalink: "/writeups/htb-shocker-387.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Shocker** is rated **Easy** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.90.125.34`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.63.171.137
```

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.104.5.186/FUZZ
crackmapexec smb 10.57.125.235 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p143,80,135 10.117.111.245 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **Golden Ticket**.

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
crackmapexec smb 10.63.194.7 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```powershell
feroxbuster -h
nmap -sCV -p995,8080,3306 10.112.121.243 -oN scan.txt
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.58.63.2 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `gobuster`
- `smbclient`
- `secretsdump`
- `pwncat`
- `socat`
- `GetNPUsers`

### Key Takeaways

- Golden Ticket
- XXE
- XSS
- Constrained Delegation
