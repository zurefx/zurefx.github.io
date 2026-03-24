---
TitleSEO: "Incident Response Playbook | ZureFX"
TitlePost: "Incident Response Playbook"
Author: "ZureFX"
Description: "Personal notes on Incident Response Playbook. Quick reference for pentesting and CTF challenges."
Keywords: "linux, lateral movement, dfir, enumeration"
URL: "https://zurefx.github.io/notes/note-incident-response-playbook-472.html"
URL_IMAGES: ""
Date: "2024-08-07"
Tags: "Linux, Lateral Movement, DFIR, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-incident-response-playbook-472"
Permalink: "/notes/note-incident-response-playbook-472.html"
BtnLabel: "Read Notes"
Pick: 0
---
## DNS

### CMD

```powershell
crackmapexec smb 10.66.4.146 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.95.117.87 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.101.197.13/FUZZ
```

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

## WordPress

### atexec

> **Note:** XXE was identified as the primary attack vector in this scenario.

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

## gobuster

### Drupal

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

```python
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.
