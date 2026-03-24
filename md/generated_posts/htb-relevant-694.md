---
TitleSEO: "OffSec Proving Grounds — Relevant (Insane FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Relevant (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Relevant. SSRF and NTLM Relay to achieve insane compromise on FreeBSD."
Keywords: "tryhackme, hackthebox, insane, forensics, pwntilldawn, medium"
URL: "https://zurefx.github.io/writeups/htb-relevant-694.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-relevant-694/"
Date: "2024-07-12"
Tags: "TryHackMe, HackTheBox, Insane, Forensics, PwnTillDawn, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-relevant-694"
Permalink: "/writeups/htb-relevant-694.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Relevant** is rated **Insane** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.83.112.75`.

### Objectives

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.109.193.33/FUZZ
crackmapexec smb 10.78.241.155 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p3268,636,3268 10.43.50.126 -oN scan.txt
crackmapexec smb 10.97.72.232 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

Key finding: **NTLM Relay**.

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
crackmapexec smb 10.62.203.121 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.30.59.61/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
crackmapexec smb 10.125.195.19 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p80,5985,1521 10.78.20.218 -oN scan.txt
gobuster dir -u http://10.30.176.221/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.233.195
evil-winrm -i 10.99.88.137 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `feroxbuster`
- `secretsdump`
- `mimikatz`
- `ligolo-ng`
- `ffuf`
- `sqlmap`
- `rpcclient`
- `atexec`

### Key Takeaways

- SSRF
- NTLM Relay
- Broken Access Control
