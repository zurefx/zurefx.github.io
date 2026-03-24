---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, linux, cheatsheet, privilege escalation"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-415.html"
URL_IMAGES: ""
Date: "2025-08-09"
Tags: "Enumeration, Linux, Cheatsheet, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-415"
Permalink: "/notes/note-cryptography-fundamentals-415.html"
BtnLabel: "Read Notes"
Pick: 0
---
## FTP

### Apache

> **Note:** SSRF was identified as the primary attack vector in this scenario.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.11.98.240
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

## Docker Escape

### Sudo Misconfiguration

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

- `Path Traversal`
- `LAPS Abuse`
- `CSRF`

- `Sudo Misconfiguration`
- `netcat`
- `Remote File Inclusion`
- `atexec`

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

## AS-REP Roasting

### john

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.47.121.160/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.92.162 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

## LAPS Abuse

### HTTP

- `smbexec`
- `LAPS Abuse`
- `Insecure Deserialization`
- `chisel`
- `hydra`
- `impacket`

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

## ligolo-ng

### smbexec

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.
