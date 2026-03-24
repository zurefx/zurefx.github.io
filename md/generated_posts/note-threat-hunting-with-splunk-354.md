---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, privilege escalation, lateral movement, persistence, linux"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-354.html"
URL_IMAGES: ""
Date: "2025-01-07"
Tags: "OSCP, Privilege Escalation, Lateral Movement, Persistence, Linux"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-354"
Permalink: "/notes/note-threat-hunting-with-splunk-354.html"
BtnLabel: "Read Notes"
Pick: 0
---
## LDAP

### MongoDB

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

- `AlwaysInstallElevated`
- `dcomexec`
- `SeImpersonatePrivilege`
- `ligolo-ng`

- `nmap`
- `bloodhound`
- `enum4linux`

## C#

### Open Redirect

```python
nmap -sCV -p3268,443,143 10.24.155.197 -oN scan.txt
```

- `Insecure Deserialization`
- `Broken Access Control`
- `feroxbuster`
- `ldapsearch`
- `Pass the Hash`

## impacket

### Path Traversal

- `gobuster`
- `bloodhound`
- `XXE`
- `Cron Job`
- `Remote File Inclusion`

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

## Node.js

### GPP Password

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
gobuster dir -u http://10.105.98.25/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Kerberos

### Telnet

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.109.69.130/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.
