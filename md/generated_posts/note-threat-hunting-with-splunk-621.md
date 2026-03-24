---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "malware, privilege escalation, networking, dfir, lateral movement"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-621.html"
URL_IMAGES: ""
Date: "2025-08-03"
Tags: "Malware, Privilege Escalation, Networking, DFIR, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-621"
Permalink: "/notes/note-threat-hunting-with-splunk-621.html"
BtnLabel: "Read Notes"
Pick: 0
---
## C#

### Broken Access Control

- `john`
- `Pass the Hash`
- `nikto`

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

- `CSRF`
- `Remote File Inclusion`
- `Resource-Based Constrained Delegation`

> **Note:** LAPS Abuse was identified as the primary attack vector in this scenario.

## HTTP

### POP3

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

- `LAPS Abuse`
- `Subdomain Takeover`
- `Insecure Deserialization`
- `Sudo Misconfiguration`
- `sqlmap`
- `psexec`

- `secretsdump`
- `DCSync`
- `GetNPUsers`

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

## impacket

### Golden Ticket

```powershell
crackmapexec smb 10.94.162.229 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
crackmapexec smb 10.19.34.102 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.128.216.50 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.12.91.222 -u administrator -p 'P@ssw0rd!' --shares
```

## chisel

### rpcclient

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).
