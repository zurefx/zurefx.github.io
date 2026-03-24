---
TitleSEO: "Common CTF Tricks and Techniques | ZureFX"
TitlePost: "Common CTF Tricks and Techniques"
Author: "ZureFX"
Description: "Personal notes on Common CTF Tricks and Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, malware, dfir"
URL: "https://zurefx.github.io/notes/note-common-ctf-tricks-and-techniques-936.html"
URL_IMAGES: ""
Date: "2025-02-09"
Tags: "Enumeration, Malware, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-common-ctf-tricks-and-techniques-936"
Permalink: "/notes/note-common-ctf-tricks-and-techniques-936.html"
BtnLabel: "Read Notes"
Pick: 0
---
## .NET

### IMAP

- `impacket`
- `evil-winrm`
- `Pass the Ticket`
- `DLL Hijacking`
- `wpscan`

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

- `sqlmap`
- `chisel`
- `Broken Access Control`
- `crackmapexec`
- `hashcat`

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.224.247 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Cron Job

### atexec

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

## PostgreSQL

### rpcclient

```python
nmap -sCV -p110,1521,23 10.114.206.173 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.249.147 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.43.91 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

- `SeDebugPrivilege`
- `IDOR`
- `XXE`
- `nmap`

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

```bash
feroxbuster -h
evil-winrm -i 10.30.88.170 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

## HTTP

### Apache

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
gobuster dir -u http://10.115.42.221/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

## Bash

### Windows Server 2019

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.13.226.73 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
nmap -sCV -p1433,22,110 10.70.50.196 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
feroxbuster -h
crackmapexec smb 10.37.253.164 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

## Remote Code Execution

### impacket

- `atexec`
- `hashcat`
- `AS-REP Roasting`
- `Golden Ticket`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.87.36.107
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

> **Note:** Weak Service Permissions was identified as the primary attack vector in this scenario.
