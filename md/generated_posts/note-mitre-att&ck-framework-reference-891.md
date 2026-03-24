---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, blue team, windows, enumeration"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-891.html"
URL_IMAGES: ""
Date: "2024-02-03"
Tags: "Lateral Movement, Blue Team, Windows, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-891"
Permalink: "/notes/note-mitre-att&ck-framework-reference-891.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Debian

### sharphound

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

## SSH

### SMTP

- `GetUserSPNs`
- `smbexec`
- `Unconstrained Delegation`
- `AS-REP Roasting`
- `rpcclient`

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

## Apache

### NFS No Root Squash

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

- `Sudo Misconfiguration`
- `evil-winrm`
- `NTLM Relay`
- `mimikatz`

## msfvenom

### CentOS

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

> **Note:** IDOR was identified as the primary attack vector in this scenario.
