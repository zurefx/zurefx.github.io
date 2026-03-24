---
TitleSEO: "VulnHub — Devel (Easy Windows) | ZureFX"
TitlePost: "VulnHub — Devel (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Devel. DLL Hijacking and Pass the Hash to achieve easy compromise on Windows."
Keywords: "tryhackme, easy, insane, reversing, forensics, linux"
URL: "https://zurefx.github.io/writeups/htb-devel-663.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-devel-663/"
Date: "2026-01-08"
Tags: "TryHackMe, Easy, Insane, Reversing, Forensics, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-devel-663"
Permalink: "/writeups/htb-devel-663.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Devel** is rated **Easy** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.77.45.231`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p1433,23,80 10.28.202.211 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.101.83.46 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.18.170.141/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
gobuster dir -u http://10.23.97.231/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

Key finding: **DLL Hijacking**.

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.38.170.232 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.67.123
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
gobuster dir -u http://10.11.20.26/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p993,80,143 10.109.88.165 -oN scan.txt
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.46.59.107/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `ldapsearch`
- `lookupsid`
- `evil-winrm`
- `hashcat`

### Key Takeaways

- DLL Hijacking
- Pass the Hash
