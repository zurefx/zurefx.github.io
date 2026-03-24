---
TitleSEO: "OffSec Proving Grounds — Intelligence (Medium Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Intelligence (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Intelligence. Remote Code Execution and Constrained Delegation to achieve medium compromise on Windows."
Keywords: "offsec, hackthebox, forensics, hard"
URL: "https://zurefx.github.io/writeups/htb-intelligence-921.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-intelligence-921/"
Date: "2025-08-27"
Tags: "OffSec, HackTheBox, Forensics, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-intelligence-921"
Permalink: "/writeups/htb-intelligence-921.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Intelligence** is rated **Medium** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.36.101.38`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.108.221.90
impacket-secretsdump administrator:'P@ssw0rd!'@10.76.150.85
```

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

```bash
gobuster dir -u http://10.53.35.111/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.86.75.158/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.81.99.105 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.95.106.75 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.124.53.133
evil-winrm -i 10.116.229.47 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.74.175.116 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

Key finding: **Silver Ticket**.

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

```bash
nmap -sCV -p587,110,22 10.45.40.19 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
nmap -sCV -p3268,8443,636 10.29.64.2 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.74.108
feroxbuster -h
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.129.40.54/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.39.142.76 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.79.202.139
```

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `gobuster`
- `GetUserSPNs`
- `sqlmap`
- `ldapsearch`
- `enum4linux`
- `sharphound`
- `nikto`
- `socat`

### Key Takeaways

- Remote Code Execution
- Constrained Delegation
- Silver Ticket
