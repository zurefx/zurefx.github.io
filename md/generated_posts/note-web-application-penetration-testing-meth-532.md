---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, oscp, lateral movement, networking, linux, malware"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-532.html"
URL_IMAGES: ""
Date: "2024-06-12"
Tags: "Blue Team, OSCP, Lateral Movement, Networking, Linux, Malware"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-532"
Permalink: "/notes/note-web-application-penetration-testing-meth-532.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Active Directory

### Spring

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

## PowerShell

### gobuster

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

- `nikto`
- `Golden Ticket`
- `GetNPUsers`
- `Remote File Inclusion`
- `DCSync`

## Python

### LAPS Abuse

- `Writable PATH`
- `nmap`
- `hashcat`

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

## LXD Privilege Escalation

### POP3

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.129.179 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

- `Local File Inclusion`
- `CORS Misconfiguration`
- `IDOR`
- `AS-REP Roasting`
- `SUID Binary`
- `mimikatz`

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).
