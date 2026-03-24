---
TitleSEO: "Sigma Rule Development | ZureFX"
TitlePost: "Sigma Rule Development"
Author: "ZureFX"
Description: "Personal notes on Sigma Rule Development. Quick reference for pentesting and CTF challenges."
Keywords: "windows, oscp, blue team"
URL: "https://zurefx.github.io/notes/note-sigma-rule-development-631.html"
URL_IMAGES: ""
Date: "2024-03-25"
Tags: "Windows, OSCP, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-sigma-rule-development-631"
Permalink: "/notes/note-sigma-rule-development-631.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Resource-Based Constrained Delegation

### DNS Rebinding

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

> **Note:** DCSync was identified as the primary attack vector in this scenario.

> **Note:** LAPS Abuse was identified as the primary attack vector in this scenario.

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

## SMTP

### IDOR

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.52.225.181 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Laravel

### john

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

> **Note:** Unquoted Service Path was identified as the primary attack vector in this scenario.

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

## feroxbuster

### XSS

- `SeImpersonatePrivilege`
- `Open Redirect`
- `Command Injection`
- `GetNPUsers`
- `Local File Inclusion`

- `XSS`
- `Command Injection`
- `DCSync`
- `CSRF`
- `Silver Ticket`

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.
