---
TitleSEO: "HackTheBox — Remote (Easy Linux) | ZureFX"
TitlePost: "HackTheBox — Remote (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Remote. SSRF and Pass the Hash to achieve easy compromise on Linux."
Keywords: "web, offsec, linux, ctf"
URL: "https://zurefx.github.io/writeups/htb-remote-908.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-remote-908/"
Date: "2025-05-04"
Tags: "Web, OffSec, Linux, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-remote-908"
Permalink: "/writeups/htb-remote-908.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Remote** is rated **Easy** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.106.85.242`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.207.30/FUZZ
nmap -sCV -p8888,3268,143 10.125.19.193 -oN scan.txt
evil-winrm -i 10.18.22.157 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.87.164.252 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Web Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
nmap -sCV -p1433,1521,5432 10.61.186.193 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **SSRF**.

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.55.51.87 -u administrator -p 'P@ssw0rd!' --shares
```

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.82.10.156 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.98.82.77 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.119.189.230/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

```bash
feroxbuster -h
nmap -sCV -p445,5432,139 10.120.169.135 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.115.180.133/FUZZ
```

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `chisel`
- `psexec`
- `atexec`
- `secretsdump`
- `mimikatz`

### Key Takeaways

- SSRF
- Pass the Hash
- Resource-Based Constrained Delegation
