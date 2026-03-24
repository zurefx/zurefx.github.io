---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, linux, cheatsheet, blue team, privilege escalation, lateral movement"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-847.html"
URL_IMAGES: ""
Date: "2025-02-13"
Tags: "DFIR, Linux, Cheatsheet, Blue Team, Privilege Escalation, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-847"
Permalink: "/notes/note-digital-forensics-methodology-847.html"
BtnLabel: "Read Notes"
Pick: 0
---
## smbexec

### wpscan

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

> **Note:** Broken Access Control was identified as the primary attack vector in this scenario.

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.26.148.76/FUZZ
crackmapexec smb 10.86.253.129 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
gobuster dir -u http://10.89.6.110/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Open Redirect

### GPP Password

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

## Pass the Ticket

### enum4linux

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

## sharphound

### Sudo Misconfiguration

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```powershell
crackmapexec smb 10.18.203.223 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.116.88.199/FUZZ
```

- `crackmapexec`
- `evil-winrm`
- `impacket`
- `GetNPUsers`

```bash
nmap -sCV -p3268,23,5432 10.121.189.229 -oN scan.txt
evil-winrm -i 10.42.241.246 -u administrator -p 'P@ssw0rd!'
```

- `ldapsearch`
- `Path Traversal`
- `rpcclient`
- `Command Injection`
- `SeImpersonatePrivilege`
- `sharphound`

## CSRF

### Joomla

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.
