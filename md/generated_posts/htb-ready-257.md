---
TitleSEO: "HackTheBox — Ready (Hard OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Ready (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Ready. XSS and IDOR to achieve hard compromise on OpenBSD."
Keywords: "medium, ctf, web, pwntilldawn, hard"
URL: "https://zurefx.github.io/writeups/htb-ready-257.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ready-257/"
Date: "2025-10-22"
Tags: "Medium, CTF, Web, PwnTillDawn, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-ready-257"
Permalink: "/writeups/htb-ready-257.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ready** is rated **Hard** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.94.102.250`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Web Enumeration

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.64.241
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.128.202.160 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

Key finding: **DCSync**.

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.35.238.218/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.64.253.103/FUZZ
```

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
nmap -sCV -p5432,587,1521 10.49.218.57 -oN scan.txt
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

```powershell
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `metasploit`
- `nmap`
- `dcomexec`
- `ffuf`
- `wmiexec`
- `hashcat`

### Key Takeaways

- XSS
- IDOR
- DCSync
