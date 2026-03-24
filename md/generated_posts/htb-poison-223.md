---
TitleSEO: "TryHackMe — Poison (Medium OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Poison (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Poison. IDOR and AS-REP Roasting to achieve medium compromise on OpenBSD."
Keywords: "tryhackme, medium, reversing, insane"
URL: "https://zurefx.github.io/writeups/htb-poison-223.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-poison-223/"
Date: "2026-02-08"
Tags: "TryHackMe, Medium, Reversing, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-poison-223"
Permalink: "/writeups/htb-poison-223.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Poison** is rated **Medium** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.122.64.237`.

### Objectives

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.24.111
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.110.242.135/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p53,3306,8888 10.82.82.251 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.101.1.174 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p5985,3389,53 10.21.155.185 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **IDOR**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

```bash
nmap -sCV -p3389,5432,5432 10.12.74.158 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
nmap -sCV -p389,3306,9200 10.48.156.83 -oN scan.txt
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.72.247.186/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `nikto`
- `secretsdump`
- `feroxbuster`
- `dcomexec`
- `evil-winrm`

### Key Takeaways

- IDOR
- AS-REP Roasting
