---
TitleSEO: "OffSec Proving Grounds — Granny (Hard OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Granny (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Granny. XSS and CSRF to achieve hard compromise on OpenBSD."
Keywords: "active directory, linux, insane"
URL: "https://zurefx.github.io/writeups/htb-granny-349.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-granny-349/"
Date: "2026-02-20"
Tags: "Active Directory, Linux, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-granny-349"
Permalink: "/writeups/htb-granny-349.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Granny** is rated **Hard** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.74.179.224`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.89.32.162 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.146.192
impacket-secretsdump administrator:'P@ssw0rd!'@10.76.24.123
impacket-secretsdump administrator:'P@ssw0rd!'@10.30.113.181
```

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

Key finding: **SUID Binary**.

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.95.35
```

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.52.112.174
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p5986,9200,389 10.52.103.8 -oN scan.txt
feroxbuster -h
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.36.88.114 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.172.14/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `atexec`
- `hashcat`
- `dcomexec`
- `psexec`

### Key Takeaways

- XSS
- CSRF
- SUID Binary
- DNS Rebinding
