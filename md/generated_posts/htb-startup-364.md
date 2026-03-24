---
TitleSEO: "OffSec Proving Grounds — Startup (Medium OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Startup (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Startup. AlwaysInstallElevated and Constrained Delegation to achieve medium compromise on OpenBSD."
Keywords: "medium, offsec, pwntilldawn, insane, windows"
URL: "https://zurefx.github.io/writeups/htb-startup-364.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-startup-364/"
Date: "2025-11-16"
Tags: "Medium, OffSec, PwnTillDawn, Insane, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-startup-364"
Permalink: "/writeups/htb-startup-364.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Startup** is rated **Medium** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.112.153.97`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.107.210.42
```

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p143,1521,993 10.61.38.121 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.109.243.89/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.85.13.96 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.136.139 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.16.125.1/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **Constrained Delegation**.

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.107.87.36 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

```powershell
gobuster dir -u http://10.69.34.129/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p8888,5985,25 10.83.100.15 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.127.218.45 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
nmap -sCV -p22,995,9200 10.31.54.204 -oN scan.txt
crackmapexec smb 10.10.86.72 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `john`
- `kerbrute`
- `impacket`
- `nmap`
- `enum4linux`
- `netcat`
- `gobuster`
- `rpcclient`

### Key Takeaways

- AlwaysInstallElevated
- Constrained Delegation
