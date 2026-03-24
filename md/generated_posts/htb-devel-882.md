---
TitleSEO: "TryHackMe — Devel (Easy Linux) | ZureFX"
TitlePost: "TryHackMe — Devel (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Devel. Broken Access Control and Sudo Misconfiguration to achieve easy compromise on Linux."
Keywords: "pwntilldawn, hard, hackthebox, medium, tryhackme, windows, linux"
URL: "https://zurefx.github.io/writeups/htb-devel-882.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-devel-882/"
Date: "2026-01-06"
Tags: "PwnTillDawn, Hard, HackTheBox, Medium, TryHackMe, Windows, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-devel-882"
Permalink: "/writeups/htb-devel-882.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Devel** is rated **Easy** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.120.221.243`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.46.108.53/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.121.34.207 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.54.215.159 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Broken Access Control**.

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3268,587,22 10.95.207.201 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.54.79.75/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

```bash
evil-winrm -i 10.26.184.31 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.45.79.203 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.11.96.247 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `feroxbuster`
- `metasploit`
- `dcomexec`
- `burpsuite`
- `netcat`
- `ldapsearch`

### Key Takeaways

- Broken Access Control
- Sudo Misconfiguration
- SSRF
- SQL Injection
