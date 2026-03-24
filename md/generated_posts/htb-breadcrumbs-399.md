---
TitleSEO: "PwnTillDawn — Breadcrumbs (Easy Linux) | ZureFX"
TitlePost: "PwnTillDawn — Breadcrumbs (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Breadcrumbs. Docker Escape and Command Injection to achieve easy compromise on Linux."
Keywords: "windows, hard, linux"
URL: "https://zurefx.github.io/writeups/htb-breadcrumbs-399.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-breadcrumbs-399/"
Date: "2025-07-27"
Tags: "Windows, Hard, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-breadcrumbs-399"
Permalink: "/writeups/htb-breadcrumbs-399.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Breadcrumbs** is rated **Easy** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.121.106.174`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.205.215 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.127.185/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.199.239
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p110,636,443 10.43.60.46 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **AlwaysInstallElevated**.

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
gobuster dir -u http://10.53.106.109/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
nmap -sCV -p135,1521,993 10.70.89.191 -oN scan.txt
```

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```bash
gobuster dir -u http://10.95.199.6/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.102.22.247/FUZZ
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.13.137.246/FUZZ
evil-winrm -i 10.69.214.67 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `smbclient`
- `nmap`
- `netcat`
- `dcomexec`

### Key Takeaways

- Docker Escape
- Command Injection
- Remote Code Execution
- AlwaysInstallElevated
