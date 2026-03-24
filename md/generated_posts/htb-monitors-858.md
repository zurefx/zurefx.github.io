---
TitleSEO: "OffSec Proving Grounds — Monitors (Easy Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Monitors (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Monitors. XXE and LAPS Abuse to achieve easy compromise on Windows."
Keywords: "tryhackme, easy, windows, insane, hard, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-monitors-858.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-monitors-858/"
Date: "2024-04-11"
Tags: "TryHackMe, Easy, Windows, Insane, Hard, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-monitors-858"
Permalink: "/writeups/htb-monitors-858.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Monitors** is rated **Easy** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.96.45.220`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.47.102.72
```

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.31.135.78/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.85.229.235
gobuster dir -u http://10.50.29.38/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **XXE**.

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.3.149/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

```powershell
nmap -sCV -p464,5985,445 10.13.192.159 -oN scan.txt
gobuster dir -u http://10.126.141.227/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.89.55.187/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

```powershell
crackmapexec smb 10.92.40.203 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `nmap`
- `rpcclient`
- `dcomexec`
- `smbexec`
- `enum4linux`
- `nikto`

### Key Takeaways

- XXE
- LAPS Abuse
