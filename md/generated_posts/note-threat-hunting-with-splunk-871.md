---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, lateral movement, cheatsheet, dfir"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-871.html"
URL_IMAGES: ""
Date: "2025-07-31"
Tags: "Persistence, Lateral Movement, Cheatsheet, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-871"
Permalink: "/notes/note-threat-hunting-with-splunk-871.html"
BtnLabel: "Read Notes"
Pick: 0
---
## CORS Misconfiguration

### Flask

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

## NFS

### john

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.202.158 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.73.246.26
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.105.21.234 -u administrator -p 'P@ssw0rd!'
```

- `Remote File Inclusion`
- `sharphound`
- `nikto`

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

## HTTP

### Kerberoasting

```bash
feroxbuster -h
nmap -sCV -p8443,3268,993 10.75.36.57 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.79.6
```

```bash
gobuster dir -u http://10.71.50.129/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.64.254.194 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.60.140.190 -u administrator -p 'P@ssw0rd!'
```

## dcomexec

### Java

> **Note:** Broken Access Control was identified as the primary attack vector in this scenario.

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

## enum4linux

### hydra

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

> **Note:** Broken Access Control was identified as the primary attack vector in this scenario.
