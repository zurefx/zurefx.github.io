---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, persistence, oscp, linux, blue team, lateral movement"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-782.html"
URL_IMAGES: ""
Date: "2025-12-21"
Tags: "Privilege Escalation, Persistence, OSCP, Linux, Blue Team, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-782"
Permalink: "/notes/note-powershell-for-red-teamers-782.html"
BtnLabel: "Read Notes"
Pick: 0
---
## kerbrute

### Apache

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

## msfvenom

### Active Directory

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

- `nikto`
- `gobuster`
- `Pass the Ticket`
- `Unconstrained Delegation`
- `nmap`
- `crackmapexec`

## Python

### DCSync

- `Pass the Ticket`
- `Command Injection`
- `SeImpersonatePrivilege`
- `hydra`

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

- `IDOR`
- `Kerberoasting`
- `SeImpersonatePrivilege`
- `crackmapexec`
- `socat`
- `bloodhound`

## HTTPS

### SNMP

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

## Elasticsearch

### enum4linux

- `SeImpersonatePrivilege`
- `nmap`
- `evil-winrm`
- `SQL Injection`
- `Golden Ticket`
- `atexec`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.76.250.59
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.
