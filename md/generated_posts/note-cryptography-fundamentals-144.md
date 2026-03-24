---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, dfir, networking, privilege escalation, windows, oscp"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-144.html"
URL_IMAGES: ""
Date: "2025-08-11"
Tags: "Lateral Movement, DFIR, Networking, Privilege Escalation, Windows, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-144"
Permalink: "/notes/note-cryptography-fundamentals-144.html"
BtnLabel: "Read Notes"
Pick: 0
---
## CORS Misconfiguration

### GetUserSPNs

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.77.217.97 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p464,5986,443 10.19.204.114 -oN scan.txt
nmap -sCV -p8080,3306,389 10.129.136.99 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

> **Note:** Unquoted Service Path was identified as the primary attack vector in this scenario.

## Drupal

### pwncat

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.78.175.199
crackmapexec smb 10.113.161.85 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

## Joomla

### WinRM

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

- `AlwaysInstallElevated`
- `hydra`
- `atexec`
- `burpsuite`
- `AS-REP Roasting`
- `Pass the Hash`

## FTP

### ldapsearch

- `atexec`
- `gobuster`
- `hashcat`
- `AlwaysInstallElevated`
- `bloodhound`

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

## Redis

### SMB

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.44.8.251/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.64.210.169 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.62.88.16/FUZZ
feroxbuster -h
```

```bash
nmap -sCV -p1433,5432,3306 10.15.55.25 -oN scan.txt
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.
