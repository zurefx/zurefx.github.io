---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "networking, malware, blue team, privilege escalation, linux"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-228.html"
URL_IMAGES: ""
Date: "2024-08-26"
Tags: "Networking, Malware, Blue Team, Privilege Escalation, Linux"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-228"
Permalink: "/notes/note-reverse-engineering-basics-228.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Silver Ticket

### DNS

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p80,21,8443 10.46.6.123 -oN scan.txt
nmap -sCV -p464,53,5986 10.28.9.233 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

## Ubuntu 20.04

### Path Traversal

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

> **Note:** Local File Inclusion was identified as the primary attack vector in this scenario.

## Unquoted Service Path

### Golden Ticket

- `msfvenom`
- `DNS Rebinding`
- `rpcclient`

- `Writable PATH`
- `Open Redirect`
- `sqlmap`
- `AlwaysInstallElevated`
- `Path Traversal`

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

## Remote File Inclusion

### Kali Linux

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.
