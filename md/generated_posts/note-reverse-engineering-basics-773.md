---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, cheatsheet, malware, enumeration, windows, persistence"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-773.html"
URL_IMAGES: ""
Date: "2024-07-31"
Tags: "Privilege Escalation, Cheatsheet, Malware, Enumeration, Windows, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-773"
Permalink: "/notes/note-reverse-engineering-basics-773.html"
BtnLabel: "Read Notes"
Pick: 0
---
## ACL Abuse

### Open Redirect

```python
crackmapexec smb 10.72.137.64 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

## DNS

### Django

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.1.23
```

- `Pass the Hash`
- `kerbrute`
- `Local File Inclusion`
- `Pass the Ticket`
- `Command Injection`
- `psexec`

## chisel

### Broken Access Control

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Drupal

### Node.js

- `AS-REP Roasting`
- `SQL Injection`
- `impacket`

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.
