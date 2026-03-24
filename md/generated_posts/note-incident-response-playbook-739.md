---
TitleSEO: "Incident Response Playbook | ZureFX"
TitlePost: "Incident Response Playbook"
Author: "ZureFX"
Description: "Personal notes on Incident Response Playbook. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, malware, lateral movement, blue team"
URL: "https://zurefx.github.io/notes/note-incident-response-playbook-739.html"
URL_IMAGES: ""
Date: "2025-05-05"
Tags: "DFIR, Malware, Lateral Movement, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-incident-response-playbook-739"
Permalink: "/notes/note-incident-response-playbook-739.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Open Redirect

### SQL Injection

- `chisel`
- `enum4linux`
- `Open Redirect`
- `john`
- `pwncat`
- `Writable PATH`

```powershell
feroxbuster -h
```

```python
evil-winrm -i 10.77.156.15 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.123.30.82 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## burpsuite

### sqlmap

```bash
evil-winrm -i 10.91.40.77 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p139,995,110 10.38.110.30 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

- `Local File Inclusion`
- `DLL Hijacking`
- `Insecure Deserialization`

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```python
feroxbuster -h
feroxbuster -h
gobuster dir -u http://10.52.176.165/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Joomla

### POP3

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.
