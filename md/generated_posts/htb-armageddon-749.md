---
TitleSEO: "PwnTillDawn — Armageddon (Medium FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Armageddon (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Armageddon. IDOR and Remote Code Execution to achieve medium compromise on FreeBSD."
Keywords: "easy, linux, active directory, forensics, offsec, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-armageddon-749.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-armageddon-749/"
Date: "2024-10-10"
Tags: "Easy, Linux, Active Directory, Forensics, OffSec, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-armageddon-749"
Permalink: "/writeups/htb-armageddon-749.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Armageddon** is rated **Medium** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.87.63.202`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.122.197.1 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

Key finding: **Unconstrained Delegation**.

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.127.72.188/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.15.67.56 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
nmap -sCV -p636,5432,995 10.20.154.45 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.106.129.37
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.122.160.222 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `ldapsearch`
- `netcat`
- `john`
- `evil-winrm`
- `sqlmap`
- `burpsuite`

### Key Takeaways

- IDOR
- Remote Code Execution
- Unconstrained Delegation
- Broken Access Control
