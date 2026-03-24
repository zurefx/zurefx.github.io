---
TitleSEO: "TryHackMe — Startup (Easy FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Startup (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Startup. DCSync and Remote File Inclusion to achieve easy compromise on FreeBSD."
Keywords: "tryhackme, pwntilldawn, hackthebox, windows, web, active directory, medium"
URL: "https://zurefx.github.io/writeups/htb-startup-808.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-startup-808/"
Date: "2025-04-09"
Tags: "TryHackMe, PwnTillDawn, HackTheBox, Windows, Web, Active Directory, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-startup-808"
Permalink: "/writeups/htb-startup-808.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Startup** is rated **Easy** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.104.147.23`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.120.59.87
```

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
nmap -sCV -p8888,389,143 10.111.209.113 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.116.235.151
gobuster dir -u http://10.92.127.2/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

### Web Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.79.12.246 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.113.201.170 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.47.124 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.125.166.47 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **DCSync**.

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.54.130
```

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
nmap -sCV -p8080,5985,22 10.79.85.127 -oN scan.txt
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.11.164.20/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `pwncat`
- `rubeus`
- `psexec`
- `dcomexec`

### Key Takeaways

- DCSync
- Remote File Inclusion
