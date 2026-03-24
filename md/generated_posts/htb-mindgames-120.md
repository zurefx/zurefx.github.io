---
TitleSEO: "HackTheBox — Mindgames (Insane OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Mindgames (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Mindgames. Silver Ticket and Remote File Inclusion to achieve insane compromise on OpenBSD."
Keywords: "windows, medium, offsec"
URL: "https://zurefx.github.io/writeups/htb-mindgames-120.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-120/"
Date: "2026-01-25"
Tags: "Windows, Medium, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-120"
Permalink: "/writeups/htb-mindgames-120.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mindgames** is rated **Insane** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.96.43.115`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.3.222/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.61.181/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.68.160.87/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.15.203.9/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.86.99.159 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.34.76.166 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.115.22.159 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.97.130.137 -u administrator -p 'P@ssw0rd!' --shares
```

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.119.79.156/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

Key finding: **Golden Ticket**.

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
gobuster dir -u http://10.103.189.2/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p3306,8888,3389 10.83.238.136 -oN scan.txt
gobuster dir -u http://10.52.174.183/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```powershell
feroxbuster -h
nmap -sCV -p445,8888,3268 10.19.65.197 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.32.164.123/FUZZ
```

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `hydra`
- `smbexec`
- `wmiexec`
- `impacket`

### Key Takeaways

- Silver Ticket
- Remote File Inclusion
- Golden Ticket
