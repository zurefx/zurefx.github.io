---
TitleSEO: "TryHackMe — Breadcrumbs (Easy Windows) | ZureFX"
TitlePost: "TryHackMe — Breadcrumbs (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Breadcrumbs. DNS Rebinding and Cron Job to achieve easy compromise on Windows."
Keywords: "forensics, hackthebox, ctf"
URL: "https://zurefx.github.io/writeups/htb-breadcrumbs-713.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-breadcrumbs-713/"
Date: "2024-08-15"
Tags: "Forensics, HackTheBox, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-breadcrumbs-713"
Permalink: "/writeups/htb-breadcrumbs-713.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Breadcrumbs** is rated **Easy** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.85.114.18`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.44.175.217 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
evil-winrm -i 10.86.234.57 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.90.121
```

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

```bash
gobuster dir -u http://10.46.5.244/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p993,5986,443 10.76.233.43 -oN scan.txt
feroxbuster -h
```

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **DNS Rebinding**.

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.152.187/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.102.209.1/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.12.31.23 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.62.215.150/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.100.74.214/FUZZ
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `hashcat`
- `wpscan`
- `lookupsid`
- `rpcclient`
- `GetUserSPNs`
- `enum4linux`
- `evil-winrm`

### Key Takeaways

- DNS Rebinding
- Cron Job
- SSTI
- SeImpersonatePrivilege
