---
TitleSEO: "HackTheBox — Valentine (Insane OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Valentine (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Valentine. Remote Code Execution and LAPS Abuse to achieve insane compromise on OpenBSD."
Keywords: "hard, web, ctf, forensics, offsec, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-valentine-963.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-valentine-963/"
Date: "2025-04-02"
Tags: "Hard, Web, CTF, Forensics, OffSec, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-valentine-963"
Permalink: "/writeups/htb-valentine-963.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Valentine** is rated **Insane** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.62.37.165`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
evil-winrm -i 10.101.101.88 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

```bash
nmap -sCV -p995,5986,9200 10.64.178.250 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

### Web Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.104.107.216 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.49.93.1/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p636,443,5985 10.71.166.222 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **LAPS Abuse**.

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p23,143,389 10.22.153.89 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

```powershell
evil-winrm -i 10.85.112.17 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.53.213.56/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.18.46.93 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.49.232.209/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `rpcclient`
- `burpsuite`
- `nikto`
- `smbexec`
- `nmap`

### Key Takeaways

- Remote Code Execution
- LAPS Abuse
