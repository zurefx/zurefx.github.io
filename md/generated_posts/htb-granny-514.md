---
TitleSEO: "PwnTillDawn — Granny (Medium OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Granny (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Granny. Subdomain Takeover and Insecure Deserialization to achieve medium compromise on OpenBSD."
Keywords: "hard, insane, forensics"
URL: "https://zurefx.github.io/writeups/htb-granny-514.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-granny-514/"
Date: "2025-09-13"
Tags: "Hard, Insane, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-granny-514"
Permalink: "/writeups/htb-granny-514.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Granny** is rated **Medium** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.100.159.168`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.54.33.16/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.13.109.241
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.112.220
```

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.35.227.147/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

```bash
crackmapexec smb 10.113.51.248 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.40.159.34/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Insecure Deserialization**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.93.143.167 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

```powershell
nmap -sCV -p8080,464,53 10.80.111.87 -oN scan.txt
gobuster dir -u http://10.125.238.77/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p445,135,8443 10.93.74.48 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.85.197.72 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.19.42.93/FUZZ
evil-winrm -i 10.99.175.55 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.79.61.147 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `nmap`
- `crackmapexec`
- `msfvenom`
- `GetUserSPNs`
- `netcat`
- `socat`
- `dcomexec`

### Key Takeaways

- Subdomain Takeover
- Insecure Deserialization
