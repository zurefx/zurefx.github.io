---
TitleSEO: "TryHackMe — Vulnnet (Insane FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Vulnnet (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Vulnnet. AS-REP Roasting and SeDebugPrivilege to achieve insane compromise on FreeBSD."
Keywords: "offsec, hard, medium, linux, tryhackme, pwntilldawn, forensics"
URL: "https://zurefx.github.io/writeups/htb-vulnnet-471.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-vulnnet-471/"
Date: "2025-08-19"
Tags: "OffSec, Hard, Medium, Linux, TryHackMe, PwnTillDawn, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-vulnnet-471"
Permalink: "/writeups/htb-vulnnet-471.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Vulnnet** is rated **Insane** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.104.131.183`.

### Objectives

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.46.80.194 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.108.36.200 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.65.70.43/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
nmap -sCV -p80,135,8443 10.70.90.51 -oN scan.txt
gobuster dir -u http://10.77.138.15/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p464,135,3306 10.57.186.23 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p22,135,1433 10.59.55.245 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.34.87 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **SUID Binary**.

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
feroxbuster -h
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

```powershell
nmap -sCV -p389,464,22 10.99.168.26 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p80,1433,110 10.111.7.2 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.104.218.231 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.94.94.250/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `msfvenom`
- `ldapsearch`
- `sqlmap`
- `crackmapexec`

### Key Takeaways

- AS-REP Roasting
- SeDebugPrivilege
- SUID Binary
