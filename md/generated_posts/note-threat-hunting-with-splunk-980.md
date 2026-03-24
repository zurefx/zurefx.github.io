---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, linux, blue team, oscp"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-980.html"
URL_IMAGES: ""
Date: "2025-02-05"
Tags: "DFIR, Linux, Blue Team, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-980"
Permalink: "/notes/note-threat-hunting-with-splunk-980.html"
BtnLabel: "Read Notes"
Pick: 0
---
## ldapsearch

### Command Injection

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.37.51.39
evil-winrm -i 10.102.204.122 -u administrator -p 'P@ssw0rd!'
```

```bash
gobuster dir -u http://10.57.178.230/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

## lookupsid

### SUID Binary

- `SSRF`
- `chisel`
- `DLL Hijacking`

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
nmap -sCV -p80,25,135 10.86.174.168 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.61.148.26
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

## Apache

### Subdomain Takeover

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.91.181.117
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.126.25.152
evil-winrm -i 10.111.70.72 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.61.66.175
```

## secretsdump

### SQL Injection

```bash
gobuster dir -u http://10.83.198.244/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.81.28.226 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

- `bloodhound`
- `gobuster`
- `SSRF`
- `nikto`

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

## atexec

### MSSQL

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

> **Note:** XSS was identified as the primary attack vector in this scenario.

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

## Bash

### POP3

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

> **Note:** Command Injection was identified as the primary attack vector in this scenario.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```
