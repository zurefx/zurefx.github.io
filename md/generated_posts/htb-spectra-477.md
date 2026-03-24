---
TitleSEO: "HackTheBox — Spectra (Easy OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Spectra (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Spectra. NTLM Relay and Writable PATH to achieve easy compromise on OpenBSD."
Keywords: "hackthebox, windows, easy"
URL: "https://zurefx.github.io/writeups/htb-spectra-477.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-477/"
Date: "2024-06-11"
Tags: "HackTheBox, Windows, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-477"
Permalink: "/writeups/htb-spectra-477.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Spectra** is rated **Easy** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.37.9.40`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
crackmapexec smb 10.21.225.40 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
crackmapexec smb 10.96.13.157 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.35.80.53 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p5985,23,80 10.98.205.48 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
nmap -sCV -p464,27017,587 10.96.77.144 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

Key finding: **Writable PATH**.

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.54.244.164/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.119.202.207 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

```powershell
nmap -sCV -p389,995,8888 10.109.226.24 -oN scan.txt
```

### Exploitation

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.125.163.50/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.80.107.242/FUZZ
crackmapexec smb 10.26.192.185 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `bloodhound`
- `wpscan`
- `mimikatz`
- `secretsdump`
- `GetUserSPNs`

### Key Takeaways

- NTLM Relay
- Writable PATH
