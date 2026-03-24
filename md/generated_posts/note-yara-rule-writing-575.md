---
TitleSEO: "YARA Rule Writing | ZureFX"
TitlePost: "YARA Rule Writing"
Author: "ZureFX"
Description: "Personal notes on YARA Rule Writing. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, windows, privilege escalation, malware, linux"
URL: "https://zurefx.github.io/notes/note-yara-rule-writing-575.html"
URL_IMAGES: ""
Date: "2024-08-23"
Tags: "Lateral Movement, Windows, Privilege Escalation, Malware, Linux"
Section: "notes"
Lang: "en"
main_img: "note-yara-rule-writing-575"
Permalink: "/notes/note-yara-rule-writing-575.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Python

### MongoDB

- `SSTI`
- `chisel`
- `sharphound`

```bash
crackmapexec smb 10.13.233.172 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.97.106.45/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.32.223.36/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## MySQL

### POP3

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.22.76.237/FUZZ
nmap -sCV -p443,80,1521 10.90.134.109 -oN scan.txt
```

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.222.45
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.28.128.135/FUZZ
```

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

## Elasticsearch

### evil-winrm

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

> **Note:** DLL Hijacking was identified as the primary attack vector in this scenario.

- `DLL Hijacking`
- `impacket`
- `Pass the Hash`
- `Docker Escape`
- `Weak Service Permissions`
- `netcat`
