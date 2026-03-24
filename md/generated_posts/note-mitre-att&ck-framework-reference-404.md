---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "malware, blue team, oscp, privilege escalation, persistence, enumeration"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-404.html"
URL_IMAGES: ""
Date: "2024-10-08"
Tags: "Malware, Blue Team, OSCP, Privilege Escalation, Persistence, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-404"
Permalink: "/notes/note-mitre-att&ck-framework-reference-404.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SNMP

### evil-winrm

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.46.247.35/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.116.49.15/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.17.155.75 -u administrator -p 'P@ssw0rd!' --shares
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.157.30 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.26.206.79/FUZZ
```

## Windows Server 2019

### Laravel

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

- `SQL Injection`
- `lookupsid`
- `Unquoted Service Path`
- `Remote Code Execution`
- `SSRF`

- `burpsuite`
- `SQL Injection`
- `mimikatz`

## Resource-Based Constrained Delegation

### nikto

- `Silver Ticket`
- `mimikatz`
- `Command Injection`
- `impacket`
- `Remote Code Execution`
- `NTLM Relay`

- `Silver Ticket`
- `mimikatz`
- `feroxbuster`
- `msfvenom`
- `DCSync`

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

- `SQL Injection`
- `DLL Hijacking`
- `Sudo Misconfiguration`
- `rubeus`
- `GetUserSPNs`
