---
TitleSEO: "VulnHub — Ophiuchi (Hard FreeBSD) | ZureFX"
TitlePost: "VulnHub — Ophiuchi (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Ophiuchi. Path Traversal and AlwaysInstallElevated to achieve hard compromise on FreeBSD."
Keywords: "hard, linux, pwntilldawn, web, ctf"
URL: "https://zurefx.github.io/writeups/htb-ophiuchi-664.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ophiuchi-664/"
Date: "2024-08-28"
Tags: "Hard, Linux, PwnTillDawn, Web, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-ophiuchi-664"
Permalink: "/writeups/htb-ophiuchi-664.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ophiuchi** is rated **Hard** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.70.52.222`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.111.171.139 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.46.138.162/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

### Web Enumeration

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.3.9/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.108.237.80
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.109.246.91/FUZZ
crackmapexec smb 10.35.154.218 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Path Traversal**.

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.88.143.11 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
evil-winrm -i 10.99.231.159 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `nmap`
- `john`
- `hydra`
- `psexec`
- `pwncat`
- `smbexec`
- `ldapsearch`

### Key Takeaways

- Path Traversal
- AlwaysInstallElevated
- AS-REP Roasting
- Unquoted Service Path
