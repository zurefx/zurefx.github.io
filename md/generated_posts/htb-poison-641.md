---
TitleSEO: "VulnHub — Poison (Insane Windows) | ZureFX"
TitlePost: "VulnHub — Poison (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Poison. Remote Code Execution and XSS to achieve insane compromise on Windows."
Keywords: "forensics, linux, insane, easy, hackthebox, web"
URL: "https://zurefx.github.io/writeups/htb-poison-641.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-poison-641/"
Date: "2024-10-15"
Tags: "Forensics, Linux, Insane, Easy, HackTheBox, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-poison-641"
Permalink: "/writeups/htb-poison-641.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Poison** is rated **Insane** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.127.243.136`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
nmap -sCV -p5986,27017,80 10.37.132.236 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

### Web Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.72.65.18 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.234.155 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **DLL Hijacking**.

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.119.73.27 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
feroxbuster -h
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `gobuster`
- `ffuf`
- `pwncat`
- `ligolo-ng`
- `metasploit`
- `dcomexec`
- `netcat`

### Key Takeaways

- Remote Code Execution
- XSS
- LXD Privilege Escalation
- DLL Hijacking
