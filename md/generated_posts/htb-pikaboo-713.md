---
TitleSEO: "OffSec Proving Grounds — Pikaboo (Medium OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Pikaboo (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Pikaboo. Pass the Hash and DNS Rebinding to achieve medium compromise on OpenBSD."
Keywords: "reversing, linux, hackthebox, tryhackme, offsec"
URL: "https://zurefx.github.io/writeups/htb-pikaboo-713.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pikaboo-713/"
Date: "2026-02-01"
Tags: "Reversing, Linux, HackTheBox, TryHackMe, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-pikaboo-713"
Permalink: "/writeups/htb-pikaboo-713.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Pikaboo** is rated **Medium** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.73.128.129`.

### Objectives

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.59.120.48/FUZZ
feroxbuster -h
evil-winrm -i 10.124.203.73 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p3306,143,5986 10.40.50.29 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.184.27 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p5432,53,21 10.27.186.61 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.106.103.108/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.85.93.133 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Pass the Hash**.

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.21.249.195 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.76.81.229/FUZZ
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
nmap -sCV -p636,389,443 10.60.207.198 -oN scan.txt
nmap -sCV -p21,3268,445 10.119.228.8 -oN scan.txt
evil-winrm -i 10.119.37.81 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.113.114.233 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `GetUserSPNs`
- `rubeus`
- `sharphound`
- `ldapsearch`
- `hydra`
- `feroxbuster`

### Key Takeaways

- Pass the Hash
- DNS Rebinding
- Docker Escape
