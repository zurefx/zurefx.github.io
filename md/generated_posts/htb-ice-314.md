---
TitleSEO: "TryHackMe — Ice (Insane FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Ice (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Ice. GPP Password and Resource-Based Constrained Delegation to achieve insane compromise on FreeBSD."
Keywords: "easy, windows, hackthebox, reversing, linux, ctf"
URL: "https://zurefx.github.io/writeups/htb-ice-314.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ice-314/"
Date: "2025-05-22"
Tags: "Easy, Windows, HackTheBox, Reversing, Linux, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-ice-314"
Permalink: "/writeups/htb-ice-314.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ice** is rated **Insane** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.31.42.212`.

### Objectives

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
gobuster dir -u http://10.81.227.4/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.82.159 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.55.140.83
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.99.6.54
```

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

Key finding: **Resource-Based Constrained Delegation**.

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.38.42.237/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.119.230
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.74.165 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `ffuf`
- `ldapsearch`
- `rubeus`
- `evil-winrm`
- `lookupsid`
- `kerbrute`
- `sqlmap`

### Key Takeaways

- GPP Password
- Resource-Based Constrained Delegation
- ACL Abuse
