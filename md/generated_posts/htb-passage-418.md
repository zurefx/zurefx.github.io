---
TitleSEO: "HackTheBox — Passage (Insane FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Passage (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Passage. Sudo Misconfiguration and SeImpersonatePrivilege to achieve insane compromise on FreeBSD."
Keywords: "medium, windows, active directory, easy"
URL: "https://zurefx.github.io/writeups/htb-passage-418.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-passage-418/"
Date: "2026-03-23"
Tags: "Medium, Windows, Active Directory, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-passage-418"
Permalink: "/writeups/htb-passage-418.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Passage** is rated **Insane** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.37.194.249`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.92.11.51 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.13.112.124 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.37.87.197 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.57.195.211 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

Key finding: **Sudo Misconfiguration**.

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.70.202.21/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.55.59.241 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```powershell
evil-winrm -i 10.19.242.121 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.70.228.184/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p143,8888,139 10.98.145.150 -oN scan.txt
nmap -sCV -p3268,1433,21 10.103.30.212 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `nmap`
- `chisel`
- `nikto`
- `ldapsearch`

### Key Takeaways

- Sudo Misconfiguration
- SeImpersonatePrivilege
- LAPS Abuse
