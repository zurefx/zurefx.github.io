---
TitleSEO: "OffSec Proving Grounds — Passage (Medium Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Passage (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Passage. AlwaysInstallElevated and Golden Ticket to achieve medium compromise on Linux."
Keywords: "active directory, medium, pwntilldawn, easy, windows"
URL: "https://zurefx.github.io/writeups/htb-passage-531.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-passage-531/"
Date: "2025-08-19"
Tags: "Active Directory, Medium, PwnTillDawn, Easy, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-passage-531"
Permalink: "/writeups/htb-passage-531.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Passage** is rated **Medium** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.129.3.50`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.86.126.241 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.128.237.200/FUZZ
evil-winrm -i 10.96.183.222 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

```bash
feroxbuster -h
gobuster dir -u http://10.57.77.158/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.20.251.205 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.127.15.151
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
feroxbuster -h
crackmapexec smb 10.51.109.50 -u administrator -p 'P@ssw0rd!' --shares
```

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

Key finding: **Golden Ticket**.

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.105.97.67
```

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p8443,587,5432 10.99.142.141 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.10.137.145
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.191.196 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `smbexec`
- `nmap`
- `impacket`
- `socat`
- `ldapsearch`
- `kerbrute`
- `rubeus`

### Key Takeaways

- AlwaysInstallElevated
- Golden Ticket
