---
TitleSEO: "Incident Response Playbook | ZureFX"
TitlePost: "Incident Response Playbook"
Author: "ZureFX"
Description: "Personal notes on Incident Response Playbook. Quick reference for pentesting and CTF challenges."
Keywords: "windows, dfir, oscp"
URL: "https://zurefx.github.io/notes/note-incident-response-playbook-117.html"
URL_IMAGES: ""
Date: "2024-09-23"
Tags: "Windows, DFIR, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-incident-response-playbook-117"
Permalink: "/notes/note-incident-response-playbook-117.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Active Directory

### SMTP

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

## Docker Escape

### nmap

> **Note:** Path Traversal was identified as the primary attack vector in this scenario.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.4.36/FUZZ
```

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

## Apache

### nikto

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.34.109.123/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## LDAP

### Telnet

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
crackmapexec smb 10.56.37.143 -u administrator -p 'P@ssw0rd!' --shares
```

## Bash

### MongoDB

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.161.252
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.96.40.23 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

## LAPS Abuse

### Open Redirect

- `LXD Privilege Escalation`
- `atexec`
- `Golden Ticket`
- `AS-REP Roasting`
- `Docker Escape`
- `Broken Access Control`

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p3389,27017,8888 10.15.127.197 -oN scan.txt
```

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.91.82.19/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.31.74.58 -u administrator -p 'P@ssw0rd!' --shares
```
