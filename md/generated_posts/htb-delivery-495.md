---
TitleSEO: "TryHackMe — Delivery (Hard Linux) | ZureFX"
TitlePost: "TryHackMe — Delivery (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Delivery. Remote File Inclusion and XXE to achieve hard compromise on Linux."
Keywords: "windows, web, tryhackme, linux, insane, hard, forensics"
URL: "https://zurefx.github.io/writeups/htb-delivery-495.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-delivery-495/"
Date: "2026-03-09"
Tags: "Windows, Web, TryHackMe, Linux, Insane, Hard, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-delivery-495"
Permalink: "/writeups/htb-delivery-495.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Delivery** is rated **Hard** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.50.246.53`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.78.156.170/FUZZ
feroxbuster -h
```

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
crackmapexec smb 10.15.248.164 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

### Web Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
crackmapexec smb 10.76.199.229 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **Remote File Inclusion**.

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
evil-winrm -i 10.128.3.142 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.101.93.33/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.40.241.240 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.105.88.152 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

```bash
nmap -sCV -p5986,143,80 10.68.130.9 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.37.114.144 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p5986,5432,636 10.75.49.93 -oN scan.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `wpscan`
- `enum4linux`
- `nmap`
- `hydra`
- `smbexec`
- `lookupsid`
- `ffuf`

### Key Takeaways

- Remote File Inclusion
- XXE
- LAPS Abuse
- SQL Injection
