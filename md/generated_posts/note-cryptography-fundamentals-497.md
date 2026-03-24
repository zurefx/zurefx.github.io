---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, malware, networking, oscp, lateral movement"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-497.html"
URL_IMAGES: ""
Date: "2025-05-14"
Tags: "Persistence, Malware, Networking, OSCP, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-497"
Permalink: "/notes/note-cryptography-fundamentals-497.html"
BtnLabel: "Read Notes"
Pick: 0
---
## NTLM Relay

### pwncat

> **Note:** SQL Injection was identified as the primary attack vector in this scenario.

- `atexec`
- `ACL Abuse`
- `msfvenom`

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

- `smbexec`
- `Pass the Ticket`
- `john`
- `nmap`
- `dcomexec`
- `atexec`

## XXE

### feroxbuster

> **Note:** Broken Access Control was identified as the primary attack vector in this scenario.

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

- `Weak Service Permissions`
- `Docker Escape`
- `GetNPUsers`
- `Subdomain Takeover`

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

## nikto

### Golden Ticket

> **Note:** GPP Password was identified as the primary attack vector in this scenario.

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

## sqlmap

### Open Redirect

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.125.130.124/FUZZ
nmap -sCV -p3389,389,3389 10.99.62.98 -oN scan.txt
```

- `atexec`
- `rpcclient`
- `pwncat`
- `dcomexec`
- `GetUserSPNs`
