---
TitleSEO: "Incident Response Playbook | ZureFX"
TitlePost: "Incident Response Playbook"
Author: "ZureFX"
Description: "Personal notes on Incident Response Playbook. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, dfir, enumeration, blue team"
URL: "https://zurefx.github.io/notes/note-incident-response-playbook-194.html"
URL_IMAGES: ""
Date: "2025-03-07"
Tags: "Cheatsheet, DFIR, Enumeration, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-incident-response-playbook-194"
Permalink: "/notes/note-incident-response-playbook-194.html"
BtnLabel: "Read Notes"
Pick: 0
---
## AS-REP Roasting

### CentOS

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

## DNS Rebinding

### msfvenom

```bash
gobuster dir -u http://10.85.44.225/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p139,53,3306 10.65.101.28 -oN scan.txt
crackmapexec smb 10.18.139.12 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

- `sqlmap`
- `NTLM Relay`
- `SeDebugPrivilege`
- `smbexec`
- `ACL Abuse`

## IDOR

### Docker Escape

- `SeImpersonatePrivilege`
- `sqlmap`
- `Docker Escape`

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p443,993,587 10.102.154.15 -oN scan.txt
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.
