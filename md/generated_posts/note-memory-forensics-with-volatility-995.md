---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "windows, oscp, cheatsheet"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-995.html"
URL_IMAGES: ""
Date: "2024-04-05"
Tags: "Windows, OSCP, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-995"
Permalink: "/notes/note-memory-forensics-with-volatility-995.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Kerberoasting

### FTP

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

> **Note:** CORS Misconfiguration was identified as the primary attack vector in this scenario.

## SQL Injection

### WinRM

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.13.12.89
gobuster dir -u http://10.65.176.3/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.35.119.84 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.46.234.193/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

```bash
gobuster dir -u http://10.70.185.217/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.97.125.127 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.91.57.22/FUZZ
feroxbuster -h
```

## PostgreSQL

### DCSync

- `XSS`
- `ldapsearch`
- `Local File Inclusion`

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.13.205.96/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.91.35.164 -u administrator -p 'P@ssw0rd!' --shares
```
