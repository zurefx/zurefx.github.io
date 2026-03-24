---
TitleSEO: "OffSec Proving Grounds — Tabby (Hard Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Tabby (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Tabby. NTLM Relay and DNS Rebinding to achieve hard compromise on Windows."
Keywords: "ctf, windows, web, easy, hackthebox, offsec"
URL: "https://zurefx.github.io/writeups/htb-tabby-836.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tabby-836/"
Date: "2025-09-06"
Tags: "CTF, Windows, Web, Easy, HackTheBox, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-tabby-836"
Permalink: "/writeups/htb-tabby-836.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tabby** is rated **Hard** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.24.27.123`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.116.13.100 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.114.106.112 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.16.245.177 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.114.19.201 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

### Web Enumeration

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
crackmapexec smb 10.126.251.182 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p3268,139,80 10.106.252.222 -oN scan.txt
evil-winrm -i 10.117.187.123 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **NTLM Relay**.

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.39.153.185/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.80.176.181/FUZZ
crackmapexec smb 10.100.206.148 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.34.182.180 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

```powershell
evil-winrm -i 10.72.74.141 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `rpcclient`
- `feroxbuster`
- `kerbrute`
- `metasploit`
- `psexec`

### Key Takeaways

- NTLM Relay
- DNS Rebinding
- Local File Inclusion
