---
TitleSEO: "Common CTF Tricks and Techniques | ZureFX"
TitlePost: "Common CTF Tricks and Techniques"
Author: "ZureFX"
Description: "Personal notes on Common CTF Tricks and Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "linux, privilege escalation, cheatsheet, dfir"
URL: "https://zurefx.github.io/notes/note-common-ctf-tricks-and-techniques-833.html"
URL_IMAGES: ""
Date: "2024-02-16"
Tags: "Linux, Privilege Escalation, Cheatsheet, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-common-ctf-tricks-and-techniques-833"
Permalink: "/notes/note-common-ctf-tricks-and-techniques-833.html"
BtnLabel: "Read Notes"
Pick: 0
---
## evil-winrm

### gobuster

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

## Docker Escape

### Subdomain Takeover

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

> **Note:** Pass the Ticket was identified as the primary attack vector in this scenario.

## enum4linux

### Weak Service Permissions

- `secretsdump`
- `mimikatz`
- `Broken Access Control`
- `Unquoted Service Path`
- `Insecure Deserialization`
- `NFS No Root Squash`

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

## lookupsid

### SNMP

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

- `ligolo-ng`
- `crackmapexec`
- `mimikatz`
- `Writable PATH`
- `Silver Ticket`
- `Pass the Hash`

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.
