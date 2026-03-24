---
TitleSEO: "Active Directory Attack Paths | ZureFX"
TitlePost: "Active Directory Attack Paths"
Author: "ZureFX"
Description: "Personal notes on Active Directory Attack Paths. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, cheatsheet, networking, persistence, linux, lateral movement"
URL: "https://zurefx.github.io/notes/note-active-directory-attack-paths-670.html"
URL_IMAGES: ""
Date: "2024-08-27"
Tags: "OSCP, Cheatsheet, Networking, Persistence, Linux, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-active-directory-attack-paths-670"
Permalink: "/notes/note-active-directory-attack-paths-670.html"
BtnLabel: "Read Notes"
Pick: 0
---
## LXD Privilege Escalation

### bloodhound

- `Unconstrained Delegation`
- `SQL Injection`
- `AS-REP Roasting`
- `psexec`
- `pwncat`

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

## PowerShell

### Constrained Delegation

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

## MongoDB

### mimikatz

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.
