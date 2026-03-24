---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "linux, lateral movement, blue team"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-901.html"
URL_IMAGES: ""
Date: "2026-03-01"
Tags: "Linux, Lateral Movement, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-901"
Permalink: "/notes/note-reverse-engineering-basics-901.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Docker Escape

### nmap

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

- `ffuf`
- `Open Redirect`
- `Unconstrained Delegation`
- `NFS No Root Squash`
- `Cron Job`

- `Silver Ticket`
- `Constrained Delegation`
- `impacket`
- `Path Traversal`
- `smbclient`
- `msfvenom`

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

- `SUID Binary`
- `Writable PATH`
- `kerbrute`
- `Weak Service Permissions`
- `sharphound`

## HTTPS

### CSRF

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

```bash
feroxbuster -h
feroxbuster -h
```

## Constrained Delegation

### smbexec

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
evil-winrm -i 10.126.161.144 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.29.73.146
evil-winrm -i 10.63.242.246 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

## LDAP

### CentOS

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.
