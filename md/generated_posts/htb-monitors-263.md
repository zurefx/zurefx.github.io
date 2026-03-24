---
TitleSEO: "VulnHub — Monitors (Hard FreeBSD) | ZureFX"
TitlePost: "VulnHub — Monitors (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Monitors. XXE and Remote File Inclusion to achieve hard compromise on FreeBSD."
Keywords: "hard, tryhackme, forensics, offsec, easy, windows, ctf"
URL: "https://zurefx.github.io/writeups/htb-monitors-263.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-monitors-263/"
Date: "2025-08-17"
Tags: "Hard, TryHackMe, Forensics, OffSec, Easy, Windows, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-monitors-263"
Permalink: "/writeups/htb-monitors-263.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Monitors** is rated **Hard** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.35.18.152`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.35.133.117 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.90.57.247 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p80,3268,5432 10.82.19.231 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

Key finding: **LXD Privilege Escalation**.

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.16.166.240 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.27.209.25/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.109.67.194
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.67.148.80/FUZZ
```

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

```powershell
nmap -sCV -p3306,3306,1433 10.123.174.225 -oN scan.txt
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

```powershell
evil-winrm -i 10.113.99.141 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.98.152.239/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.43.222.29 -u administrator -p 'P@ssw0rd!' --shares
```

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `socat`
- `ligolo-ng`
- `metasploit`
- `chisel`
- `smbexec`
- `wpscan`
- `ffuf`

### Key Takeaways

- XXE
- Remote File Inclusion
- LXD Privilege Escalation
- IDOR
