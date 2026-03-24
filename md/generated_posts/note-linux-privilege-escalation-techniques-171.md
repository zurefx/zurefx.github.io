---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, cheatsheet, malware, blue team"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-171.html"
URL_IMAGES: ""
Date: "2025-10-10"
Tags: "Enumeration, Cheatsheet, Malware, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-171"
Permalink: "/notes/note-linux-privilege-escalation-techniques-171.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Python

### nmap

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.58.244.230 -u administrator -p 'P@ssw0rd!' --shares
```

## SeImpersonatePrivilege

### AS-REP Roasting

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

## Golden Ticket

### CSRF

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.11.32.55
```

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

- `hydra`
- `atexec`
- `Subdomain Takeover`
- `SQL Injection`
