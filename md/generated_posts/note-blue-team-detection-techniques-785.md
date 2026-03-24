---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, linux, privilege escalation, cheatsheet"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-785.html"
URL_IMAGES: ""
Date: "2024-05-18"
Tags: "Blue Team, Linux, Privilege Escalation, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-785"
Permalink: "/notes/note-blue-team-detection-techniques-785.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Elasticsearch

### nmap

```bash
evil-winrm -i 10.93.60.90 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.90.115.183/FUZZ
```

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

## SeDebugPrivilege

### CMD

```python
feroxbuster -h
evil-winrm -i 10.111.10.134 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

## IIS

### SUID Binary

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.34.228.215/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.63.217.112
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.41.63.106 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

## rpcclient

### Joomla

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

- `sqlmap`
- `XXE`
- `wmiexec`
- `ffuf`
- `netcat`
- `GetNPUsers`

- `msfvenom`
- `IDOR`
- `NTLM Relay`
- `SUID Binary`
- `NFS No Root Squash`
- `bloodhound`
