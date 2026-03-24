---
TitleSEO: "PwnTillDawn — Nibbles (Insane OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Nibbles (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Nibbles. Sudo Misconfiguration and SSTI to achieve insane compromise on OpenBSD."
Keywords: "insane, medium, ctf, linux, tryhackme, windows"
URL: "https://zurefx.github.io/writeups/htb-nibbles-587.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-nibbles-587/"
Date: "2024-07-11"
Tags: "Insane, Medium, CTF, Linux, TryHackMe, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-nibbles-587"
Permalink: "/writeups/htb-nibbles-587.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Nibbles** is rated **Insane** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.103.78.236`.

### Objectives

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.88.80.67/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.71.4.140 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

```bash
gobuster dir -u http://10.64.123.248/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.61.61.200
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.179.28
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.94.197.17/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **SSTI**.

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
gobuster dir -u http://10.64.164.212/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

```powershell
crackmapexec smb 10.127.148.221 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.64.137.79
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.6.114 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.121.210.153 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `smbclient`
- `atexec`
- `nmap`
- `enum4linux`

### Key Takeaways

- Sudo Misconfiguration
- SSTI
- Golden Ticket
