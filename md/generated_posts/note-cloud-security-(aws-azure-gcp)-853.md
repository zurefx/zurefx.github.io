---
TitleSEO: "Cloud Security (AWS/Azure/GCP) | ZureFX"
TitlePost: "Cloud Security (AWS/Azure/GCP)"
Author: "ZureFX"
Description: "Personal notes on Cloud Security (AWS/Azure/GCP). Quick reference for pentesting and CTF challenges."
Keywords: "blue team, linux, windows, oscp, dfir, malware"
URL: "https://zurefx.github.io/notes/note-cloud-security-(aws-azure-gcp)-853.html"
URL_IMAGES: ""
Date: "2025-11-12"
Tags: "Blue Team, Linux, Windows, OSCP, DFIR, Malware"
Section: "notes"
Lang: "en"
main_img: "note-cloud-security-(aws-azure-gcp)-853"
Permalink: "/notes/note-cloud-security-(aws-azure-gcp)-853.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Command Injection

### Open Redirect

> **Note:** DLL Hijacking was identified as the primary attack vector in this scenario.

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

## IMAP

### Kerberos

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

- `IDOR`
- `SUID Binary`
- `DCSync`
- `evil-winrm`

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

- `psexec`
- `Sudo Misconfiguration`
- `wmiexec`
- `SQL Injection`

## Insecure Deserialization

### nikto

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.
