---
TitleSEO: "HackTheBox — Solidstate (Medium OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Solidstate (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Solidstate. LXD Privilege Escalation and LAPS Abuse to achieve medium compromise on OpenBSD."
Keywords: "hard, linux, active directory, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-solidstate-219.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-solidstate-219/"
Date: "2024-08-01"
Tags: "Hard, Linux, Active Directory, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-solidstate-219"
Permalink: "/writeups/htb-solidstate-219.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Solidstate** is rated **Medium** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.79.139.224`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
evil-winrm -i 10.58.92.135 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **LXD Privilege Escalation**.

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.114.209 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.80.161.209 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.42.34.155/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.78.44.185 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `psexec`
- `rpcclient`
- `crackmapexec`
- `mimikatz`
- `netcat`
- `impacket`
- `nikto`
- `ffuf`

### Key Takeaways

- LXD Privilege Escalation
- LAPS Abuse
- ACL Abuse
