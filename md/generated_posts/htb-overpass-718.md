---
TitleSEO: "PwnTillDawn — Overpass (Medium OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Overpass (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Overpass. AS-REP Roasting and GPP Password to achieve medium compromise on OpenBSD."
Keywords: "forensics, tryhackme, reversing, easy"
URL: "https://zurefx.github.io/writeups/htb-overpass-718.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-overpass-718/"
Date: "2025-03-20"
Tags: "Forensics, TryHackMe, Reversing, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-overpass-718"
Permalink: "/writeups/htb-overpass-718.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Overpass** is rated **Medium** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.107.145.205`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.94.111.75 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.81.247 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
nmap -sCV -p139,110,3268 10.14.212.129 -oN scan.txt
```

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.106.249.249/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

Key finding: **AS-REP Roasting**.

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.191.79/FUZZ
feroxbuster -h
crackmapexec smb 10.23.9.44 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.21.213.207 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

```powershell
crackmapexec smb 10.117.112.238 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.41.193.218 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.60.50.7 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.18.109.77/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `rubeus`
- `smbclient`
- `mimikatz`
- `evil-winrm`
- `nikto`
- `sqlmap`

### Key Takeaways

- AS-REP Roasting
- GPP Password
- DCSync
- Pass the Hash
