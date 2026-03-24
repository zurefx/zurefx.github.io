---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, lateral movement, linux"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-123.html"
URL_IMAGES: ""
Date: "2025-12-27"
Tags: "Enumeration, Lateral Movement, Linux"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-123"
Permalink: "/notes/note-cryptography-fundamentals-123.html"
BtnLabel: "Read Notes"
Pick: 0
---
## IIS

### GPP Password

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## C#

### Laravel

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

## PostgreSQL

### wpscan

- `Remote File Inclusion`
- `atexec`
- `Cron Job`
- `NTLM Relay`

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

## sharphound

### IMAP

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

## Ruby on Rails

### chisel

> **Note:** SQL Injection was identified as the primary attack vector in this scenario.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.45.190.167
feroxbuster -h
nmap -sCV -p139,53,110 10.99.111.249 -oN scan.txt
```

- `kerbrute`
- `hydra`
- `DCSync`

## NFS No Root Squash

### Subdomain Takeover

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
nmap -sCV -p80,25,995 10.60.65.92 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.72.241.166/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

- `SQL Injection`
- `chisel`
- `GetUserSPNs`
- `kerbrute`
- `sqlmap`
- `Remote Code Execution`

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.
