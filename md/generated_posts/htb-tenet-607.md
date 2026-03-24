---
TitleSEO: "HackTheBox — Tenet (Insane Linux) | ZureFX"
TitlePost: "HackTheBox — Tenet (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Tenet. Local File Inclusion and DLL Hijacking to achieve insane compromise on Linux."
Keywords: "linux, web, medium, ctf"
URL: "https://zurefx.github.io/writeups/htb-tenet-607.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tenet-607/"
Date: "2024-10-25"
Tags: "Linux, Web, Medium, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-tenet-607"
Permalink: "/writeups/htb-tenet-607.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Tenet** is rated **Insane** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.87.12.92`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

### Web Enumeration

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.26.99.199 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.45.242.89 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.84.5.113 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

Key finding: **SQL Injection**.

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.48.209.54/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
nmap -sCV -p23,1521,135 10.91.181.247 -oN scan.txt
```

### Exploitation

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p80,23,3389 10.40.182.139 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.206.58
```

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `lookupsid`
- `sqlmap`
- `impacket`
- `nmap`
- `nikto`

### Key Takeaways

- Local File Inclusion
- DLL Hijacking
- XXE
- SQL Injection
