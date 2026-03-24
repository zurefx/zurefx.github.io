---
TitleSEO: "OSCP Exam Preparation Notes | ZureFX"
TitlePost: "OSCP Exam Preparation Notes"
Author: "ZureFX"
Description: "Personal notes on OSCP Exam Preparation Notes. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, dfir, cheatsheet, networking, blue team, oscp"
URL: "https://zurefx.github.io/notes/note-oscp-exam-preparation-notes-291.html"
URL_IMAGES: ""
Date: "2025-02-23"
Tags: "Lateral Movement, DFIR, Cheatsheet, Networking, Blue Team, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-oscp-exam-preparation-notes-291"
Permalink: "/notes/note-oscp-exam-preparation-notes-291.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Spring

### PostgreSQL

- `impacket`
- `Open Redirect`
- `burpsuite`
- `gobuster`
- `SeImpersonatePrivilege`

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

## C#

### Flask

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.15.75.24/FUZZ
crackmapexec smb 10.111.176.35 -u administrator -p 'P@ssw0rd!' --shares
```

```bash
crackmapexec smb 10.97.129.102 -u administrator -p 'P@ssw0rd!' --shares
```

## MongoDB

### Django

- `secretsdump`
- `AlwaysInstallElevated`
- `IDOR`
- `DCSync`
- `Local File Inclusion`
- `metasploit`

- `ligolo-ng`
- `XSS`
- `Remote Code Execution`
- `SQL Injection`
- `ldapsearch`

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

## LDAP

### CSRF

- `msfvenom`
- `ACL Abuse`
- `LAPS Abuse`
- `sqlmap`
- `nikto`
- `Subdomain Takeover`

```python
crackmapexec smb 10.38.210.136 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.90.53/FUZZ
```

- `pwncat`
- `Golden Ticket`
- `netcat`
- `hashcat`
- `SSTI`

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.
