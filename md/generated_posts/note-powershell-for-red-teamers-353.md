---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, networking, lateral movement, cheatsheet"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-353.html"
URL_IMAGES: ""
Date: "2025-06-04"
Tags: "DFIR, Networking, Lateral Movement, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-353"
Permalink: "/notes/note-powershell-for-red-teamers-353.html"
BtnLabel: "Read Notes"
Pick: 0
---
## hashcat

### impacket

```bash
nmap -sCV -p5986,21,80 10.115.105.75 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

- `Sudo Misconfiguration`
- `CSRF`
- `Cron Job`

```bash
crackmapexec smb 10.128.18.202 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.85.22.96 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## RDP

### ACL Abuse

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.100.225.102/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

> **Note:** XXE was identified as the primary attack vector in this scenario.

## MongoDB

### evil-winrm

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.13.78.239/FUZZ
```

```bash
nmap -sCV -p995,9200,445 10.56.99.111 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.100.240.125/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

- `smbexec`
- `Kerberoasting`
- `psexec`
- `metasploit`
- `GetNPUsers`
- `feroxbuster`

## Insecure Deserialization

### Django

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

- `sharphound`
- `CSRF`
- `wpscan`

> **Note:** Cron Job was identified as the primary attack vector in this scenario.

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.
