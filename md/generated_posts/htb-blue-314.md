---
TitleSEO: "VulnHub — Blue (Medium Linux) | ZureFX"
TitlePost: "VulnHub — Blue (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Blue. SQL Injection and Weak Service Permissions to achieve medium compromise on Linux."
Keywords: "windows, offsec, easy, pwntilldawn, hackthebox, forensics, hard"
URL: "https://zurefx.github.io/writeups/htb-blue-314.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-blue-314/"
Date: "2024-12-03"
Tags: "Windows, OffSec, Easy, PwnTillDawn, HackTheBox, Forensics, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-blue-314"
Permalink: "/writeups/htb-blue-314.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Blue** is rated **Medium** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.49.26.200`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.234.13/FUZZ
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.99.88.220/FUZZ
feroxbuster -h
gobuster dir -u http://10.89.18.193/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

Key finding: **XXE**.

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.127.216.17/FUZZ
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.124.236.113 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.112.183.120 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.91.112.45/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.44.187.92 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `GetUserSPNs`
- `ffuf`
- `rpcclient`
- `evil-winrm`
- `dcomexec`
- `burpsuite`
- `wpscan`
- `nikto`

### Key Takeaways

- SQL Injection
- Weak Service Permissions
- XXE
- Silver Ticket
