---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, blue team, persistence, windows"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-732.html"
URL_IMAGES: ""
Date: "2024-08-05"
Tags: "Privilege Escalation, Blue Team, Persistence, Windows"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-732"
Permalink: "/notes/note-digital-forensics-methodology-732.html"
BtnLabel: "Read Notes"
Pick: 0
---
## hydra

### ffuf

- `Path Traversal`
- `ACL Abuse`
- `ligolo-ng`
- `rubeus`

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

## sharphound

### DLL Hijacking

```bash
feroxbuster -h
```

> **Note:** SUID Binary was identified as the primary attack vector in this scenario.

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

## LAPS Abuse

### rpcclient

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.99.10.33 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.254.135/FUZZ
nmap -sCV -p135,27017,3306 10.110.205.198 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

> **Note:** Sudo Misconfiguration was identified as the primary attack vector in this scenario.

## wmiexec

### Broken Access Control

```powershell
evil-winrm -i 10.65.99.187 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.103.136.26/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.21.158.93
```

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

- `Path Traversal`
- `Unquoted Service Path`
- `SeDebugPrivilege`
- `Subdomain Takeover`
- `smbclient`
- `burpsuite`

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.
