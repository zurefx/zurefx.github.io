---
TitleSEO: "VulnHub — Delivery (Easy Windows) | ZureFX"
TitlePost: "VulnHub — Delivery (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Delivery. Remote File Inclusion and DCSync to achieve easy compromise on Windows."
Keywords: "hackthebox, pwntilldawn, hard, ctf, medium, web"
URL: "https://zurefx.github.io/writeups/htb-delivery-466.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-delivery-466/"
Date: "2024-05-09"
Tags: "HackTheBox, PwnTillDawn, Hard, CTF, Medium, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-delivery-466"
Permalink: "/writeups/htb-delivery-466.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Delivery** is rated **Easy** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.57.72.94`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.34.231.85 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
feroxbuster -h
```

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.66.22.79
crackmapexec smb 10.95.90.18 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

### Web Enumeration

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
nmap -sCV -p5986,3268,587 10.96.42.83 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.106.78.56/FUZZ
gobuster dir -u http://10.27.145.179/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

Key finding: **DCSync**.

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
feroxbuster -h
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

```powershell
evil-winrm -i 10.64.94.183 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `hashcat`
- `impacket`
- `lookupsid`
- `ldapsearch`
- `GetNPUsers`

### Key Takeaways

- Remote File Inclusion
- DCSync
