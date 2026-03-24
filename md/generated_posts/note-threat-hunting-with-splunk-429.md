---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, enumeration, blue team, linux, dfir, privilege escalation"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-429.html"
URL_IMAGES: ""
Date: "2024-02-16"
Tags: "Lateral Movement, Enumeration, Blue Team, Linux, DFIR, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-429"
Permalink: "/notes/note-threat-hunting-with-splunk-429.html"
BtnLabel: "Read Notes"
Pick: 0
---
## CORS Misconfiguration

### SMTP

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.120.220.214/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Path Traversal

### Flask

- `XXE`
- `SSRF`
- `DNS Rebinding`

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

- `ffuf`
- `XSS`
- `ligolo-ng`
- `Kerberoasting`
- `Cron Job`

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

## john

### Bash

- `Command Injection`
- `hydra`
- `enum4linux`
- `SeDebugPrivilege`

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

- `burpsuite`
- `rpcclient`
- `Command Injection`
- `impacket`

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.
