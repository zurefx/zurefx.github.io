---
TitleSEO: "HackTheBox — Spectra (Insane FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Spectra (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Spectra. ACL Abuse and Cron Job to achieve insane compromise on FreeBSD."
Keywords: "insane, tryhackme, web, medium, easy, hackthebox, linux"
URL: "https://zurefx.github.io/writeups/htb-spectra-600.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-600/"
Date: "2025-02-11"
Tags: "Insane, TryHackMe, Web, Medium, Easy, HackTheBox, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-600"
Permalink: "/writeups/htb-spectra-600.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Spectra** is rated **Insane** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.63.22.173`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p995,8080,3389 10.85.222.34 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

### Web Enumeration

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.40.226.172
```

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **ACL Abuse**.

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
nmap -sCV -p636,389,80 10.39.222.36 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
gobuster dir -u http://10.34.18.173/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

```powershell
gobuster dir -u http://10.21.212.1/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `rubeus`
- `pwncat`
- `sharphound`
- `hashcat`
- `sqlmap`
- `impacket`

### Key Takeaways

- ACL Abuse
- Cron Job
