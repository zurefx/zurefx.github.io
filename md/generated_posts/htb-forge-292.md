---
TitleSEO: "VulnHub — Forge (Hard FreeBSD) | ZureFX"
TitlePost: "VulnHub — Forge (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Forge. Command Injection and Docker Escape to achieve hard compromise on FreeBSD."
Keywords: "tryhackme, hard, ctf"
URL: "https://zurefx.github.io/writeups/htb-forge-292.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-forge-292/"
Date: "2025-10-03"
Tags: "TryHackMe, Hard, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-forge-292"
Permalink: "/writeups/htb-forge-292.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Forge** is rated **Hard** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.93.246.51`.

### Objectives

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p443,445,8080 10.116.127.133 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.118.161.252/FUZZ
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.93.177.17/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

Key finding: **Docker Escape**.

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p3268,22,1433 10.123.161.216 -oN scan.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.48.225.29/FUZZ
nmap -sCV -p587,8080,139 10.67.230.154 -oN scan.txt
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.186.16 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

```powershell
evil-winrm -i 10.129.1.153 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `impacket`
- `nikto`
- `atexec`
- `metasploit`
- `GetUserSPNs`
- `hydra`

### Key Takeaways

- Command Injection
- Docker Escape
- NTLM Relay
