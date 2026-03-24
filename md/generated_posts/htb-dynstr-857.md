---
TitleSEO: "TryHackMe — Dynstr (Easy Linux) | ZureFX"
TitlePost: "TryHackMe — Dynstr (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Dynstr. Weak Service Permissions and Insecure Deserialization to achieve easy compromise on Linux."
Keywords: "offsec, web, forensics, active directory, medium, linux"
URL: "https://zurefx.github.io/writeups/htb-dynstr-857.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-dynstr-857/"
Date: "2025-09-29"
Tags: "OffSec, Web, Forensics, Active Directory, Medium, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-dynstr-857"
Permalink: "/writeups/htb-dynstr-857.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Dynstr** is rated **Easy** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.33.211.142`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p21,143,27017 10.70.169.209 -oN scan.txt
nmap -sCV -p1433,995,3389 10.33.236.66 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.110.28.205/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.49.162 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

### Web Enumeration

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.40.190.143 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p993,995,27017 10.10.226.128 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.109.107.17
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Insecure Deserialization**.

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.105.112.170/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.68.113.44
nmap -sCV -p636,27017,110 10.108.162.208 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.57.225.243 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p995,464,27017 10.99.139.38 -oN scan.txt
```

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `evil-winrm`
- `impacket`
- `GetNPUsers`
- `chisel`
- `enum4linux`
- `dcomexec`
- `kerbrute`

### Key Takeaways

- Weak Service Permissions
- Insecure Deserialization
- Docker Escape
- Remote Code Execution
