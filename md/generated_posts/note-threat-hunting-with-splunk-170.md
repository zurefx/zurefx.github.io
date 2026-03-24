---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, networking, blue team, privilege escalation, oscp"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-170.html"
URL_IMAGES: ""
Date: "2024-11-24"
Tags: "Enumeration, Networking, Blue Team, Privilege Escalation, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-170"
Permalink: "/notes/note-threat-hunting-with-splunk-170.html"
BtnLabel: "Read Notes"
Pick: 0
---
## LDAP

### Flask

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

## Remote Code Execution

### GPP Password

- `Cron Job`
- `kerbrute`
- `nmap`
- `dcomexec`

- `psexec`
- `mimikatz`
- `bloodhound`

```python
evil-winrm -i 10.57.11.191 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.67.195.172 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

## wpscan

### smbexec

> **Note:** Open Redirect was identified as the primary attack vector in this scenario.

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

```bash
feroxbuster -h
evil-winrm -i 10.82.67.66 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.62.234.144 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

## crackmapexec

### impacket

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.46.240.47 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.110.225.2 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

- `GetUserSPNs`
- `smbclient`
- `mimikatz`
- `Subdomain Takeover`
- `AlwaysInstallElevated`

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.
