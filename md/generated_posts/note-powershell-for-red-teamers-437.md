---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, oscp, enumeration, windows, networking, blue team"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-437.html"
URL_IMAGES: ""
Date: "2024-03-27"
Tags: "Privilege Escalation, OSCP, Enumeration, Windows, Networking, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-437"
Permalink: "/notes/note-powershell-for-red-teamers-437.html"
BtnLabel: "Read Notes"
Pick: 0
---
## CentOS

### Nginx

- `atexec`
- `hashcat`
- `ffuf`
- `Local File Inclusion`
- `Pass the Hash`
- `AlwaysInstallElevated`

```bash
nmap -sCV -p445,80,5432 10.80.41.197 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.120.186.65
```

> **Note:** DCSync was identified as the primary attack vector in this scenario.

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

## NFS

### dcomexec

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

> **Note:** DCSync was identified as the primary attack vector in this scenario.

## HTTPS

### atexec

- `XSS`
- `GPP Password`
- `smbclient`
- `Local File Inclusion`

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.
