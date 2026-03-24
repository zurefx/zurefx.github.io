---
TitleSEO: "Active Directory Attack Paths | ZureFX"
TitlePost: "Active Directory Attack Paths"
Author: "ZureFX"
Description: "Personal notes on Active Directory Attack Paths. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, enumeration, lateral movement, malware, linux"
URL: "https://zurefx.github.io/notes/note-active-directory-attack-paths-618.html"
URL_IMAGES: ""
Date: "2024-03-31"
Tags: "Privilege Escalation, Enumeration, Lateral Movement, Malware, Linux"
Section: "notes"
Lang: "en"
main_img: "note-active-directory-attack-paths-618"
Permalink: "/notes/note-active-directory-attack-paths-618.html"
BtnLabel: "Read Notes"
Pick: 0
---
## DLL Hijacking

### SMTP

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

## secretsdump

### Path Traversal

- `netcat`
- `Broken Access Control`
- `Subdomain Takeover`
- `nikto`
- `enum4linux`

- `psexec`
- `Constrained Delegation`
- `CSRF`
- `NTLM Relay`

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.85.220.115
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## MongoDB

### PHP

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.
