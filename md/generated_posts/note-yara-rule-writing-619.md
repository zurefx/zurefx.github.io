---
TitleSEO: "YARA Rule Writing | ZureFX"
TitlePost: "YARA Rule Writing"
Author: "ZureFX"
Description: "Personal notes on YARA Rule Writing. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, privilege escalation, networking"
URL: "https://zurefx.github.io/notes/note-yara-rule-writing-619.html"
URL_IMAGES: ""
Date: "2025-05-13"
Tags: "Persistence, Privilege Escalation, Networking"
Section: "notes"
Lang: "en"
main_img: "note-yara-rule-writing-619"
Permalink: "/notes/note-yara-rule-writing-619.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Writable PATH

### ACL Abuse

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.128.48.118/FUZZ
gobuster dir -u http://10.81.245.86/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

- `Remote File Inclusion`
- `IDOR`
- `pwncat`
- `Golden Ticket`
- `Command Injection`

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

## PowerShell

### POP3

- `AS-REP Roasting`
- `AlwaysInstallElevated`
- `SQL Injection`
- `ffuf`
- `LAPS Abuse`

- `netcat`
- `ffuf`
- `chisel`
- `Subdomain Takeover`

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

## Remote File Inclusion

### GPP Password

> **Note:** Remote Code Execution was identified as the primary attack vector in this scenario.

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).
