---
TitleSEO: "OffSec Proving Grounds — Networked (Insane OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Networked (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Networked. SeImpersonatePrivilege and Subdomain Takeover to achieve insane compromise on OpenBSD."
Keywords: "forensics, web, windows, ctf, tryhackme, insane"
URL: "https://zurefx.github.io/writeups/htb-networked-782.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-networked-782/"
Date: "2024-08-05"
Tags: "Forensics, Web, Windows, CTF, TryHackMe, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-networked-782"
Permalink: "/writeups/htb-networked-782.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Networked** is rated **Insane** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.47.227.42`.

### Objectives

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.86.163.79/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.46.44.122/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p5986,464,80 10.20.108.91 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.102.208.154 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

### Web Enumeration

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.117.50.189/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.105.71.196 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.24.37.116/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.91.92.238/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Subdomain Takeover**.

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
gobuster dir -u http://10.23.10.213/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p445,8080,5985 10.108.51.225 -oN scan.txt
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.242.196 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
crackmapexec smb 10.120.182.8 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
evil-winrm -i 10.60.109.112 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `hydra`
- `impacket`
- `smbclient`
- `metasploit`
- `GetNPUsers`
- `sqlmap`

### Key Takeaways

- SeImpersonatePrivilege
- Subdomain Takeover
- Remote File Inclusion
