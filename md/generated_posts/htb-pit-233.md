---
TitleSEO: "TryHackMe — Pit (Hard Windows) | ZureFX"
TitlePost: "TryHackMe — Pit (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Pit. CORS Misconfiguration and Pass the Hash to achieve hard compromise on Windows."
Keywords: "forensics, hackthebox, pwntilldawn, insane, linux"
URL: "https://zurefx.github.io/writeups/htb-pit-233.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pit-233/"
Date: "2024-02-16"
Tags: "Forensics, HackTheBox, PwnTillDawn, Insane, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-pit-233"
Permalink: "/writeups/htb-pit-233.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Pit** is rated **Hard** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.56.151.40`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.117.77.227
nmap -sCV -p636,636,3389 10.38.97.67 -oN scan.txt
gobuster dir -u http://10.58.7.41/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.74.120.253/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

```bash
nmap -sCV -p8443,3268,587 10.84.1.152 -oN scan.txt
```

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **CORS Misconfiguration**.

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.99.101.55/FUZZ
evil-winrm -i 10.22.35.108 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.31.35.17 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.42.110.11 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.97.69.99
```

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `atexec`
- `socat`
- `GetNPUsers`
- `evil-winrm`
- `kerbrute`
- `sharphound`
- `smbclient`
- `psexec`

### Key Takeaways

- CORS Misconfiguration
- Pass the Hash
- Resource-Based Constrained Delegation
- SeImpersonatePrivilege
