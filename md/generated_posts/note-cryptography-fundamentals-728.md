---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, enumeration, oscp"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-728.html"
URL_IMAGES: ""
Date: "2025-08-04"
Tags: "DFIR, Enumeration, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-728"
Permalink: "/notes/note-cryptography-fundamentals-728.html"
BtnLabel: "Read Notes"
Pick: 0
---
## WinRM

### SUID Binary

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

- `SUID Binary`
- `Open Redirect`
- `Silver Ticket`
- `XXE`
- `Local File Inclusion`

## DNS

### bloodhound

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.25.73.181 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p8443,445,993 10.107.187.167 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
evil-winrm -i 10.42.178.122 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.72.236.198 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
evil-winrm -i 10.62.254.79 -u administrator -p 'P@ssw0rd!'
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.14.169.172/FUZZ
```

## Python

### GetUserSPNs

```powershell
crackmapexec smb 10.65.103.95 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.
