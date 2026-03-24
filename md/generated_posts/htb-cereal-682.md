---
TitleSEO: "PwnTillDawn — Cereal (Hard Linux) | ZureFX"
TitlePost: "PwnTillDawn — Cereal (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Cereal. CSRF and IDOR to achieve hard compromise on Linux."
Keywords: "offsec, forensics, tryhackme, windows, easy"
URL: "https://zurefx.github.io/writeups/htb-cereal-682.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cereal-682/"
Date: "2024-06-20"
Tags: "OffSec, Forensics, TryHackMe, Windows, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-cereal-682"
Permalink: "/writeups/htb-cereal-682.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Cereal** is rated **Hard** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.117.90.174`.

### Objectives

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.92.151.240/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.75.23.97
nmap -sCV -p8888,636,995 10.15.208.175 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.153.72/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.90.248.64
evil-winrm -i 10.124.224.55 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **Weak Service Permissions**.

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

### Initial Access

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.83.68.218 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.32.213.152 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.64.140.90/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `ldapsearch`
- `mimikatz`
- `nmap`
- `burpsuite`
- `psexec`
- `metasploit`
- `atexec`
- `john`

### Key Takeaways

- CSRF
- IDOR
- Weak Service Permissions
- AlwaysInstallElevated
