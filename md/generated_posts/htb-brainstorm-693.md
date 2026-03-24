---
TitleSEO: "VulnHub — Brainstorm (Easy Linux) | ZureFX"
TitlePost: "VulnHub — Brainstorm (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Brainstorm. GPP Password and Remote Code Execution to achieve easy compromise on Linux."
Keywords: "reversing, web, windows, offsec"
URL: "https://zurefx.github.io/writeups/htb-brainstorm-693.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-brainstorm-693/"
Date: "2025-02-25"
Tags: "Reversing, Web, Windows, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-brainstorm-693"
Permalink: "/writeups/htb-brainstorm-693.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Brainstorm** is rated **Easy** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.99.61.181`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
evil-winrm -i 10.14.132.26 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p21,445,27017 10.118.63.139 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
evil-winrm -i 10.74.101.64 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p8080,9200,1521 10.28.221.5 -oN scan.txt
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

### Web Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.16.184.159/FUZZ
feroxbuster -h
```

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Broken Access Control**.

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

```bash
feroxbuster -h
evil-winrm -i 10.36.172.91 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.82.113.123/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

```bash
evil-winrm -i 10.84.243.181 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.205.193 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `smbexec`
- `wpscan`
- `nmap`
- `nikto`
- `GetNPUsers`
- `evil-winrm`
- `msfvenom`
- `smbclient`

### Key Takeaways

- GPP Password
- Remote Code Execution
- Broken Access Control
