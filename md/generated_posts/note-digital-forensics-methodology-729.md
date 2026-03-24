---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, oscp, persistence"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-729.html"
URL_IMAGES: ""
Date: "2024-03-27"
Tags: "Enumeration, OSCP, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-729"
Permalink: "/notes/note-digital-forensics-methodology-729.html"
BtnLabel: "Read Notes"
Pick: 0
---
## wmiexec

### Redis

```python
crackmapexec smb 10.93.218.125 -u administrator -p 'P@ssw0rd!' --shares
```

```powershell
nmap -sCV -p8443,993,22 10.77.166.148 -oN scan.txt
```

## Ruby on Rails

### enum4linux

- `Golden Ticket`
- `Resource-Based Constrained Delegation`
- `feroxbuster`
- `GetUserSPNs`
- `XSS`
- `secretsdump`

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

```python
crackmapexec smb 10.23.236.50 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.57.124.78/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.92.9.10 -u administrator -p 'P@ssw0rd!' --shares
```

## RDP

### CORS Misconfiguration

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

## IDOR

### Unquoted Service Path

```python
feroxbuster -h
evil-winrm -i 10.96.213.75 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.52.207.24/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
gobuster dir -u http://10.70.43.80/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.179.239/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

- `crackmapexec`
- `SQL Injection`
- `Broken Access Control`
- `LAPS Abuse`
