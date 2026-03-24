---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "networking, lateral movement, windows"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-829.html"
URL_IMAGES: ""
Date: "2024-01-23"
Tags: "Networking, Lateral Movement, Windows"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-829"
Permalink: "/notes/note-digital-forensics-methodology-829.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Drupal

### rubeus

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```python
feroxbuster -h
```

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.20.177.116/FUZZ
gobuster dir -u http://10.78.138.12/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.119.229.119 -u administrator -p 'P@ssw0rd!'
```

## Laravel

### RDP

- `secretsdump`
- `Remote File Inclusion`
- `msfvenom`
- `AS-REP Roasting`
- `LXD Privilege Escalation`

```python
feroxbuster -h
```

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.60.48/FUZZ
```

> **Note:** Silver Ticket was identified as the primary attack vector in this scenario.

> **Note:** LXD Privilege Escalation was identified as the primary attack vector in this scenario.

## Debian

### GetNPUsers

> **Note:** NTLM Relay was identified as the primary attack vector in this scenario.

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

- `crackmapexec`
- `Pass the Hash`
- `Remote Code Execution`
- `Path Traversal`

## Windows Server 2019

### .NET

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

- `crackmapexec`
- `NFS No Root Squash`
- `secretsdump`
- `ACL Abuse`
