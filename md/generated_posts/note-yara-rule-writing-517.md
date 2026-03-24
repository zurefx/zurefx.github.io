---
TitleSEO: "YARA Rule Writing | ZureFX"
TitlePost: "YARA Rule Writing"
Author: "ZureFX"
Description: "Personal notes on YARA Rule Writing. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, linux, persistence, privilege escalation"
URL: "https://zurefx.github.io/notes/note-yara-rule-writing-517.html"
URL_IMAGES: ""
Date: "2025-01-15"
Tags: "Blue Team, Linux, Persistence, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-yara-rule-writing-517"
Permalink: "/notes/note-yara-rule-writing-517.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Open Redirect

### NTLM Relay

```powershell
gobuster dir -u http://10.52.53.149/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.30.54.70/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.82.43.106/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

## impacket

### gobuster

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

> **Note:** Remote Code Execution was identified as the primary attack vector in this scenario.

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

## NFS

### XSS

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.30.150.57/FUZZ
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

## Active Directory

### Ubuntu 20.04

```bash
gobuster dir -u http://10.56.204.56/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

- `CORS Misconfiguration`
- `evil-winrm`
- `sharphound`
- `gobuster`
- `john`
- `CSRF`

## Golden Ticket

### RPC

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

## burpsuite

### Sudo Misconfiguration

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
feroxbuster -h
evil-winrm -i 10.51.139.93 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.
