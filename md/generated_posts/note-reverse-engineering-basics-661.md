---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, networking, blue team, enumeration, windows, privilege escalation"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-661.html"
URL_IMAGES: ""
Date: "2025-07-29"
Tags: "Lateral Movement, Networking, Blue Team, Enumeration, Windows, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-661"
Permalink: "/notes/note-reverse-engineering-basics-661.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Python

### hydra

- `Writable PATH`
- `Unquoted Service Path`
- `Kerberoasting`
- `Silver Ticket`
- `DLL Hijacking`

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

## IIS

### feroxbuster

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

## GPP Password

### Elasticsearch

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.
