---
TitleSEO: "Sigma Rule Development | ZureFX"
TitlePost: "Sigma Rule Development"
Author: "ZureFX"
Description: "Personal notes on Sigma Rule Development. Quick reference for pentesting and CTF challenges."
Keywords: "linux, privilege escalation, malware, dfir, networking"
URL: "https://zurefx.github.io/notes/note-sigma-rule-development-803.html"
URL_IMAGES: ""
Date: "2025-12-14"
Tags: "Linux, Privilege Escalation, Malware, DFIR, Networking"
Section: "notes"
Lang: "en"
main_img: "note-sigma-rule-development-803"
Permalink: "/notes/note-sigma-rule-development-803.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Remote File Inclusion

### sqlmap

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.36.126.116/FUZZ
```

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

## CMD

### IIS

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
crackmapexec smb 10.94.203.191 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

```bash
evil-winrm -i 10.74.40.44 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.87.27/FUZZ
```

## Redis

### impacket

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

## lookupsid

### Windows Server 2019

- `IDOR`
- `msfvenom`
- `Command Injection`
- `Resource-Based Constrained Delegation`

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

## ldapsearch

### Ubuntu 20.04

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

- `mimikatz`
- `rpcclient`
- `dcomexec`
- `chisel`
- `Remote Code Execution`

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

> **Note:** XSS was identified as the primary attack vector in this scenario.
