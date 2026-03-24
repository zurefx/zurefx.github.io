---
TitleSEO: "OffSec Proving Grounds — Dynstr (Medium FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Dynstr (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Dynstr. GPP Password and Resource-Based Constrained Delegation to achieve medium compromise on FreeBSD."
Keywords: "ctf, tryhackme, reversing, web, forensics, offsec, easy"
URL: "https://zurefx.github.io/writeups/htb-dynstr-259.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-dynstr-259/"
Date: "2024-09-06"
Tags: "CTF, TryHackMe, Reversing, Web, Forensics, OffSec, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-dynstr-259"
Permalink: "/writeups/htb-dynstr-259.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Dynstr** is rated **Medium** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.17.221.222`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
nmap -sCV -p9200,389,143 10.59.221.133 -oN scan.txt
```

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

### Web Enumeration

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.114.145.10 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.68.95.199/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Broken Access Control**.

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.37.9.83/FUZZ
evil-winrm -i 10.108.188.87 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.16.43.235/FUZZ
```

### Exploitation

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.122.248.73/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.63.210.168
evil-winrm -i 10.92.186.96 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `enum4linux`
- `netcat`
- `lookupsid`
- `chisel`
- `ligolo-ng`
- `atexec`

### Key Takeaways

- GPP Password
- Resource-Based Constrained Delegation
- Broken Access Control
