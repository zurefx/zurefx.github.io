---
TitleSEO: "OffSec Proving Grounds — Dynstr (Hard Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Dynstr (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Dynstr. Silver Ticket and NTLM Relay to achieve hard compromise on Linux."
Keywords: "insane, pwntilldawn, easy"
URL: "https://zurefx.github.io/writeups/htb-dynstr-215.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-dynstr-215/"
Date: "2025-11-11"
Tags: "Insane, PwnTillDawn, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-dynstr-215"
Permalink: "/writeups/htb-dynstr-215.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Dynstr** is rated **Hard** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.75.34.41`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p3268,110,5986 10.11.39.45 -oN scan.txt
gobuster dir -u http://10.76.239.204/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
crackmapexec smb 10.110.86.85 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.2.243
evil-winrm -i 10.92.51.31 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

Key finding: **Silver Ticket**.

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.45.3/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.118.16/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.50.218.131/FUZZ
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p587,995,1521 10.62.138.103 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.72.53.252 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **root** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `metasploit`
- `socat`
- `rubeus`
- `kerbrute`
- `nmap`
- `lookupsid`

### Key Takeaways

- Silver Ticket
- NTLM Relay
