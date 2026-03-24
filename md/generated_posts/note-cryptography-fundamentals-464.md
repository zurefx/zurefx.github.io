---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "malware, cheatsheet, windows, oscp, dfir, linux"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-464.html"
URL_IMAGES: ""
Date: "2025-12-03"
Tags: "Malware, Cheatsheet, Windows, OSCP, DFIR, Linux"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-464"
Permalink: "/notes/note-cryptography-fundamentals-464.html"
BtnLabel: "Read Notes"
Pick: 0
---
## PostgreSQL

### atexec

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

- `Writable PATH`
- `msfvenom`
- `XXE`
- `ldapsearch`
- `XSS`

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

```bash
nmap -sCV -p3268,1433,27017 10.41.205.100 -oN scan.txt
crackmapexec smb 10.115.91.221 -u administrator -p 'P@ssw0rd!' --shares
```

## MongoDB

### Flask

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
crackmapexec smb 10.105.139.137 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.68.242.190 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

## Redis

### POP3

- `hydra`
- `SSTI`
- `crackmapexec`
- `DCSync`

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

## XSS

### wpscan

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

- `Resource-Based Constrained Delegation`
- `john`
- `Unquoted Service Path`
- `XSS`
- `SUID Binary`
- `Path Traversal`

- `sharphound`
- `SeImpersonatePrivilege`
- `chisel`
- `ACL Abuse`

> **Note:** DCSync was identified as the primary attack vector in this scenario.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.66.106.134 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.87.133.18 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.91.145.45 -u administrator -p 'P@ssw0rd!' --shares
```
