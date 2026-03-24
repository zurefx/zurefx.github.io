---
TitleSEO: "TryHackMe — Buff (Insane FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Buff (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Buff. LAPS Abuse and XXE to achieve insane compromise on FreeBSD."
Keywords: "linux, insane, medium, hackthebox, windows, pwntilldawn, web"
URL: "https://zurefx.github.io/writeups/htb-buff-760.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-buff-760/"
Date: "2026-03-05"
Tags: "Linux, Insane, Medium, HackTheBox, Windows, PwnTillDawn, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-buff-760"
Permalink: "/writeups/htb-buff-760.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Buff** is rated **Insane** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.128.119.179`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.111.171.89/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

### Web Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.102.220.203/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **XXE**.

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.97.154.251 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.56.101.241 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.63.7.183
```

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.100.15 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.10.87.27/FUZZ
crackmapexec smb 10.105.67.17 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.84.43.120
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.67.102.3 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `smbclient`
- `chisel`
- `sqlmap`
- `burpsuite`
- `netcat`
- `sharphound`

### Key Takeaways

- LAPS Abuse
- XXE
- Resource-Based Constrained Delegation
