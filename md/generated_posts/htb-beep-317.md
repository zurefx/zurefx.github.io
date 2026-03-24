---
TitleSEO: "HackTheBox — Beep (Medium OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Beep (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Beep. SSTI and Subdomain Takeover to achieve medium compromise on OpenBSD."
Keywords: "insane, easy, active directory"
URL: "https://zurefx.github.io/writeups/htb-beep-317.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-beep-317/"
Date: "2024-02-08"
Tags: "Insane, Easy, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-beep-317"
Permalink: "/writeups/htb-beep-317.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Beep** is rated **Medium** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.50.126.219`.

### Objectives

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

```bash
evil-winrm -i 10.113.22.85 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5986,993,993 10.57.32.204 -oN scan.txt
nmap -sCV -p8443,464,80 10.16.171.197 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.65.200.70
```

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.13.34.203
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Subdomain Takeover**.

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
crackmapexec smb 10.91.77.27 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.90.130.190 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
nmap -sCV -p464,3306,135 10.50.237.164 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.78.206.73/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.114.202.125/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `psexec`
- `nikto`
- `ldapsearch`
- `crackmapexec`

### Key Takeaways

- SSTI
- Subdomain Takeover
