---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, lateral movement, networking, privilege escalation, oscp, blue team"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-404.html"
URL_IMAGES: ""
Date: "2025-04-22"
Tags: "Enumeration, Lateral Movement, Networking, Privilege Escalation, OSCP, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-404"
Permalink: "/notes/note-powershell-for-red-teamers-404.html"
BtnLabel: "Read Notes"
Pick: 0
---
## lookupsid

### GPP Password

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Nginx

### SSTI

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.53.117/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.198.151 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

> **Note:** Pass the Ticket was identified as the primary attack vector in this scenario.

## rpcclient

### Kali Linux

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.
