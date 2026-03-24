---
TitleSEO: "PwnTillDawn — Alfred (Easy Linux) | ZureFX"
TitlePost: "PwnTillDawn — Alfred (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Alfred. CSRF and CORS Misconfiguration to achieve easy compromise on Linux."
Keywords: "tryhackme, medium, windows, forensics"
URL: "https://zurefx.github.io/writeups/htb-alfred-241.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-alfred-241/"
Date: "2025-01-24"
Tags: "TryHackMe, Medium, Windows, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-alfred-241"
Permalink: "/writeups/htb-alfred-241.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Alfred** is rated **Easy** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.118.228.47`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.34.199.3 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.215.161 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p110,27017,5985 10.26.173.60 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.44.131.197 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **CSRF**.

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.87.60.202/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.38.57.133 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

```bash
gobuster dir -u http://10.59.12.135/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.59.171.114/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `chisel`
- `ldapsearch`
- `ffuf`
- `kerbrute`
- `sharphound`
- `rubeus`
- `enum4linux`

### Key Takeaways

- CSRF
- CORS Misconfiguration
- SSTI
- DCSync
