---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, lateral movement, persistence, oscp, malware"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-166.html"
URL_IMAGES: ""
Date: "2025-08-05"
Tags: "Blue Team, Lateral Movement, Persistence, OSCP, Malware"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-166"
Permalink: "/notes/note-blue-team-detection-techniques-166.html"
BtnLabel: "Read Notes"
Pick: 0
---
## WinRM

### rubeus

```powershell
evil-winrm -i 10.19.98.59 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.97.70.79 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## lookupsid

### AlwaysInstallElevated

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

- `GPP Password`
- `IDOR`
- `SSRF`
- `Subdomain Takeover`
- `wmiexec`
- `Broken Access Control`

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

> **Note:** Golden Ticket was identified as the primary attack vector in this scenario.

## SUID Binary

### Broken Access Control

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.98.176 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Python

### RDP

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.65.7.196/FUZZ
```

## sharphound

### CSRF

- `smbexec`
- `chisel`
- `ACL Abuse`
- `Sudo Misconfiguration`

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

## Windows Server 2019

### john

```bash
nmap -sCV -p9200,27017,3268 10.113.38.54 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.24.192.25 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

> **Note:** Golden Ticket was identified as the primary attack vector in this scenario.

- `psexec`
- `hashcat`
- `SUID Binary`
- `Kerberoasting`
- `DNS Rebinding`
- `SSRF`

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.
