---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, lateral movement, windows, dfir"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-993.html"
URL_IMAGES: ""
Date: "2025-05-10"
Tags: "Enumeration, Lateral Movement, Windows, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-993"
Permalink: "/notes/note-linux-privilege-escalation-techniques-993.html"
BtnLabel: "Read Notes"
Pick: 0
---
## evil-winrm

### Kali Linux

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

> **Note:** Unquoted Service Path was identified as the primary attack vector in this scenario.

## Kerberos

### hashcat

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

> **Note:** AlwaysInstallElevated was identified as the primary attack vector in this scenario.

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

## ligolo-ng

### Unconstrained Delegation

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
crackmapexec smb 10.120.159.168 -u administrator -p 'P@ssw0rd!' --shares
```

## SSH

### GPP Password

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

- `AlwaysInstallElevated`
- `sqlmap`
- `rpcclient`
- `Unconstrained Delegation`
- `wpscan`
- `Command Injection`

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.116.142.91 -u administrator -p 'P@ssw0rd!'
```

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.99.83.66/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.23.244.217/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.34.56.176 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.70.155.11 -u administrator -p 'P@ssw0rd!' --shares
```

## kerbrute

### nmap

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

## impacket

### wpscan

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.
