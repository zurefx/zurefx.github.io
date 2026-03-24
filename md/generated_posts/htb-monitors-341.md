---
TitleSEO: "PwnTillDawn — Monitors (Insane OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Monitors (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Monitors. Open Redirect and SeDebugPrivilege to achieve insane compromise on OpenBSD."
Keywords: "hackthebox, forensics, ctf, tryhackme, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-monitors-341.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-monitors-341/"
Date: "2025-05-24"
Tags: "HackTheBox, Forensics, CTF, TryHackMe, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-monitors-341"
Permalink: "/writeups/htb-monitors-341.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Monitors** is rated **Insane** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.59.189.66`.

### Objectives

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.88.139.88
```

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

```bash
nmap -sCV -p389,22,25 10.49.35.48 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.114.247.3/FUZZ
nmap -sCV -p22,8080,25 10.35.34.224 -oN scan.txt
nmap -sCV -p139,993,23 10.87.76.163 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

```bash
gobuster dir -u http://10.34.17.65/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Subdomain Takeover**.

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.120.124.61/FUZZ
```

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

```powershell
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.50.56 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.61.214.71/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.59.191.121
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `john`
- `GetNPUsers`
- `gobuster`
- `burpsuite`
- `impacket`
- `chisel`
- `msfvenom`

### Key Takeaways

- Open Redirect
- SeDebugPrivilege
- Subdomain Takeover
