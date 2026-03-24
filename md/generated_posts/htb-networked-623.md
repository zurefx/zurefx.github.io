---
TitleSEO: "OffSec Proving Grounds — Networked (Medium OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Networked (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Networked. LAPS Abuse and SSTI to achieve medium compromise on OpenBSD."
Keywords: "tryhackme, hackthebox, insane, hard, ctf, reversing"
URL: "https://zurefx.github.io/writeups/htb-networked-623.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-networked-623/"
Date: "2025-12-04"
Tags: "TryHackMe, HackTheBox, Insane, Hard, CTF, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-networked-623"
Permalink: "/writeups/htb-networked-623.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Networked** is rated **Medium** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.39.65.143`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.67.95.52 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.56.191.179
```

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.58.4.148 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p22,636,3268 10.88.44.78 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **SSTI**.

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.50.100.245/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.119.43 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```powershell
crackmapexec smb 10.71.163.86 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.75.34.153
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.14.108.194/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.13.128.233/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `nikto`
- `GetUserSPNs`
- `rpcclient`
- `sqlmap`
- `msfvenom`

### Key Takeaways

- LAPS Abuse
- SSTI
- Unconstrained Delegation
- Kerberoasting
