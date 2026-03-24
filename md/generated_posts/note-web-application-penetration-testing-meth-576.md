---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, enumeration, cheatsheet, persistence, networking, malware"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-576.html"
URL_IMAGES: ""
Date: "2025-08-20"
Tags: "Privilege Escalation, Enumeration, Cheatsheet, Persistence, Networking, Malware"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-576"
Permalink: "/notes/note-web-application-penetration-testing-meth-576.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Remote Code Execution

### Ruby on Rails

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

```powershell
nmap -sCV -p8080,5986,464 10.66.50.207 -oN scan.txt
crackmapexec smb 10.34.40.182 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

- `john`
- `Local File Inclusion`
- `ffuf`

## hashcat

### msfvenom

```python
feroxbuster -h
nmap -sCV -p993,5985,110 10.62.144.157 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.112.165.94/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

## Joomla

### AlwaysInstallElevated

> **Note:** Cron Job was identified as the primary attack vector in this scenario.

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

- `CSRF`
- `LXD Privilege Escalation`
- `rpcclient`
- `metasploit`

## SMTP

### nmap

```bash
crackmapexec smb 10.45.73.133 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.77.165.70 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

- `DLL Hijacking`
- `AlwaysInstallElevated`
- `Remote File Inclusion`
- `rubeus`
- `Silver Ticket`

## Open Redirect

### Debian

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

- `AS-REP Roasting`
- `kerbrute`
- `SeDebugPrivilege`

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

```powershell
feroxbuster -h
crackmapexec smb 10.29.38.216 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.48.196.131 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## FTP

### GetUserSPNs

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.
