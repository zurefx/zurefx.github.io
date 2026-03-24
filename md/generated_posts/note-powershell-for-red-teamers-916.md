---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, linux, enumeration, persistence"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-916.html"
URL_IMAGES: ""
Date: "2025-06-11"
Tags: "Blue Team, Linux, Enumeration, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-916"
Permalink: "/notes/note-powershell-for-red-teamers-916.html"
BtnLabel: "Read Notes"
Pick: 0
---
## ldapsearch

### Kerberos

- `Path Traversal`
- `feroxbuster`
- `chisel`
- `DCSync`
- `atexec`

> **Note:** Pass the Ticket was identified as the primary attack vector in this scenario.

## Sudo Misconfiguration

### smbclient

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

> **Note:** AS-REP Roasting was identified as the primary attack vector in this scenario.

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p21,3268,1521 10.81.43.13 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.104.207.211/FUZZ
```

## secretsdump

### HTTPS

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.28.116.155 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.119.192.201/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.
