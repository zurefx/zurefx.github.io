---
TitleSEO: "PwnTillDawn — Doctor (Hard Linux) | ZureFX"
TitlePost: "PwnTillDawn — Doctor (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Doctor. Subdomain Takeover and Command Injection to achieve hard compromise on Linux."
Keywords: "insane, active directory, windows, linux, pwntilldawn, forensics"
URL: "https://zurefx.github.io/writeups/htb-doctor-911.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-doctor-911/"
Date: "2024-11-29"
Tags: "Insane, Active Directory, Windows, Linux, PwnTillDawn, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-doctor-911"
Permalink: "/writeups/htb-doctor-911.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Doctor** is rated **Hard** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.122.235.86`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.21.40.165 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
crackmapexec smb 10.16.96.145 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.113.139.4
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p993,636,22 10.11.100.222 -oN scan.txt
evil-winrm -i 10.32.189.33 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
feroxbuster -h
```

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

Key finding: **Subdomain Takeover**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.11.24.102 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.70.213.6 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

```bash
gobuster dir -u http://10.129.38.196/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.194.77/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `ffuf`
- `chisel`
- `psexec`
- `burpsuite`
- `gobuster`
- `nmap`
- `msfvenom`
- `wmiexec`

### Key Takeaways

- Subdomain Takeover
- Command Injection
- Broken Access Control
