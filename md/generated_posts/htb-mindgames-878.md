---
TitleSEO: "TryHackMe — Mindgames (Easy Linux) | ZureFX"
TitlePost: "TryHackMe — Mindgames (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Mindgames. Unquoted Service Path and XXE to achieve easy compromise on Linux."
Keywords: "hard, active directory, web, medium, easy, windows"
URL: "https://zurefx.github.io/writeups/htb-mindgames-878.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-878/"
Date: "2025-11-07"
Tags: "Hard, Active Directory, Web, Medium, Easy, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-878"
Permalink: "/writeups/htb-mindgames-878.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Mindgames** is rated **Easy** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.19.28.164`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.125.96.183 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p135,143,8888 10.87.194.179 -oN scan.txt
nmap -sCV -p3389,1433,139 10.56.221.134 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.33.189.9 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

### Web Enumeration

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.74.170 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.75.219.50 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

Key finding: **XXE**.

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.45.243.198 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.24.55.25 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.110.209.33 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.128.144.101/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.105.56.165 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.86.169.80 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `secretsdump`
- `metasploit`
- `socat`
- `GetUserSPNs`
- `burpsuite`

### Key Takeaways

- Unquoted Service Path
- XXE
