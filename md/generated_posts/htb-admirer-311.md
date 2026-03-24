---
TitleSEO: "HackTheBox — Admirer (Insane OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Admirer (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Admirer. Remote Code Execution and SSRF to achieve insane compromise on OpenBSD."
Keywords: "hackthebox, forensics, reversing, linux, web, windows, easy"
URL: "https://zurefx.github.io/writeups/htb-admirer-311.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-admirer-311/"
Date: "2025-01-10"
Tags: "HackTheBox, Forensics, Reversing, Linux, Web, Windows, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-admirer-311"
Permalink: "/writeups/htb-admirer-311.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Admirer** is rated **Insane** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.39.182.1`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.56.103.198 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.73.199.250
```

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

### Web Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.37.226.240/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Remote Code Execution**.

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.15.135.221/FUZZ
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

```powershell
evil-winrm -i 10.67.244.193 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.90.51.71 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
nmap -sCV -p443,5985,139 10.114.99.249 -oN scan.txt
evil-winrm -i 10.124.35.194 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.15.197.28 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.29.246.113 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `feroxbuster`
- `rpcclient`
- `wmiexec`
- `GetNPUsers`
- `atexec`
- `john`
- `GetUserSPNs`

### Key Takeaways

- Remote Code Execution
- SSRF
- CORS Misconfiguration
