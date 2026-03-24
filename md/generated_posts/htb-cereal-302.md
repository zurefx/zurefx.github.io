---
TitleSEO: "PwnTillDawn — Cereal (Easy Windows) | ZureFX"
TitlePost: "PwnTillDawn — Cereal (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Cereal. AS-REP Roasting and IDOR to achieve easy compromise on Windows."
Keywords: "pwntilldawn, hard, active directory, linux"
URL: "https://zurefx.github.io/writeups/htb-cereal-302.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cereal-302/"
Date: "2024-08-06"
Tags: "PwnTillDawn, Hard, Active Directory, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-cereal-302"
Permalink: "/writeups/htb-cereal-302.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Cereal** is rated **Easy** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.39.53.40`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.75.153.30
```

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.234.243/FUZZ
feroxbuster -h
nmap -sCV -p22,464,27017 10.60.26.127 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.100.227 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Kerberoasting**.

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.116.149.37/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.87.209 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

```powershell
crackmapexec smb 10.95.79.80 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.94.243.53
evil-winrm -i 10.15.67.132 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `rpcclient`
- `ffuf`
- `socat`
- `psexec`
- `impacket`
- `evil-winrm`
- `wpscan`

### Key Takeaways

- AS-REP Roasting
- IDOR
- Kerberoasting
- SSRF
