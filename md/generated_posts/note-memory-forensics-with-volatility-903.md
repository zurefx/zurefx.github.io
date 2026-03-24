---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, linux, networking, cheatsheet"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-903.html"
URL_IMAGES: ""
Date: "2024-08-24"
Tags: "Persistence, Linux, Networking, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-903"
Permalink: "/notes/note-memory-forensics-with-volatility-903.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Open Redirect

### Spring

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

> **Note:** CSRF was identified as the primary attack vector in this scenario.

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

## .NET

### CSRF

- `nikto`
- `SSTI`
- `pwncat`
- `LXD Privilege Escalation`

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

```powershell
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.78.127.18 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.43.123.118 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

## NFS No Root Squash

### psexec

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `evil-winrm`
- `Silver Ticket`
- `DNS Rebinding`

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

## Telnet

### Django

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

> **Note:** Pass the Hash was identified as the primary attack vector in this scenario.

## LDAP

### Bash

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.109.7.144 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
gobuster dir -u http://10.20.251.72/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

> **Note:** Pass the Ticket was identified as the primary attack vector in this scenario.

## DLL Hijacking

### Ruby on Rails

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

- `NTLM Relay`
- `evil-winrm`
- `LAPS Abuse`
- `Sudo Misconfiguration`
- `enum4linux`
- `Constrained Delegation`
