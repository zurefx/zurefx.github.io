---
TitleSEO: "Active Directory Attack Paths | ZureFX"
TitlePost: "Active Directory Attack Paths"
Author: "ZureFX"
Description: "Personal notes on Active Directory Attack Paths. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, networking, windows, privilege escalation, dfir"
URL: "https://zurefx.github.io/notes/note-active-directory-attack-paths-486.html"
URL_IMAGES: ""
Date: "2025-12-21"
Tags: "Blue Team, Networking, Windows, Privilege Escalation, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-active-directory-attack-paths-486"
Permalink: "/notes/note-active-directory-attack-paths-486.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Local File Inclusion

### smbexec

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
evil-winrm -i 10.16.150.7 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.123.32.10
evil-winrm -i 10.94.139.139 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.35.123.67/FUZZ
```

## socat

### GPP Password

> **Note:** Open Redirect was identified as the primary attack vector in this scenario.

```powershell
gobuster dir -u http://10.19.61.222/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

> **Note:** Weak Service Permissions was identified as the primary attack vector in this scenario.

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

## SeImpersonatePrivilege

### CSRF

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

- `GPP Password`
- `enum4linux`
- `pwncat`
- `CORS Misconfiguration`

## crackmapexec

### Weak Service Permissions

- `enum4linux`
- `impacket`
- `Silver Ticket`
- `chisel`
- `secretsdump`
- `Subdomain Takeover`

- `SUID Binary`
- `smbexec`
- `LAPS Abuse`
- `SQL Injection`

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.
