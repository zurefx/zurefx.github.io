---
TitleSEO: "VulnHub — Jarvis (Medium FreeBSD) | ZureFX"
TitlePost: "VulnHub — Jarvis (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Jarvis. SSRF and Resource-Based Constrained Delegation to achieve medium compromise on FreeBSD."
Keywords: "medium, reversing, tryhackme, linux"
URL: "https://zurefx.github.io/writeups/htb-jarvis-802.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-jarvis-802/"
Date: "2025-10-09"
Tags: "Medium, Reversing, TryHackMe, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-jarvis-802"
Permalink: "/writeups/htb-jarvis-802.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Jarvis** is rated **Medium** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.60.106.50`.

### Objectives

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.112.161.25/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.38.4.91 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.35.17.116 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **SSRF**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.66.132 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

```powershell
gobuster dir -u http://10.101.120.249/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.7.39/FUZZ
```

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `metasploit`
- `gobuster`
- `enum4linux`
- `wmiexec`
- `sqlmap`
- `hashcat`
- `netcat`

### Key Takeaways

- SSRF
- Resource-Based Constrained Delegation
