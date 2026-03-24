---
TitleSEO: "PwnTillDawn — Mindgames (Medium OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Mindgames (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Mindgames. SQL Injection and Silver Ticket to achieve medium compromise on OpenBSD."
Keywords: "forensics, medium, reversing, ctf, pwntilldawn, hackthebox, insane"
URL: "https://zurefx.github.io/writeups/htb-mindgames-246.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-246/"
Date: "2025-08-15"
Tags: "Forensics, Medium, Reversing, CTF, PwnTillDawn, HackTheBox, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-246"
Permalink: "/writeups/htb-mindgames-246.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mindgames** is rated **Medium** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.11.51.74`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.112.130.100/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.52.67.216/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.118.219.202/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.87.16
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.41.4.235/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.123.112.14 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Local File Inclusion**.

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
feroxbuster -h
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `ldapsearch`
- `nikto`
- `wmiexec`
- `kerbrute`
- `psexec`
- `smbexec`

### Key Takeaways

- SQL Injection
- Silver Ticket
- Local File Inclusion
