---
TitleSEO: "OffSec Proving Grounds — Arctic (Hard Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Arctic (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Arctic. Weak Service Permissions and Resource-Based Constrained Delegation to achieve hard compromise on Linux."
Keywords: "web, tryhackme, insane, forensics"
URL: "https://zurefx.github.io/writeups/htb-arctic-129.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-arctic-129/"
Date: "2025-02-22"
Tags: "Web, TryHackMe, Insane, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-arctic-129"
Permalink: "/writeups/htb-arctic-129.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Arctic** is rated **Hard** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.109.154.224`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
feroxbuster -h
```

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.42.140.199 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Web Enumeration

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **Resource-Based Constrained Delegation**.

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
feroxbuster -h
nmap -sCV -p139,5985,135 10.80.156.161 -oN scan.txt
gobuster dir -u http://10.111.177.120/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.60.14.196/FUZZ
```

### Exploitation

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

```bash
nmap -sCV -p22,23,21 10.116.160.232 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.79.206.217
impacket-secretsdump administrator:'P@ssw0rd!'@10.71.176.206
evil-winrm -i 10.86.173.210 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `GetNPUsers`
- `gobuster`
- `socat`
- `wpscan`
- `rubeus`

### Key Takeaways

- Weak Service Permissions
- Resource-Based Constrained Delegation
