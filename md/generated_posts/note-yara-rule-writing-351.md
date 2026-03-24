---
TitleSEO: "YARA Rule Writing | ZureFX"
TitlePost: "YARA Rule Writing"
Author: "ZureFX"
Description: "Personal notes on YARA Rule Writing. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, cheatsheet, dfir, persistence, networking"
URL: "https://zurefx.github.io/notes/note-yara-rule-writing-351.html"
URL_IMAGES: ""
Date: "2026-02-01"
Tags: "Lateral Movement, Cheatsheet, DFIR, Persistence, Networking"
Section: "notes"
Lang: "en"
main_img: "note-yara-rule-writing-351"
Permalink: "/notes/note-yara-rule-writing-351.html"
BtnLabel: "Read Notes"
Pick: 0
---
## WinRM

### netcat

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## DCSync

### SSTI

- `socat`
- `NFS No Root Squash`
- `Remote File Inclusion`
- `SSRF`
- `Silver Ticket`
- `Writable PATH`

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

- `GetNPUsers`
- `enum4linux`
- `Insecure Deserialization`

## SSH

### POP3

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.138.179/FUZZ
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

```python
nmap -sCV -p1433,53,8080 10.15.226.118 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.102.157.132/FUZZ
```

- `AlwaysInstallElevated`
- `SeDebugPrivilege`
- `DNS Rebinding`
- `Constrained Delegation`
- `AS-REP Roasting`
