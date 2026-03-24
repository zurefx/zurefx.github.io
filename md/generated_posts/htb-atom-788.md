---
TitleSEO: "HackTheBox — Atom (Easy FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Atom (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Atom. Unquoted Service Path and Kerberoasting to achieve easy compromise on FreeBSD."
Keywords: "web, pwntilldawn, medium, forensics, tryhackme, linux, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-atom-788.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-atom-788/"
Date: "2025-06-23"
Tags: "Web, PwnTillDawn, Medium, Forensics, TryHackMe, Linux, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-atom-788"
Permalink: "/writeups/htb-atom-788.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Atom** is rated **Easy** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.102.159.252`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
nmap -sCV -p3306,993,53 10.88.171.62 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.30.71.201 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

### Web Enumeration

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.79.27.222 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.92.185.107 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **DLL Hijacking**.

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.163.171 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.34.198/FUZZ
```

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
nmap -sCV -p587,3389,27017 10.122.158.107 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.65.86.7/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.70.130.127
```

### Exploitation

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `impacket`
- `hydra`
- `smbexec`
- `ffuf`

### Key Takeaways

- Unquoted Service Path
- Kerberoasting
- DLL Hijacking
- Remote File Inclusion
