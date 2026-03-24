---
TitleSEO: "HackTheBox — Bastard (Easy Linux) | ZureFX"
TitlePost: "HackTheBox — Bastard (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Bastard. SeImpersonatePrivilege and SSTI to achieve easy compromise on Linux."
Keywords: "hard, forensics, active directory, pwntilldawn, easy"
URL: "https://zurefx.github.io/writeups/htb-bastard-939.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-bastard-939/"
Date: "2026-01-15"
Tags: "Hard, Forensics, Active Directory, PwnTillDawn, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-bastard-939"
Permalink: "/writeups/htb-bastard-939.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Bastard** is rated **Easy** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.88.230.137`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.51.164.202 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.56.3.51/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.30.121.234/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.22.174.134
gobuster dir -u http://10.31.223.22/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.15.3.215
```

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Kerberoasting**.

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.79.82.156 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.14.239.194/FUZZ
nmap -sCV -p1433,445,1433 10.53.25.136 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.114.236.202 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.128.224.67/FUZZ
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.46.245.248 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `impacket`
- `john`
- `nikto`
- `GetNPUsers`

### Key Takeaways

- SeImpersonatePrivilege
- SSTI
- Kerberoasting
