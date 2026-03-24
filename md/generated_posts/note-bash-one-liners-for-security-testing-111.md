---
TitleSEO: "Bash One-Liners for Security Testing | ZureFX"
TitlePost: "Bash One-Liners for Security Testing"
Author: "ZureFX"
Description: "Personal notes on Bash One-Liners for Security Testing. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, lateral movement, dfir, blue team, windows"
URL: "https://zurefx.github.io/notes/note-bash-one-liners-for-security-testing-111.html"
URL_IMAGES: ""
Date: "2024-12-30"
Tags: "Persistence, Lateral Movement, DFIR, Blue Team, Windows"
Section: "notes"
Lang: "en"
main_img: "note-bash-one-liners-for-security-testing-111"
Permalink: "/notes/note-bash-one-liners-for-security-testing-111.html"
BtnLabel: "Read Notes"
Pick: 0
---
## NFS No Root Squash

### enum4linux

- `msfvenom`
- `LXD Privilege Escalation`
- `CSRF`
- `ACL Abuse`

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

> **Note:** XXE was identified as the primary attack vector in this scenario.

## SSRF

### burpsuite

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

## PowerShell

### crackmapexec

- `SeDebugPrivilege`
- `Resource-Based Constrained Delegation`
- `socat`

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

```python
nmap -sCV -p389,23,110 10.123.216.60 -oN scan.txt
nmap -sCV -p80,27017,3306 10.113.168.29 -oN scan.txt
crackmapexec smb 10.63.227.187 -u administrator -p 'P@ssw0rd!' --shares
```

## SNMP

### Broken Access Control

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

> **Note:** Remote File Inclusion was identified as the primary attack vector in this scenario.

## C#

### PHP

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

## SeDebugPrivilege

### Silver Ticket

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.
