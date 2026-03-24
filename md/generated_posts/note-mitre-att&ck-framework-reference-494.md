---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, lateral movement, linux, oscp"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-494.html"
URL_IMAGES: ""
Date: "2026-01-16"
Tags: "Enumeration, Lateral Movement, Linux, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-494"
Permalink: "/notes/note-mitre-att&ck-framework-reference-494.html"
BtnLabel: "Read Notes"
Pick: 0
---
## mimikatz

### SMB

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

- `Pass the Ticket`
- `sharphound`
- `Cron Job`
- `hashcat`

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

## Joomla

### CORS Misconfiguration

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

```bash
gobuster dir -u http://10.11.184.127/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.105.101.83 -u administrator -p 'P@ssw0rd!'
```

## PHP

### msfvenom

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.186.21 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `IDOR`
- `sqlmap`
- `sharphound`
- `nmap`
- `socat`
- `netcat`

## MSSQL

### chisel

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

- `rubeus`
- `Golden Ticket`
- `ldapsearch`
