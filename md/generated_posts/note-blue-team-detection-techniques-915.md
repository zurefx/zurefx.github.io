---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, lateral movement, networking"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-915.html"
URL_IMAGES: ""
Date: "2026-01-24"
Tags: "DFIR, Lateral Movement, Networking"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-915"
Permalink: "/notes/note-blue-team-detection-techniques-915.html"
BtnLabel: "Read Notes"
Pick: 0
---
## CMD

### GetUserSPNs

- `SeImpersonatePrivilege`
- `bloodhound`
- `XSS`
- `DCSync`
- `Silver Ticket`
- `Insecure Deserialization`

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.20.41.118/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.166.33 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.99.65.31 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.106.156.232 -u administrator -p 'P@ssw0rd!'
```

## kerbrute

### Subdomain Takeover

> **Note:** LXD Privilege Escalation was identified as the primary attack vector in this scenario.

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

- `rubeus`
- `Golden Ticket`
- `atexec`
- `gobuster`

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

## Kali Linux

### SSTI

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

## Active Directory

### ldapsearch

> **Note:** SSRF was identified as the primary attack vector in this scenario.

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.
