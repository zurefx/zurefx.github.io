---
TitleSEO: "HackTheBox — Shocker (Medium Linux) | ZureFX"
TitlePost: "HackTheBox — Shocker (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Shocker. Unconstrained Delegation and NFS No Root Squash to achieve medium compromise on Linux."
Keywords: "hard, easy, offsec, medium, hackthebox, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-shocker-384.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-shocker-384/"
Date: "2024-09-03"
Tags: "Hard, Easy, OffSec, Medium, HackTheBox, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-shocker-384"
Permalink: "/writeups/htb-shocker-384.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Shocker** is rated **Medium** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.10.190.79`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.99.142.167
nmap -sCV -p1433,3389,1521 10.54.93.116 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.10.165.35
```

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **NFS No Root Squash**.

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.75.114.188/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p464,587,587 10.65.194.157 -oN scan.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.17.14.37/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.89.137.227 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p8888,5432,23 10.63.118.171 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `ffuf`
- `impacket`
- `sqlmap`
- `john`
- `metasploit`

### Key Takeaways

- Unconstrained Delegation
- NFS No Root Squash
- Golden Ticket
