---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, dfir, lateral movement, networking, cheatsheet, malware"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-326.html"
URL_IMAGES: ""
Date: "2026-01-11"
Tags: "Blue Team, DFIR, Lateral Movement, Networking, Cheatsheet, Malware"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-326"
Permalink: "/notes/note-threat-hunting-with-splunk-326.html"
BtnLabel: "Read Notes"
Pick: 0
---
## AlwaysInstallElevated

### FTP

```bash
gobuster dir -u http://10.80.252.174/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.92.240.184 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.80.179.225 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.58.23.158/FUZZ
```

> **Note:** Unquoted Service Path was identified as the primary attack vector in this scenario.

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

## XXE

### SeImpersonatePrivilege

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.116.140.201/FUZZ
crackmapexec smb 10.11.82.180 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

## hashcat

### IIS

> **Note:** SeImpersonatePrivilege was identified as the primary attack vector in this scenario.

- `evil-winrm`
- `lookupsid`
- `Remote File Inclusion`
- `ligolo-ng`
- `Sudo Misconfiguration`

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

## psexec

### Ubuntu 20.04

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
nmap -sCV -p443,21,5985 10.14.98.178 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.14.225.170 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.79.127.92/FUZZ
```

## Flask

### secretsdump

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.78.59.216 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

## Node.js

### Python

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

- `msfvenom`
- `feroxbuster`
- `Open Redirect`
- `SUID Binary`
- `socat`
- `XSS`
