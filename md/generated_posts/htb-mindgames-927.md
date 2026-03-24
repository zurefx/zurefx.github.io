---
TitleSEO: "VulnHub — Mindgames (Insane Windows) | ZureFX"
TitlePost: "VulnHub — Mindgames (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Mindgames. Open Redirect and Constrained Delegation to achieve insane compromise on Windows."
Keywords: "windows, offsec, medium, pwntilldawn, web"
URL: "https://zurefx.github.io/writeups/htb-mindgames-927.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-927/"
Date: "2024-03-15"
Tags: "Windows, OffSec, Medium, PwnTillDawn, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-927"
Permalink: "/writeups/htb-mindgames-927.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Mindgames** is rated **Insane** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.129.197.129`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.33.115.140/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.230.202 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

### Web Enumeration

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **DCSync**.

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
gobuster dir -u http://10.45.136.10/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.20.48.254/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.127.173.170/FUZZ
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.127.151 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.45.48/FUZZ
crackmapexec smb 10.109.152.209 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `dcomexec`
- `hydra`
- `metasploit`
- `enum4linux`
- `nmap`
- `wpscan`

### Key Takeaways

- Open Redirect
- Constrained Delegation
- SSRF
- DCSync
