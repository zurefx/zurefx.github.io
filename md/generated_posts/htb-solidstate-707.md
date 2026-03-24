---
TitleSEO: "HackTheBox — Solidstate (Insane OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Solidstate (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Solidstate. XSS and DNS Rebinding to achieve insane compromise on OpenBSD."
Keywords: "pwntilldawn, insane, hard, linux, reversing, windows, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-solidstate-707.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-solidstate-707/"
Date: "2025-08-16"
Tags: "PwnTillDawn, Insane, Hard, Linux, Reversing, Windows, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-solidstate-707"
Permalink: "/writeups/htb-solidstate-707.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Solidstate** is rated **Insane** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.93.238.202`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
gobuster dir -u http://10.29.98.20/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.17.169.135/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.49.135.246/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.68.180.170
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.11.166.179 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **XXE**.

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
feroxbuster -h
nmap -sCV -p636,53,993 10.70.240.51 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
nmap -sCV -p3389,5986,1433 10.94.226.48 -oN scan.txt
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.98.121.116/FUZZ
feroxbuster -h
evil-winrm -i 10.114.104.173 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.117.39.141 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `lookupsid`
- `kerbrute`
- `evil-winrm`
- `pwncat`
- `rpcclient`

### Key Takeaways

- XSS
- DNS Rebinding
- XXE
