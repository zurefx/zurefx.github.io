---
TitleSEO: "HackTheBox — Tabby (Insane OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Tabby (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Tabby. Writable PATH and Resource-Based Constrained Delegation to achieve insane compromise on OpenBSD."
Keywords: "pwntilldawn, windows, insane, hard, ctf"
URL: "https://zurefx.github.io/writeups/htb-tabby-577.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tabby-577/"
Date: "2024-08-27"
Tags: "PwnTillDawn, Windows, Insane, Hard, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-tabby-577"
Permalink: "/writeups/htb-tabby-577.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tabby** is rated **Insane** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.41.64.56`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p139,995,636 10.42.176.130 -oN scan.txt
nmap -sCV -p143,25,53 10.110.70.39 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.66.65.125 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.31.90.104 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **Writable PATH**.

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.90.26.9/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.42.173.192 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.14.110.16
gobuster dir -u http://10.56.144.253/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `chisel`
- `pwncat`
- `hashcat`
- `john`

### Key Takeaways

- Writable PATH
- Resource-Based Constrained Delegation
- LXD Privilege Escalation
