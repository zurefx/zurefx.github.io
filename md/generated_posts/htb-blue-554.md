---
TitleSEO: "TryHackMe — Blue (Medium OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Blue (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Blue. IDOR and CSRF to achieve medium compromise on OpenBSD."
Keywords: "web, hackthebox, tryhackme, active directory, windows, offsec, hard"
URL: "https://zurefx.github.io/writeups/htb-blue-554.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-blue-554/"
Date: "2024-06-10"
Tags: "Web, HackTheBox, TryHackMe, Active Directory, Windows, OffSec, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-blue-554"
Permalink: "/writeups/htb-blue-554.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Blue** is rated **Medium** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.46.200.193`.

### Objectives

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.23.9.250/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.55.243.58 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

### Web Enumeration

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.87.106.172 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.67.219.232 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.16.196.163 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **IDOR**.

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p5985,21,9200 10.31.138.219 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

```powershell
evil-winrm -i 10.57.10.248 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.88.105.92 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `smbclient`
- `evil-winrm`
- `enum4linux`
- `ldapsearch`
- `gobuster`

### Key Takeaways

- IDOR
- CSRF
- SSTI
