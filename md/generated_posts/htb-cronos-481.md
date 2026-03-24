---
TitleSEO: "TryHackMe — Cronos (Easy OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Cronos (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Cronos. Silver Ticket and Writable PATH to achieve easy compromise on OpenBSD."
Keywords: "medium, active directory, linux, insane"
URL: "https://zurefx.github.io/writeups/htb-cronos-481.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cronos-481/"
Date: "2024-06-05"
Tags: "Medium, Active Directory, Linux, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-cronos-481"
Permalink: "/writeups/htb-cronos-481.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Cronos** is rated **Easy** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.20.124.170`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p143,3389,3268 10.18.54.210 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.84.72.177/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.71.106.89 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
crackmapexec smb 10.88.116.200 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.52.245.201 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.242.184 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

Key finding: **Writable PATH**.

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.97.181.99/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.65.119.222/FUZZ
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.88.186.133 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p1521,9200,445 10.82.233.85 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `metasploit`
- `sharphound`
- `secretsdump`
- `smbclient`

### Key Takeaways

- Silver Ticket
- Writable PATH
