---
TitleSEO: "PwnTillDawn — Cap (Medium Linux) | ZureFX"
TitlePost: "PwnTillDawn — Cap (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Cap. Docker Escape and Golden Ticket to achieve medium compromise on Linux."
Keywords: "hackthebox, reversing, pwntilldawn, easy, insane"
URL: "https://zurefx.github.io/writeups/htb-cap-983.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cap-983/"
Date: "2024-12-09"
Tags: "HackTheBox, Reversing, PwnTillDawn, Easy, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-cap-983"
Permalink: "/writeups/htb-cap-983.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Cap** is rated **Medium** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.112.99.6`.

### Objectives

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p8888,389,135 10.83.203.165 -oN scan.txt
evil-winrm -i 10.68.20.15 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

```bash
crackmapexec smb 10.95.132.205 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **Docker Escape**.

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.92.241.203 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.71.197.54
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
crackmapexec smb 10.16.221.91 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `feroxbuster`
- `chisel`
- `rpcclient`
- `secretsdump`

### Key Takeaways

- Docker Escape
- Golden Ticket
