---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, linux, oscp, malware, persistence, cheatsheet"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-479.html"
URL_IMAGES: ""
Date: "2025-08-30"
Tags: "Lateral Movement, Linux, OSCP, Malware, Persistence, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-479"
Permalink: "/notes/note-threat-hunting-with-splunk-479.html"
BtnLabel: "Read Notes"
Pick: 0
---
## DLL Hijacking

### Subdomain Takeover

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

> **Note:** GPP Password was identified as the primary attack vector in this scenario.

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

## Apache

### wpscan

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

## SSTI

### Weak Service Permissions

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

- `Silver Ticket`
- `XXE`
- `crackmapexec`
- `ffuf`
- `enum4linux`

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Active Directory

### atexec

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

## Python

### DCSync

```python
crackmapexec smb 10.104.5.127 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.124.122.201
feroxbuster -h
evil-winrm -i 10.36.212.222 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

```powershell
feroxbuster -h
```
