---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "windows, enumeration, linux"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-992.html"
URL_IMAGES: ""
Date: "2025-09-29"
Tags: "Windows, Enumeration, Linux"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-992"
Permalink: "/notes/note-blue-team-detection-techniques-992.html"
BtnLabel: "Read Notes"
Pick: 0
---
## DLL Hijacking

### Cron Job

> **Note:** Sudo Misconfiguration was identified as the primary attack vector in this scenario.

- `wpscan`
- `Writable PATH`
- `rubeus`
- `ffuf`
- `metasploit`
- `smbclient`

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.119.59.152 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Telnet

### PostgreSQL

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.107.178.23 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.101.109.15/FUZZ
```

- `AlwaysInstallElevated`
- `SQL Injection`
- `feroxbuster`
- `chisel`

## WordPress

### C#

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p139,389,143 10.90.66.37 -oN scan.txt
gobuster dir -u http://10.46.247.241/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p53,3389,27017 10.83.30.232 -oN scan.txt
```
