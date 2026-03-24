---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, privilege escalation, windows"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-389.html"
URL_IMAGES: ""
Date: "2024-10-21"
Tags: "Lateral Movement, Privilege Escalation, Windows"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-389"
Permalink: "/notes/note-docker-security-hardening-389.html"
BtnLabel: "Read Notes"
Pick: 0
---
## smbclient

### Sudo Misconfiguration

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

## Node.js

### WinRM

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

## WordPress

### rpcclient

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.91.136.249 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

- `smbclient`
- `Command Injection`
- `mimikatz`
- `Resource-Based Constrained Delegation`

> **Note:** Constrained Delegation was identified as the primary attack vector in this scenario.
