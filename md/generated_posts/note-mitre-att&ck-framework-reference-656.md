---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, lateral movement, malware"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-656.html"
URL_IMAGES: ""
Date: "2026-01-14"
Tags: "Privilege Escalation, Lateral Movement, Malware"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-656"
Permalink: "/notes/note-mitre-att&ck-framework-reference-656.html"
BtnLabel: "Read Notes"
Pick: 0
---
## ldapsearch

### sqlmap

```bash
evil-winrm -i 10.127.30.190 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.120.25.164 -u administrator -p 'P@ssw0rd!' --shares
```

- `Golden Ticket`
- `XXE`
- `Subdomain Takeover`
- `nikto`
- `Path Traversal`

## wmiexec

### Kali Linux

- `LAPS Abuse`
- `crackmapexec`
- `Sudo Misconfiguration`
- `Broken Access Control`
- `wmiexec`

- `Constrained Delegation`
- `atexec`
- `IDOR`
- `nmap`
- `ffuf`
- `NTLM Relay`

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

## Windows Server 2019

### DLL Hijacking

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

```python
nmap -sCV -p53,139,443 10.21.142.16 -oN scan.txt
feroxbuster -h
evil-winrm -i 10.102.135.198 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.
