---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, privilege escalation, networking"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-620.html"
URL_IMAGES: ""
Date: "2024-02-08"
Tags: "Enumeration, Privilege Escalation, Networking"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-620"
Permalink: "/notes/note-blue-team-detection-techniques-620.html"
BtnLabel: "Read Notes"
Pick: 0
---
## rpcclient

### Drupal

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

> **Note:** Broken Access Control was identified as the primary attack vector in this scenario.

```bash
evil-winrm -i 10.79.117.199 -u administrator -p 'P@ssw0rd!'
```

## Node.js

### AS-REP Roasting

- `nikto`
- `IDOR`
- `Subdomain Takeover`
- `Remote Code Execution`

- `sqlmap`
- `rubeus`
- `XXE`

```bash
evil-winrm -i 10.28.240.157 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.120.140.194 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

## Insecure Deserialization

### Path Traversal

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

- `Path Traversal`
- `GetNPUsers`
- `Resource-Based Constrained Delegation`
- `wpscan`
- `secretsdump`

## IDOR

### Active Directory

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.68.131.63/FUZZ
nmap -sCV -p21,25,636 10.70.37.138 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.101.35.33 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

## CentOS

### MongoDB

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

- `CORS Misconfiguration`
- `Sudo Misconfiguration`
- `burpsuite`
- `hashcat`
- `atexec`
