---
TitleSEO: "Sigma Rule Development | ZureFX"
TitlePost: "Sigma Rule Development"
Author: "ZureFX"
Description: "Personal notes on Sigma Rule Development. Quick reference for pentesting and CTF challenges."
Keywords: "windows, dfir, linux, lateral movement, blue team, oscp"
URL: "https://zurefx.github.io/notes/note-sigma-rule-development-438.html"
URL_IMAGES: ""
Date: "2026-03-21"
Tags: "Windows, DFIR, Linux, Lateral Movement, Blue Team, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-sigma-rule-development-438"
Permalink: "/notes/note-sigma-rule-development-438.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Drupal

### Joomla

```powershell
evil-winrm -i 10.63.6.38 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
crackmapexec smb 10.44.92.59 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

## SNMP

### bloodhound

```bash
feroxbuster -h
gobuster dir -u http://10.100.116.152/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

## nikto

### LXD Privilege Escalation

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

## wpscan

### Apache

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Telnet

### DLL Hijacking

- `gobuster`
- `Constrained Delegation`
- `NFS No Root Squash`
- `sharphound`
- `SQL Injection`
- `DNS Rebinding`

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.
