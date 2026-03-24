---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, malware, lateral movement"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-337.html"
URL_IMAGES: ""
Date: "2026-01-12"
Tags: "Enumeration, Malware, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-337"
Permalink: "/notes/note-reverse-engineering-basics-337.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Insecure Deserialization

### ldapsearch

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

## CMD

### evil-winrm

```bash
nmap -sCV -p143,3268,464 10.78.230.205 -oN scan.txt
feroxbuster -h
```

- `GPP Password`
- `hydra`
- `Golden Ticket`

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

## Elasticsearch

### smbclient

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.
