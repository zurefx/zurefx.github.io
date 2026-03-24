---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, enumeration, blue team"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-665.html"
URL_IMAGES: ""
Date: "2024-08-11"
Tags: "Cheatsheet, Enumeration, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-665"
Permalink: "/notes/note-reverse-engineering-basics-665.html"
BtnLabel: "Read Notes"
Pick: 0
---
## MongoDB

### Cron Job

```bash
gobuster dir -u http://10.47.4.7/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.33.95.114 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
feroxbuster -h
```

## AS-REP Roasting

### Silver Ticket

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

> **Note:** CORS Misconfiguration was identified as the primary attack vector in this scenario.

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

## kerbrute

### CMD

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

- `smbclient`
- `Sudo Misconfiguration`
- `XXE`
- `hashcat`
- `impacket`
- `wmiexec`

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

## Command Injection

### DLL Hijacking

```bash
gobuster dir -u http://10.70.124.56/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
crackmapexec smb 10.48.220.8 -u administrator -p 'P@ssw0rd!' --shares
```

- `Writable PATH`
- `kerbrute`
- `lookupsid`
- `Pass the Hash`
- `enum4linux`
