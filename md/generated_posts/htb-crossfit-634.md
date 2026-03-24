---
TitleSEO: "PwnTillDawn — Crossfit (Insane OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Crossfit (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Crossfit. Unconstrained Delegation and LXD Privilege Escalation to achieve insane compromise on OpenBSD."
Keywords: "reversing, ctf, web, insane, medium"
URL: "https://zurefx.github.io/writeups/htb-crossfit-634.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-crossfit-634/"
Date: "2024-10-20"
Tags: "Reversing, CTF, Web, Insane, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-crossfit-634"
Permalink: "/writeups/htb-crossfit-634.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Crossfit** is rated **Insane** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.24.187.62`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p27017,135,5986 10.124.124.5 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.87.65.209 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.49.250.100/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

### Web Enumeration

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
gobuster dir -u http://10.46.138.121/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Unconstrained Delegation**.

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.110.132.74 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

```powershell
crackmapexec smb 10.31.242.131 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.42.27.29 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.30.44.25
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.94.218.181/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.86.28 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `feroxbuster`
- `evil-winrm`
- `wmiexec`
- `msfvenom`
- `netcat`

### Key Takeaways

- Unconstrained Delegation
- LXD Privilege Escalation
- Path Traversal
- NFS No Root Squash
