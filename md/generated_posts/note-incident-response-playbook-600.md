---
TitleSEO: "Incident Response Playbook | ZureFX"
TitlePost: "Incident Response Playbook"
Author: "ZureFX"
Description: "Personal notes on Incident Response Playbook. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, malware, persistence, windows, blue team"
URL: "https://zurefx.github.io/notes/note-incident-response-playbook-600.html"
URL_IMAGES: ""
Date: "2024-02-22"
Tags: "Privilege Escalation, Malware, Persistence, Windows, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-incident-response-playbook-600"
Permalink: "/notes/note-incident-response-playbook-600.html"
BtnLabel: "Read Notes"
Pick: 0
---
## GetNPUsers

### HTTP

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

## MySQL

### LDAP

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

## IDOR

### IMAP

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

> **Note:** Open Redirect was identified as the primary attack vector in this scenario.

## Resource-Based Constrained Delegation

### Node.js

```bash
evil-winrm -i 10.111.31.146 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.112.83.107
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.42.83.110 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

> **Note:** SSTI was identified as the primary attack vector in this scenario.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.101.33.45/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.55.78.6/FUZZ
```

- `GPP Password`
- `wmiexec`
- `rubeus`
- `nikto`
- `evil-winrm`
- `Remote Code Execution`

## WinRM

### PostgreSQL

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Telnet

### DNS Rebinding

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

- `chisel`
- `Pass the Hash`
- `Path Traversal`
- `Kerberoasting`
- `XSS`
- `SQL Injection`

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.
