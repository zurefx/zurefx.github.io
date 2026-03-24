---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, blue team, privilege escalation, oscp, networking"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-231.html"
URL_IMAGES: ""
Date: "2026-01-08"
Tags: "Lateral Movement, Blue Team, Privilege Escalation, OSCP, Networking"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-231"
Permalink: "/notes/note-memory-forensics-with-volatility-231.html"
BtnLabel: "Read Notes"
Pick: 0
---
## nikto

### AS-REP Roasting

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.73.239.89/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.62.133.77 -u administrator -p 'P@ssw0rd!' --shares
```

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.127.12.99/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.32.183.96/FUZZ
```

- `smbexec`
- `ldapsearch`
- `Open Redirect`
- `john`
- `AlwaysInstallElevated`

## Kerberoasting

### IDOR

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

## kerbrute

### SeDebugPrivilege

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

## Flask

### Redis

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

- `AS-REP Roasting`
- `NTLM Relay`
- `Local File Inclusion`
- `SSRF`
- `Subdomain Takeover`

## IMAP

### NTLM Relay

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.50.50.107 -u administrator -p 'P@ssw0rd!' --shares
```

- `mimikatz`
- `netcat`
- `smbclient`
- `sharphound`
- `Sudo Misconfiguration`
- `feroxbuster`

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

## pwncat

### hydra

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.14.4.80 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```
