---
TitleSEO: "OffSec Proving Grounds — Spectra (Medium FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Spectra (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Spectra. AlwaysInstallElevated and XSS to achieve medium compromise on FreeBSD."
Keywords: "ctf, medium, windows, tryhackme, hackthebox, insane, web"
URL: "https://zurefx.github.io/writeups/htb-spectra-100.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-100/"
Date: "2024-09-13"
Tags: "CTF, Medium, Windows, TryHackMe, HackTheBox, Insane, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-100"
Permalink: "/writeups/htb-spectra-100.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Spectra** is rated **Medium** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.110.172.4`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

```bash
gobuster dir -u http://10.49.182.217/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

### Web Enumeration

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
evil-winrm -i 10.112.176.116 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.34.30.82 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

Key finding: **AlwaysInstallElevated**.

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
gobuster dir -u http://10.108.90.223/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

```powershell
evil-winrm -i 10.91.243.21 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.121.171.155 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.111.156.156 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `socat`
- `chisel`
- `ffuf`
- `dcomexec`
- `gobuster`

### Key Takeaways

- AlwaysInstallElevated
- XSS
- SQL Injection
- NTLM Relay
