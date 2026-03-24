---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "networking, blue team, linux, windows"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-624.html"
URL_IMAGES: ""
Date: "2024-07-30"
Tags: "Networking, Blue Team, Linux, Windows"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-624"
Permalink: "/notes/note-memory-forensics-with-volatility-624.html"
BtnLabel: "Read Notes"
Pick: 0
---
## LAPS Abuse

### CMD

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.68.149.187 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p3306,1433,443 10.13.153.136 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.127.235.45
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Remote File Inclusion

### SNMP

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

- `lookupsid`
- `SUID Binary`
- `sharphound`
- `Command Injection`
- `Path Traversal`
- `DCSync`

```bash
crackmapexec smb 10.117.6.128 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.238.24/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.186.99/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

## AS-REP Roasting

### WordPress

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.
