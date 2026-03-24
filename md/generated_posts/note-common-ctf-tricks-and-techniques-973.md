---
TitleSEO: "Common CTF Tricks and Techniques | ZureFX"
TitlePost: "Common CTF Tricks and Techniques"
Author: "ZureFX"
Description: "Personal notes on Common CTF Tricks and Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "windows, persistence, enumeration, lateral movement"
URL: "https://zurefx.github.io/notes/note-common-ctf-tricks-and-techniques-973.html"
URL_IMAGES: ""
Date: "2024-01-28"
Tags: "Windows, Persistence, Enumeration, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-common-ctf-tricks-and-techniques-973"
Permalink: "/notes/note-common-ctf-tricks-and-techniques-973.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Ruby on Rails

### Golden Ticket

> **Note:** SSTI was identified as the primary attack vector in this scenario.

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

## CMD

### NTLM Relay

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

## SSH

### PostgreSQL

```python
evil-winrm -i 10.99.24.170 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.117.158.83
```

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## chisel

### SMB

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

- `socat`
- `Writable PATH`
- `kerbrute`
- `DCSync`
- `secretsdump`

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.
