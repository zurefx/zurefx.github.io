---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, oscp, cheatsheet, dfir, persistence"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-101.html"
URL_IMAGES: ""
Date: "2025-02-26"
Tags: "Blue Team, OSCP, Cheatsheet, DFIR, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-101"
Permalink: "/notes/note-reverse-engineering-basics-101.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Java

### Django

```bash
crackmapexec smb 10.60.64.243 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
nmap -sCV -p8888,1521,8080 10.55.19.74 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Cron Job

### LDAP

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.128.254.132/FUZZ
```

> **Note:** SSTI was identified as the primary attack vector in this scenario.

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

- `wpscan`
- `XXE`
- `evil-winrm`
- `Sudo Misconfiguration`
- `bloodhound`
- `Weak Service Permissions`

## Kali Linux

### msfvenom

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.35.55.246 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.39.145.217 -u administrator -p 'P@ssw0rd!'
```
