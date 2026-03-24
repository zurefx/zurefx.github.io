---
TitleSEO: "OSCP Exam Preparation Notes | ZureFX"
TitlePost: "OSCP Exam Preparation Notes"
Author: "ZureFX"
Description: "Personal notes on OSCP Exam Preparation Notes. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, dfir, oscp, privilege escalation, blue team"
URL: "https://zurefx.github.io/notes/note-oscp-exam-preparation-notes-619.html"
URL_IMAGES: ""
Date: "2025-04-30"
Tags: "Persistence, DFIR, OSCP, Privilege Escalation, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-oscp-exam-preparation-notes-619"
Permalink: "/notes/note-oscp-exam-preparation-notes-619.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Unquoted Service Path

### NTLM Relay

- `psexec`
- `GPP Password`
- `GetUserSPNs`

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `XSS`
- `Sudo Misconfiguration`
- `crackmapexec`
- `metasploit`

## Constrained Delegation

### MySQL

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

> **Note:** DNS Rebinding was identified as the primary attack vector in this scenario.

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

- `burpsuite`
- `AS-REP Roasting`
- `ldapsearch`
- `Unquoted Service Path`

## SSTI

### CORS Misconfiguration

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

- `Remote Code Execution`
- `NFS No Root Squash`
- `ffuf`
- `SUID Binary`
- `mimikatz`
- `NTLM Relay`

```bash
evil-winrm -i 10.53.22.210 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.227.131 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.115.130.183/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```
