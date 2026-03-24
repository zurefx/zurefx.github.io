---
TitleSEO: "Incident Response Playbook | ZureFX"
TitlePost: "Incident Response Playbook"
Author: "ZureFX"
Description: "Personal notes on Incident Response Playbook. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, malware, windows, networking"
URL: "https://zurefx.github.io/notes/note-incident-response-playbook-765.html"
URL_IMAGES: ""
Date: "2024-05-26"
Tags: "OSCP, Malware, Windows, Networking"
Section: "notes"
Lang: "en"
main_img: "note-incident-response-playbook-765"
Permalink: "/notes/note-incident-response-playbook-765.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Python

### LAPS Abuse

```bash
evil-winrm -i 10.72.168.18 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.124.117.59 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

## SSTI

### .NET

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

- `Path Traversal`
- `LAPS Abuse`
- `hydra`

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

## ligolo-ng

### LXD Privilege Escalation

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

- `Path Traversal`
- `chisel`
- `enum4linux`
- `CORS Misconfiguration`
