---
TitleSEO: "OffSec Proving Grounds — Monitors (Hard OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Monitors (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Monitors. LAPS Abuse and Insecure Deserialization to achieve hard compromise on OpenBSD."
Keywords: "pwntilldawn, hackthebox, reversing, windows, web, active directory"
URL: "https://zurefx.github.io/writeups/htb-monitors-693.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-monitors-693/"
Date: "2024-02-14"
Tags: "PwnTillDawn, HackTheBox, Reversing, Windows, Web, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-monitors-693"
Permalink: "/writeups/htb-monitors-693.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Monitors** is rated **Hard** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.46.254.31`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.108.161.100 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.23.123.114
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.81.188.44/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

### Web Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

```bash
feroxbuster -h
crackmapexec smb 10.15.202.161 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.26.198
```

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

Key finding: **LAPS Abuse**.

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.50.118.125/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `hashcat`
- `john`
- `msfvenom`
- `gobuster`
- `rpcclient`
- `impacket`
- `sqlmap`
- `wpscan`

### Key Takeaways

- LAPS Abuse
- Insecure Deserialization
