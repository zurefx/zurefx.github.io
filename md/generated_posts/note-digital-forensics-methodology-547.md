---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, cheatsheet, lateral movement, enumeration"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-547.html"
URL_IMAGES: ""
Date: "2024-08-16"
Tags: "Privilege Escalation, Cheatsheet, Lateral Movement, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-547"
Permalink: "/notes/note-digital-forensics-methodology-547.html"
BtnLabel: "Read Notes"
Pick: 0
---
## CMD

### SQL Injection

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

## Pass the Hash

### kerbrute

```python
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.113.16.203 -u administrator -p 'P@ssw0rd!' --shares
```

- `XSS`
- `Cron Job`
- `secretsdump`

```python
feroxbuster -h
```

## Kerberoasting

### Bash

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

> **Note:** Broken Access Control was identified as the primary attack vector in this scenario.

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

- `Path Traversal`
- `NFS No Root Squash`
- `wmiexec`
- `sqlmap`
- `Weak Service Permissions`

## GPP Password

### POP3

- `Local File Inclusion`
- `ffuf`
- `rubeus`
- `Writable PATH`

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.108.98.102 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.120.200.71
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.180.68
```

- `Command Injection`
- `Golden Ticket`
- `Silver Ticket`
- `Local File Inclusion`
- `john`
- `SSRF`

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.90.198.32 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.99.190.207
```

## nmap

### Golden Ticket

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

- `NTLM Relay`
- `Sudo Misconfiguration`
- `smbexec`
- `Kerberoasting`
- `Open Redirect`

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

## ACL Abuse

### Laravel

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).
