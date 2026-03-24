---
TitleSEO: "Active Directory Attack Paths | ZureFX"
TitlePost: "Active Directory Attack Paths"
Author: "ZureFX"
Description: "Personal notes on Active Directory Attack Paths. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, cheatsheet, blue team, persistence, privilege escalation, oscp"
URL: "https://zurefx.github.io/notes/note-active-directory-attack-paths-557.html"
URL_IMAGES: ""
Date: "2024-07-07"
Tags: "Enumeration, Cheatsheet, Blue Team, Persistence, Privilege Escalation, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-active-directory-attack-paths-557"
Permalink: "/notes/note-active-directory-attack-paths-557.html"
BtnLabel: "Read Notes"
Pick: 0
---
## IIS

### Kerberos

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
crackmapexec smb 10.65.151.110 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.99.127.78 -u administrator -p 'P@ssw0rd!' --shares
```

## GPP Password

### Insecure Deserialization

- `sharphound`
- `CORS Misconfiguration`
- `Cron Job`
- `AlwaysInstallElevated`

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

- `metasploit`
- `burpsuite`
- `ffuf`
- `DLL Hijacking`
- `rubeus`
- `Remote File Inclusion`

## Unconstrained Delegation

### FTP

> **Note:** CORS Misconfiguration was identified as the primary attack vector in this scenario.

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

## Apache

### crackmapexec

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.78.97.99 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p8080,9200,993 10.29.123.170 -oN scan.txt
```

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

## DCSync

### Subdomain Takeover

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

- `hashcat`
- `msfvenom`
- `Docker Escape`
- `burpsuite`
- `Pass the Ticket`
- `Broken Access Control`

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).
