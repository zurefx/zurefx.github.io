---
TitleSEO: "TryHackMe — Tentacle (Insane FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Tentacle (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Tentacle. Local File Inclusion and SQL Injection to achieve insane compromise on FreeBSD."
Keywords: "linux, ctf, web, hackthebox, medium"
URL: "https://zurefx.github.io/writeups/htb-tentacle-703.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tentacle-703/"
Date: "2025-11-14"
Tags: "Linux, CTF, Web, HackTheBox, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-tentacle-703"
Permalink: "/writeups/htb-tentacle-703.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tentacle** is rated **Insane** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.127.101.163`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p143,80,1521 10.22.197.25 -oN scan.txt
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

### Web Enumeration

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.44.103.14 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
gobuster dir -u http://10.93.222.67/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **ACL Abuse**.

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
crackmapexec smb 10.36.137.175 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
feroxbuster -h
gobuster dir -u http://10.21.23.114/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.34.2.171 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.90.194.100/FUZZ
gobuster dir -u http://10.90.87.57/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.121.66.144/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `lookupsid`
- `kerbrute`
- `feroxbuster`
- `crackmapexec`
- `metasploit`
- `enum4linux`

### Key Takeaways

- Local File Inclusion
- SQL Injection
- ACL Abuse
- NTLM Relay
