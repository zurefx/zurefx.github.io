---
TitleSEO: "VulnHub — Bolt (Insane FreeBSD) | ZureFX"
TitlePost: "VulnHub — Bolt (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Bolt. Docker Escape and Sudo Misconfiguration to achieve insane compromise on FreeBSD."
Keywords: "hard, medium, active directory, web, ctf, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-bolt-183.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-bolt-183/"
Date: "2024-02-15"
Tags: "Hard, Medium, Active Directory, Web, CTF, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-bolt-183"
Permalink: "/writeups/htb-bolt-183.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Bolt** is rated **Insane** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.56.97.162`.

### Objectives

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p21,25,3268 10.73.143.18 -oN scan.txt
crackmapexec smb 10.53.19.103 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

### Web Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
crackmapexec smb 10.91.50.210 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Sudo Misconfiguration**.

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.15.187.182/FUZZ
gobuster dir -u http://10.65.212.152/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

```powershell
crackmapexec smb 10.103.186.64 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.91.3.144/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `secretsdump`
- `wmiexec`
- `chisel`
- `rubeus`

### Key Takeaways

- Docker Escape
- Sudo Misconfiguration
- Cron Job
