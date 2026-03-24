---
TitleSEO: "VulnHub — Sense (Insane Windows) | ZureFX"
TitlePost: "VulnHub — Sense (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Sense. Path Traversal and SeDebugPrivilege to achieve insane compromise on Windows."
Keywords: "ctf, tryhackme, linux, insane"
URL: "https://zurefx.github.io/writeups/htb-sense-887.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sense-887/"
Date: "2024-12-28"
Tags: "CTF, TryHackMe, Linux, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-sense-887"
Permalink: "/writeups/htb-sense-887.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sense** is rated **Insane** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.27.229.69`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.105.49.204/FUZZ
evil-winrm -i 10.35.39.179 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
evil-winrm -i 10.41.146.243 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.32.1.32
```

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.83.162.95
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Subdomain Takeover**.

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
gobuster dir -u http://10.88.184.115/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.30.131.144 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p5986,995,1433 10.78.180.37 -oN scan.txt
gobuster dir -u http://10.113.104.89/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
crackmapexec smb 10.34.85.99 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.75.216.164/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.77.19.62 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.103.21.236 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.34.18.193
feroxbuster -h
crackmapexec smb 10.44.58.47 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `nmap`
- `john`
- `kerbrute`
- `nikto`

### Key Takeaways

- Path Traversal
- SeDebugPrivilege
- Subdomain Takeover
