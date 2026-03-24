---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, networking, windows, persistence, linux"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-427.html"
URL_IMAGES: ""
Date: "2025-03-27"
Tags: "OSCP, Networking, Windows, Persistence, Linux"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-427"
Permalink: "/notes/note-mitre-att&ck-framework-reference-427.html"
BtnLabel: "Read Notes"
Pick: 0
---
## gobuster

### smbexec

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

- `wmiexec`
- `crackmapexec`
- `ligolo-ng`
- `Kerberoasting`

```python
feroxbuster -h
gobuster dir -u http://10.122.18.184/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Cron Job

### Constrained Delegation

```powershell
gobuster dir -u http://10.80.18.254/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.49.59.127/FUZZ
```

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.32.79.99/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.69.223.50 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p993,445,587 10.39.22.78 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

## FTP

### Local File Inclusion

> **Note:** Pass the Ticket was identified as the primary attack vector in this scenario.

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

## Bash

### C#

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).
