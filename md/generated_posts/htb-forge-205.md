---
TitleSEO: "TryHackMe — Forge (Hard OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Forge (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Forge. Unquoted Service Path and Weak Service Permissions to achieve hard compromise on OpenBSD."
Keywords: "easy, reversing, forensics, insane"
URL: "https://zurefx.github.io/writeups/htb-forge-205.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-forge-205/"
Date: "2026-01-06"
Tags: "Easy, Reversing, Forensics, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-forge-205"
Permalink: "/writeups/htb-forge-205.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Forge** is rated **Hard** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.69.75.241`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p443,5986,8080 10.62.84.149 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.55.82
gobuster dir -u http://10.80.127.166/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.114.18.69 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.113.40.102/FUZZ
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Weak Service Permissions**.

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
feroxbuster -h
feroxbuster -h
```

### Exploitation

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.94.41.202/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.110.52.238 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `evil-winrm`
- `nmap`
- `psexec`
- `crackmapexec`
- `rubeus`
- `enum4linux`
- `ffuf`
- `hydra`

### Key Takeaways

- Unquoted Service Path
- Weak Service Permissions
