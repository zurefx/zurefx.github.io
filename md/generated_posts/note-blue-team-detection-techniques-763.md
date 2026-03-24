---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, blue team, lateral movement, persistence, linux, oscp"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-763.html"
URL_IMAGES: ""
Date: "2025-01-21"
Tags: "Enumeration, Blue Team, Lateral Movement, Persistence, Linux, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-763"
Permalink: "/notes/note-blue-team-detection-techniques-763.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Docker Escape

### smbclient

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## LAPS Abuse

### RPC

```powershell
evil-winrm -i 10.85.80.61 -u administrator -p 'P@ssw0rd!'
```

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

## dcomexec

### LDAP

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.55.161.61/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.18.173.6/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.10.72 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## SSH

### IIS

```python
nmap -sCV -p53,464,1521 10.115.221.48 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.84.193.113 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.15.120.217
```

> **Note:** Unconstrained Delegation was identified as the primary attack vector in this scenario.

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.
