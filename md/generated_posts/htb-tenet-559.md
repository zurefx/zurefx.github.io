---
TitleSEO: "VulnHub — Tenet (Medium FreeBSD) | ZureFX"
TitlePost: "VulnHub — Tenet (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Tenet. Cron Job and Weak Service Permissions to achieve medium compromise on FreeBSD."
Keywords: "active directory, tryhackme, hard, hackthebox, ctf, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-tenet-559.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tenet-559/"
Date: "2024-10-06"
Tags: "Active Directory, TryHackMe, Hard, HackTheBox, CTF, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-tenet-559"
Permalink: "/writeups/htb-tenet-559.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tenet** is rated **Medium** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.73.80.128`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.57.127.194 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.63.186.175/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.63.26.150/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.68.134.173/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **AlwaysInstallElevated**.

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.32.26.108/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.75.72.51/FUZZ
evil-winrm -i 10.13.83.236 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

### Exploitation

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.122.220.18
nmap -sCV -p110,445,25 10.105.204.60 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `GetNPUsers`
- `evil-winrm`
- `dcomexec`
- `hashcat`

### Key Takeaways

- Cron Job
- Weak Service Permissions
- AlwaysInstallElevated
