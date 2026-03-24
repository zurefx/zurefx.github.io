---
TitleSEO: "OffSec Proving Grounds — Crossfit (Hard FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Crossfit (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Crossfit. NTLM Relay and Local File Inclusion to achieve hard compromise on FreeBSD."
Keywords: "ctf, hackthebox, insane, pwntilldawn, windows, medium"
URL: "https://zurefx.github.io/writeups/htb-crossfit-865.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-crossfit-865/"
Date: "2026-03-09"
Tags: "CTF, HackTheBox, Insane, PwnTillDawn, Windows, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-crossfit-865"
Permalink: "/writeups/htb-crossfit-865.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Crossfit** is rated **Hard** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.53.209.141`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.70.151.31/FUZZ
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.80.226.170/FUZZ
```

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
crackmapexec smb 10.23.170.240 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.126.45.176 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.123.240.155/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.104.163.41/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Cron Job**.

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
crackmapexec smb 10.49.83.106 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.25.146.101 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.98.116.174/FUZZ
nmap -sCV -p5986,464,3389 10.77.172.123 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

```powershell
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.26.14.20 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.124.41.105 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.101.73.233/FUZZ
```

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `impacket`
- `GetNPUsers`
- `secretsdump`
- `evil-winrm`
- `dcomexec`
- `feroxbuster`
- `psexec`
- `john`

### Key Takeaways

- NTLM Relay
- Local File Inclusion
- Cron Job
