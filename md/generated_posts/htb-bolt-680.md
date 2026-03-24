---
TitleSEO: "TryHackMe — Bolt (Easy FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Bolt (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Bolt. CORS Misconfiguration and CSRF to achieve easy compromise on FreeBSD."
Keywords: "medium, ctf, active directory"
URL: "https://zurefx.github.io/writeups/htb-bolt-680.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-bolt-680/"
Date: "2025-09-06"
Tags: "Medium, CTF, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-bolt-680"
Permalink: "/writeups/htb-bolt-680.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Bolt** is rated **Easy** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.57.177.204`.

### Objectives

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.22.59.124/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.16.108.151
crackmapexec smb 10.126.121.143 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **CSRF**.

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p143,636,22 10.23.93.88 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.11.106.77 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.110.201.51 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `ligolo-ng`
- `socat`
- `ldapsearch`
- `rpcclient`

### Key Takeaways

- CORS Misconfiguration
- CSRF
- Pass the Hash
