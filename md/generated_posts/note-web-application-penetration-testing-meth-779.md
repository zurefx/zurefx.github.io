---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, windows, enumeration, privilege escalation, persistence, dfir"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-779.html"
URL_IMAGES: ""
Date: "2024-01-14"
Tags: "Blue Team, Windows, Enumeration, Privilege Escalation, Persistence, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-779"
Permalink: "/notes/note-web-application-penetration-testing-meth-779.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Windows Server 2019

### rpcclient

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

## Laravel

### RPC

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

## CMD

### SSRF

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

- `SeDebugPrivilege`
- `SUID Binary`
- `Weak Service Permissions`
