---
TitleSEO: "PwnTillDawn — Cereal (Easy FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Cereal (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Cereal. ACL Abuse and SSTI to achieve easy compromise on FreeBSD."
Keywords: "insane, easy, windows, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-cereal-887.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cereal-887/"
Date: "2025-11-30"
Tags: "Insane, Easy, Windows, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-cereal-887"
Permalink: "/writeups/htb-cereal-887.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Cereal** is rated **Easy** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.111.174.55`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.23.19.58 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.36.230.253 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3268,80,3268 10.52.221.81 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.208.173/FUZZ
gobuster dir -u http://10.122.78.213/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **ACL Abuse**.

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.63.30.22 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.87.67.19
crackmapexec smb 10.91.251.20 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.127.59 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.31.15.95 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `gobuster`
- `mimikatz`
- `crackmapexec`
- `ffuf`
- `rubeus`
- `nikto`

### Key Takeaways

- ACL Abuse
- SSTI
- DCSync
