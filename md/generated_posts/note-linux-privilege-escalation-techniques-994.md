---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, linux, enumeration, malware, windows, networking"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-994.html"
URL_IMAGES: ""
Date: "2025-07-30"
Tags: "Blue Team, Linux, Enumeration, Malware, Windows, Networking"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-994"
Permalink: "/notes/note-linux-privilege-escalation-techniques-994.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Resource-Based Constrained Delegation

### PowerShell

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

## Python

### SeImpersonatePrivilege

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
evil-winrm -i 10.12.70.109 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.36.26.83/FUZZ
```

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.105.156.243/FUZZ
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `metasploit`
- `Broken Access Control`
- `enum4linux`
- `DLL Hijacking`

## Constrained Delegation

### Django

- `SSRF`
- `atexec`
- `GetNPUsers`

> **Note:** IDOR was identified as the primary attack vector in this scenario.

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

## SeDebugPrivilege

### Remote Code Execution

- `Pass the Hash`
- `Local File Inclusion`
- `Remote File Inclusion`

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

## GetNPUsers

### Telnet

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.56.31.245/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.219.13/FUZZ
```
