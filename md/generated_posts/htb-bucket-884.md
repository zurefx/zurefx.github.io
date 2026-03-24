---
TitleSEO: "HackTheBox — Bucket (Hard OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Bucket (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Bucket. Path Traversal and SQL Injection to achieve hard compromise on OpenBSD."
Keywords: "pwntilldawn, forensics, ctf"
URL: "https://zurefx.github.io/writeups/htb-bucket-884.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-bucket-884/"
Date: "2025-01-14"
Tags: "PwnTillDawn, Forensics, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-bucket-884"
Permalink: "/writeups/htb-bucket-884.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Bucket** is rated **Hard** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.57.206.73`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.81.210.71/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.87.254.169/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Path Traversal**.

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
nmap -sCV -p5432,8443,587 10.125.82.252 -oN scan.txt
nmap -sCV -p5986,110,3306 10.77.214.43 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.101.236.111 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.100.26.197/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.67.108 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
gobuster dir -u http://10.128.215.62/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.30.167.71/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `dcomexec`
- `rubeus`
- `pwncat`
- `bloodhound`
- `enum4linux`
- `mimikatz`

### Key Takeaways

- Path Traversal
- SQL Injection
- AS-REP Roasting
- SeDebugPrivilege
