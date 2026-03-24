---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, persistence, enumeration"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-207.html"
URL_IMAGES: ""
Date: "2024-06-27"
Tags: "Cheatsheet, Persistence, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-207"
Permalink: "/notes/note-powershell-for-red-teamers-207.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Apache

### MongoDB

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

## MSSQL

### AS-REP Roasting

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
evil-winrm -i 10.84.204.171 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.89.172.162
```

## Cron Job

### Drupal

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

```powershell
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.186.169/FUZZ
feroxbuster -h
evil-winrm -i 10.83.149.38 -u administrator -p 'P@ssw0rd!'
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.116.142.202 -u administrator -p 'P@ssw0rd!'
```
