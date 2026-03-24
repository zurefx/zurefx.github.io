---
TitleSEO: "VulnHub — Knife (Insane Windows) | ZureFX"
TitlePost: "VulnHub — Knife (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Knife. SUID Binary and Docker Escape to achieve insane compromise on Windows."
Keywords: "offsec, hard, easy, linux"
URL: "https://zurefx.github.io/writeups/htb-knife-512.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-knife-512/"
Date: "2024-04-07"
Tags: "OffSec, Hard, Easy, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-knife-512"
Permalink: "/writeups/htb-knife-512.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Knife** is rated **Insane** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.33.148.12`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.36.193.19 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.52.132.42 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p3268,1521,993 10.28.86.31 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.11.163.166/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.177.24/FUZZ
evil-winrm -i 10.101.236.145 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.70.45.144 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.122.137.230/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

Key finding: **Docker Escape**.

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.27.191.104 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

```powershell
feroxbuster -h
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

```powershell
nmap -sCV -p1521,587,8443 10.124.76.141 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.92.131.221/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p5985,1433,5432 10.90.48.115 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `chisel`
- `rubeus`
- `pwncat`
- `gobuster`

### Key Takeaways

- SUID Binary
- Docker Escape
