---
TitleSEO: "OSCP Exam Preparation Notes | ZureFX"
TitlePost: "OSCP Exam Preparation Notes"
Author: "ZureFX"
Description: "Personal notes on OSCP Exam Preparation Notes. Quick reference for pentesting and CTF challenges."
Keywords: "malware, networking, enumeration"
URL: "https://zurefx.github.io/notes/note-oscp-exam-preparation-notes-668.html"
URL_IMAGES: ""
Date: "2026-03-15"
Tags: "Malware, Networking, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-oscp-exam-preparation-notes-668"
Permalink: "/notes/note-oscp-exam-preparation-notes-668.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Broken Access Control

### PHP

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

- `chisel`
- `SUID Binary`
- `ffuf`
- `Sudo Misconfiguration`
- `ligolo-ng`

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

## PostgreSQL

### FTP

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

- `NTLM Relay`
- `Cron Job`
- `DNS Rebinding`

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
gobuster dir -u http://10.23.228.47/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## SNMP

### Joomla

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

- `Remote File Inclusion`
- `Insecure Deserialization`
- `atexec`
- `SSRF`

> **Note:** XSS was identified as the primary attack vector in this scenario.

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.35.75.40/FUZZ
```

## Nginx

### SeImpersonatePrivilege

- `Pass the Ticket`
- `GetUserSPNs`
- `SSTI`

```python
gobuster dir -u http://10.54.94.232/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

> **Note:** SeDebugPrivilege was identified as the primary attack vector in this scenario.

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

## Silver Ticket

### XSS

```bash
nmap -sCV -p636,110,464 10.50.82.28 -oN scan.txt
feroxbuster -h
crackmapexec smb 10.62.238.251 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.184.157/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.
