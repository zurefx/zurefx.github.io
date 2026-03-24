---
TitleSEO: "HackTheBox — Alfred (Insane OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Alfred (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Alfred. Weak Service Permissions and DLL Hijacking to achieve insane compromise on OpenBSD."
Keywords: "hard, hackthebox, forensics, medium"
URL: "https://zurefx.github.io/writeups/htb-alfred-921.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-alfred-921/"
Date: "2026-02-16"
Tags: "Hard, HackTheBox, Forensics, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-alfred-921"
Permalink: "/writeups/htb-alfred-921.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Alfred** is rated **Insane** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.91.202.85`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.14.184.130/FUZZ
```

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.11.231.202
feroxbuster -h
```

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.111.222.242 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Insecure Deserialization**.

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p3306,21,80 10.82.193.18 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p8888,135,135 10.54.232.84 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
crackmapexec smb 10.101.203.189 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
gobuster dir -u http://10.127.1.105/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `socat`
- `GetNPUsers`
- `netcat`
- `atexec`
- `john`
- `crackmapexec`
- `evil-winrm`

### Key Takeaways

- Weak Service Permissions
- DLL Hijacking
- Cron Job
- Insecure Deserialization
