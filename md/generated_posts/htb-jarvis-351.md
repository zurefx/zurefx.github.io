---
TitleSEO: "PwnTillDawn — Jarvis (Insane Linux) | ZureFX"
TitlePost: "PwnTillDawn — Jarvis (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Jarvis. ACL Abuse and DLL Hijacking to achieve insane compromise on Linux."
Keywords: "web, forensics, active directory, insane, linux, medium, windows"
URL: "https://zurefx.github.io/writeups/htb-jarvis-351.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-jarvis-351/"
Date: "2025-09-07"
Tags: "Web, Forensics, Active Directory, Insane, Linux, Medium, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-jarvis-351"
Permalink: "/writeups/htb-jarvis-351.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Jarvis** is rated **Insane** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.115.86.101`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.4.83 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.88.87.70/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.83.118.219/FUZZ
nmap -sCV -p110,9200,23 10.53.160.214 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

### Web Enumeration

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
evil-winrm -i 10.103.241.172 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.44.144.82/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

Key finding: **ACL Abuse**.

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.126.97.126 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.51.157.120/FUZZ
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `chisel`
- `burpsuite`
- `mimikatz`
- `nmap`
- `crackmapexec`
- `socat`
- `psexec`
- `john`

### Key Takeaways

- ACL Abuse
- DLL Hijacking
