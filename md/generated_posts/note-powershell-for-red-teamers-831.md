---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, persistence, linux, blue team"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-831.html"
URL_IMAGES: ""
Date: "2024-07-30"
Tags: "Privilege Escalation, Persistence, Linux, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-831"
Permalink: "/notes/note-powershell-for-red-teamers-831.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Broken Access Control

### NFS No Root Squash

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

## SSTI

### sharphound

> **Note:** Kerberoasting was identified as the primary attack vector in this scenario.

- `chisel`
- `msfvenom`
- `GetNPUsers`
- `psexec`

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

## POP3

### socat

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.122.194.243
```

## SeImpersonatePrivilege

### GPP Password

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

## PHP

### atexec

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.17.178.70/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```
