---
TitleSEO: "YARA Rule Writing | ZureFX"
TitlePost: "YARA Rule Writing"
Author: "ZureFX"
Description: "Personal notes on YARA Rule Writing. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, persistence, cheatsheet, networking"
URL: "https://zurefx.github.io/notes/note-yara-rule-writing-401.html"
URL_IMAGES: ""
Date: "2026-01-15"
Tags: "Lateral Movement, Persistence, Cheatsheet, Networking"
Section: "notes"
Lang: "en"
main_img: "note-yara-rule-writing-401"
Permalink: "/notes/note-yara-rule-writing-401.html"
BtnLabel: "Read Notes"
Pick: 0
---
## AS-REP Roasting

### rpcclient

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.127.79.251 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.91.7.168/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## crackmapexec

### Insecure Deserialization

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

- `SQL Injection`
- `AS-REP Roasting`
- `impacket`

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

## Constrained Delegation

### metasploit

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.82.27.12/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

## MongoDB

### Python

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.97.142.217
evil-winrm -i 10.117.102.28 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

## Ubuntu 20.04

### socat

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
evil-winrm -i 10.37.205.225 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `sqlmap`
- `lookupsid`
- `Pass the Ticket`
- `SSTI`
- `Broken Access Control`

## wpscan

### NTLM Relay

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```python
feroxbuster -h
```

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
evil-winrm -i 10.98.213.161 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.
