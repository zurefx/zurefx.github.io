---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, networking, malware, privilege escalation"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-247.html"
URL_IMAGES: ""
Date: "2024-08-17"
Tags: "Cheatsheet, Networking, Malware, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-247"
Permalink: "/notes/note-digital-forensics-methodology-247.html"
BtnLabel: "Read Notes"
Pick: 0
---
## XSS

### nikto

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

- `enum4linux`
- `wpscan`
- `hashcat`

## PHP

### Unconstrained Delegation

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

- `SSTI`
- `sqlmap`
- `Remote Code Execution`
- `Weak Service Permissions`
- `wmiexec`
- `Subdomain Takeover`

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.157.39
```

## Kerberoasting

### pwncat

> **Note:** ACL Abuse was identified as the primary attack vector in this scenario.

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.
