---
TitleSEO: "Sigma Rule Development | ZureFX"
TitlePost: "Sigma Rule Development"
Author: "ZureFX"
Description: "Personal notes on Sigma Rule Development. Quick reference for pentesting and CTF challenges."
Keywords: "networking, linux, windows, cheatsheet"
URL: "https://zurefx.github.io/notes/note-sigma-rule-development-102.html"
URL_IMAGES: ""
Date: "2025-04-24"
Tags: "Networking, Linux, Windows, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-sigma-rule-development-102"
Permalink: "/notes/note-sigma-rule-development-102.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SUID Binary

### hashcat

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
feroxbuster -h
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.11.147.15/FUZZ
```

```powershell
evil-winrm -i 10.100.46.119 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.52.193.102 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.106.51.132/FUZZ
```

## GetNPUsers

### Unconstrained Delegation

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.71.29.27 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.33.79.67 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
crackmapexec smb 10.125.98.167 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.64.217.107 -u administrator -p 'P@ssw0rd!'
```

## DCSync

### Silver Ticket

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

- `Remote File Inclusion`
- `Sudo Misconfiguration`
- `SeImpersonatePrivilege`
- `DCSync`
- `socat`
- `impacket`

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

> **Note:** SQL Injection was identified as the primary attack vector in this scenario.

```bash
feroxbuster -h
nmap -sCV -p27017,25,139 10.88.134.14 -oN scan.txt
evil-winrm -i 10.100.196.172 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

## AlwaysInstallElevated

### HTTPS

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.235.74 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.73.138.98/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.114.239.187 -u administrator -p 'P@ssw0rd!' --shares
```

## sharphound

### rpcclient

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.79.75.199/FUZZ
evil-winrm -i 10.103.98.151 -u administrator -p 'P@ssw0rd!'
```

```bash
feroxbuster -h
crackmapexec smb 10.36.134.139 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.32.14.222
crackmapexec smb 10.14.237.242 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.
