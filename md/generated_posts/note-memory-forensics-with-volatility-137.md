---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "windows, cheatsheet, privilege escalation"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-137.html"
URL_IMAGES: ""
Date: "2025-12-07"
Tags: "Windows, Cheatsheet, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-137"
Permalink: "/notes/note-memory-forensics-with-volatility-137.html"
BtnLabel: "Read Notes"
Pick: 0
---
## msfvenom

### CentOS

```bash
crackmapexec smb 10.128.83.65 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p1433,1521,27017 10.67.204.242 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.75.162.35 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

- `SSRF`
- `lookupsid`
- `Open Redirect`
- `Insecure Deserialization`
- `SeImpersonatePrivilege`
- `kerbrute`

## Apache

### Node.js

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.119.68.195 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.45.199.41 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p25,5986,5432 10.46.107.29 -oN scan.txt
```

## LAPS Abuse

### AlwaysInstallElevated

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p53,3306,993 10.112.116.128 -oN scan.txt
```

> **Note:** Remote Code Execution was identified as the primary attack vector in this scenario.

```bash
evil-winrm -i 10.65.128.86 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
gobuster dir -u http://10.19.43.93/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

- `DCSync`
- `enum4linux`
- `Insecure Deserialization`

## WinRM

### nikto

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.
