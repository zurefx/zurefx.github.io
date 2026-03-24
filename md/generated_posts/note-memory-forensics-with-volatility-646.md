---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, privilege escalation, enumeration"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-646.html"
URL_IMAGES: ""
Date: "2024-12-14"
Tags: "DFIR, Privilege Escalation, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-646"
Permalink: "/notes/note-memory-forensics-with-volatility-646.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Unquoted Service Path

### Debian

```powershell
evil-winrm -i 10.46.209.52 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.126.111.50 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.74.36.183 -u administrator -p 'P@ssw0rd!'
```

- `Path Traversal`
- `Writable PATH`
- `impacket`
- `kerbrute`
- `pwncat`

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

## hydra

### Golden Ticket

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

- `Cron Job`
- `smbexec`
- `Remote File Inclusion`
- `SQL Injection`

- `SeDebugPrivilege`
- `pwncat`
- `metasploit`
- `Local File Inclusion`

## metasploit

### Active Directory

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Telnet

### WinRM

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.
