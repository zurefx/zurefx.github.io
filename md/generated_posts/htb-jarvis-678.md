---
TitleSEO: "TryHackMe — Jarvis (Easy OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Jarvis (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Jarvis. Open Redirect and Pass the Ticket to achieve easy compromise on OpenBSD."
Keywords: "linux, pwntilldawn, insane, hackthebox, medium, forensics, web"
URL: "https://zurefx.github.io/writeups/htb-jarvis-678.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-jarvis-678/"
Date: "2024-10-10"
Tags: "Linux, PwnTillDawn, Insane, HackTheBox, Medium, Forensics, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-jarvis-678"
Permalink: "/writeups/htb-jarvis-678.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Jarvis** is rated **Easy** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.40.184.8`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.197.73/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.110.11
nmap -sCV -p53,5432,80 10.115.204.179 -oN scan.txt
```

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.114.79.137 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.33.133.37/FUZZ
crackmapexec smb 10.64.144.254 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

### Web Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.24.218.119 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.81.157.27 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

Key finding: **Pass the Ticket**.

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.105.136.211 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.80.88.247/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.81.221.218
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
crackmapexec smb 10.59.17.84 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p5985,135,27017 10.110.54.206 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `smbexec`
- `atexec`
- `burpsuite`
- `secretsdump`
- `hashcat`
- `psexec`

### Key Takeaways

- Open Redirect
- Pass the Ticket
- Docker Escape
