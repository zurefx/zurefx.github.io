---
TitleSEO: "OffSec Proving Grounds — Networked (Easy Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Networked (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Networked. NFS No Root Squash and Insecure Deserialization to achieve easy compromise on Windows."
Keywords: "easy, pwntilldawn, linux"
URL: "https://zurefx.github.io/writeups/htb-networked-829.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-networked-829/"
Date: "2024-04-28"
Tags: "Easy, PwnTillDawn, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-networked-829"
Permalink: "/writeups/htb-networked-829.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Networked** is rated **Easy** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.34.158.12`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.28.54.178 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.38.93.41
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.172.13/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.14.248.49/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.10.33.32/FUZZ
```

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **NFS No Root Squash**.

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.67.70.145
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.64.52.84 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.89.51.118
```

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `rubeus`
- `socat`
- `ffuf`
- `hydra`
- `burpsuite`
- `lookupsid`
- `ligolo-ng`

### Key Takeaways

- NFS No Root Squash
- Insecure Deserialization
- Broken Access Control
