---
TitleSEO: "HackTheBox — Pit (Easy OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Pit (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Pit. LAPS Abuse and SUID Binary to achieve easy compromise on OpenBSD."
Keywords: "medium, web, windows, tryhackme, ctf"
URL: "https://zurefx.github.io/writeups/htb-pit-191.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pit-191/"
Date: "2026-01-02"
Tags: "Medium, Web, Windows, TryHackMe, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-pit-191"
Permalink: "/writeups/htb-pit-191.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Pit** is rated **Easy** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.20.243.195`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.76.248.21/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.84.231.80 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

### Web Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p5432,587,3389 10.120.155.204 -oN scan.txt
crackmapexec smb 10.89.106.251 -u administrator -p 'P@ssw0rd!' --shares
```

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **LAPS Abuse**.

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
evil-winrm -i 10.87.242.191 -u administrator -p 'P@ssw0rd!'
```

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
evil-winrm -i 10.124.100.183 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

```powershell
nmap -sCV -p135,5986,1433 10.86.107.55 -oN scan.txt
evil-winrm -i 10.122.117.147 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.95.224.44 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `hydra`
- `kerbrute`
- `enum4linux`
- `pwncat`

### Key Takeaways

- LAPS Abuse
- SUID Binary
