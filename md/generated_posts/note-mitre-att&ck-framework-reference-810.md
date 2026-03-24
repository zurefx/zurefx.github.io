---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, cheatsheet, blue team, linux"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-810.html"
URL_IMAGES: ""
Date: "2026-03-01"
Tags: "Privilege Escalation, Cheatsheet, Blue Team, Linux"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-810"
Permalink: "/notes/note-mitre-att&ck-framework-reference-810.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Resource-Based Constrained Delegation

### Constrained Delegation

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

> **Note:** IDOR was identified as the primary attack vector in this scenario.

## pwncat

### Insecure Deserialization

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

- `Broken Access Control`
- `ACL Abuse`
- `rpcclient`
- `netcat`
- `GetUserSPNs`
- `crackmapexec`

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

## Nginx

### impacket

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.34.207.203 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

## IMAP

### DCSync

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.12.183.47/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p139,22,389 10.38.163.14 -oN scan.txt
```

## CORS Misconfiguration

### rpcclient

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.67.136.193/FUZZ
gobuster dir -u http://10.72.152.69/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```
