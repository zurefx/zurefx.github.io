---
TitleSEO: "HackTheBox — Blunder (Medium FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Blunder (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Blunder. SSTI and Cron Job to achieve medium compromise on FreeBSD."
Keywords: "pwntilldawn, insane, ctf, forensics, easy, tryhackme, web"
URL: "https://zurefx.github.io/writeups/htb-blunder-803.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-blunder-803/"
Date: "2026-01-16"
Tags: "PwnTillDawn, Insane, CTF, Forensics, Easy, TryHackMe, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-blunder-803"
Permalink: "/writeups/htb-blunder-803.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Blunder** is rated **Medium** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.127.177.181`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p389,110,135 10.74.130.192 -oN scan.txt
feroxbuster -h
crackmapexec smb 10.44.47.241 -u administrator -p 'P@ssw0rd!' --shares
```

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.46.127.40
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

### Web Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.24.8 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **SSTI**.

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

```bash
nmap -sCV -p389,143,1433 10.110.97.117 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.62.170.222/FUZZ
```

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

```powershell
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.36.238.99/FUZZ
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.65.141.99 -u administrator -p 'P@ssw0rd!' --shares
```

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `ldapsearch`
- `GetNPUsers`
- `rubeus`
- `metasploit`
- `enum4linux`
- `rpcclient`
- `hashcat`
- `psexec`

### Key Takeaways

- SSTI
- Cron Job
- Unquoted Service Path
