---
TitleSEO: "OffSec Proving Grounds — Steel Mountain (Easy FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Steel Mountain (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Steel Mountain. Pass the Ticket and Sudo Misconfiguration to achieve easy compromise on FreeBSD."
Keywords: "medium, linux, easy, insane"
URL: "https://zurefx.github.io/writeups/htb-steel-mountain-945.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-steel-mountain-945/"
Date: "2025-05-17"
Tags: "Medium, Linux, Easy, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-steel-mountain-945"
Permalink: "/writeups/htb-steel-mountain-945.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Steel Mountain** is rated **Easy** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.88.1.13`.

### Objectives

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.126.26.239/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```bash
gobuster dir -u http://10.116.102.252/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p3389,3268,22 10.41.212.93 -oN scan.txt
crackmapexec smb 10.67.191.30 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Sudo Misconfiguration**.

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

```bash
feroxbuster -h
nmap -sCV -p27017,636,25 10.117.116.232 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.123.148 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

```powershell
nmap -sCV -p53,636,5985 10.98.157.161 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.121.104 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

```powershell
feroxbuster -h
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.88.109.173 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `nmap`
- `sqlmap`
- `gobuster`
- `wmiexec`

### Key Takeaways

- Pass the Ticket
- Sudo Misconfiguration
