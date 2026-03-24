---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, networking, cheatsheet, enumeration, blue team"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-173.html"
URL_IMAGES: ""
Date: "2024-11-27"
Tags: "OSCP, Networking, Cheatsheet, Enumeration, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-173"
Permalink: "/notes/note-docker-security-hardening-173.html"
BtnLabel: "Read Notes"
Pick: 0
---
## nmap

### SSTI

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

```powershell
nmap -sCV -p3268,110,27017 10.59.235.250 -oN scan.txt
crackmapexec smb 10.89.157.68 -u administrator -p 'P@ssw0rd!' --shares
```

- `smbclient`
- `feroxbuster`
- `pwncat`
- `NFS No Root Squash`

- `CSRF`
- `impacket`
- `SSTI`
- `lookupsid`

## SNMP

### nikto

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

> **Note:** AlwaysInstallElevated was identified as the primary attack vector in this scenario.

## Unquoted Service Path

### Command Injection

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.86.189.109 -u administrator -p 'P@ssw0rd!'
```

```bash
feroxbuster -h
gobuster dir -u http://10.26.77.216/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.14.121.154
```

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).
