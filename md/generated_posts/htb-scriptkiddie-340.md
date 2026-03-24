---
TitleSEO: "PwnTillDawn — ScriptKiddie (Easy OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — ScriptKiddie (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn ScriptKiddie. DCSync and NTLM Relay to achieve easy compromise on OpenBSD."
Keywords: "active directory, medium, hackthebox, windows"
URL: "https://zurefx.github.io/writeups/htb-scriptkiddie-340.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-scriptkiddie-340/"
Date: "2025-07-04"
Tags: "Active Directory, Medium, HackTheBox, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-scriptkiddie-340"
Permalink: "/writeups/htb-scriptkiddie-340.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **ScriptKiddie** is rated **Easy** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.31.201.78`.

### Objectives

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.50.1.127/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.128.106.37 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
nmap -sCV -p53,1433,3389 10.46.242.218 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

### SMB Enumeration

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.81.184.212
```

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **DCSync**.

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.88.63.17/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.74.190.157 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.92.97.65
```

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
gobuster dir -u http://10.104.155.33/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.125.168.24/FUZZ
nmap -sCV -p139,53,139 10.109.221.22 -oN scan.txt
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

```powershell
evil-winrm -i 10.121.9.219 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.107.130.244/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.20.156.205
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `rpcclient`
- `secretsdump`
- `ffuf`
- `crackmapexec`
- `hashcat`
- `enum4linux`

### Key Takeaways

- DCSync
- NTLM Relay
- SUID Binary
