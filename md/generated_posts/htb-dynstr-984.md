---
TitleSEO: "OffSec Proving Grounds — Dynstr (Insane Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Dynstr (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Dynstr. Golden Ticket and SUID Binary to achieve insane compromise on Linux."
Keywords: "tryhackme, medium, easy, offsec, active directory, ctf"
URL: "https://zurefx.github.io/writeups/htb-dynstr-984.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-dynstr-984/"
Date: "2024-01-12"
Tags: "TryHackMe, Medium, Easy, OffSec, Active Directory, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-dynstr-984"
Permalink: "/writeups/htb-dynstr-984.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Dynstr** is rated **Insane** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.89.205.95`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.24.87 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.110.118.167 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.124.176.202 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p587,3268,443 10.65.250.149 -oN scan.txt
evil-winrm -i 10.62.25.80 -u administrator -p 'P@ssw0rd!'
```

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.29.189.134 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Golden Ticket**.

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.14.112.125 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
evil-winrm -i 10.12.247.20 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.25.111.96 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.13.143.20
gobuster dir -u http://10.95.110.151/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.68.63.60/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `bloodhound`
- `feroxbuster`
- `gobuster`
- `metasploit`
- `chisel`
- `wmiexec`
- `hydra`
- `sharphound`

### Key Takeaways

- Golden Ticket
- SUID Binary
- Insecure Deserialization
- Local File Inclusion
