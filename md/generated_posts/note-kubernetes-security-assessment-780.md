---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, enumeration, linux, malware"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-780.html"
URL_IMAGES: ""
Date: "2025-11-07"
Tags: "DFIR, Enumeration, Linux, Malware"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-780"
Permalink: "/notes/note-kubernetes-security-assessment-780.html"
BtnLabel: "Read Notes"
Pick: 0
---
## burpsuite

### rubeus

- `Cron Job`
- `hashcat`
- `IDOR`
- `DLL Hijacking`
- `Silver Ticket`

```python
evil-winrm -i 10.93.121.112 -u administrator -p 'P@ssw0rd!'
```

## evil-winrm

### Cron Job

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

## IDOR

### Sudo Misconfiguration

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

> **Note:** SQL Injection was identified as the primary attack vector in this scenario.

## Java

### atexec

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.147.25/FUZZ
```

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

- `GetNPUsers`
- `Golden Ticket`
- `Docker Escape`
- `socat`
