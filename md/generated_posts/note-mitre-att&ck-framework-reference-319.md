---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, malware, persistence, privilege escalation, networking"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-319.html"
URL_IMAGES: ""
Date: "2024-11-07"
Tags: "Lateral Movement, Malware, Persistence, Privilege Escalation, Networking"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-319"
Permalink: "/notes/note-mitre-att&ck-framework-reference-319.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Kerberoasting

### XSS

```bash
feroxbuster -h
gobuster dir -u http://10.98.95.217/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.111.142.15/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.35.114.207 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.19.203/FUZZ
crackmapexec smb 10.37.142.35 -u administrator -p 'P@ssw0rd!' --shares
```

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.127.137.35/FUZZ
```

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

## impacket

### AlwaysInstallElevated

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

- `msfvenom`
- `socat`
- `ffuf`
- `Command Injection`

## DCSync

### SQL Injection

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

## Resource-Based Constrained Delegation

### wmiexec

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

## socat

### msfvenom

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

- `GetUserSPNs`
- `burpsuite`
- `GPP Password`
- `XSS`

```bash
nmap -sCV -p21,9200,587 10.99.95.123 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Subdomain Takeover

### Bash

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p22,993,135 10.52.92.238 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.
