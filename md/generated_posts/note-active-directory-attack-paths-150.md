---
TitleSEO: "Active Directory Attack Paths | ZureFX"
TitlePost: "Active Directory Attack Paths"
Author: "ZureFX"
Description: "Personal notes on Active Directory Attack Paths. Quick reference for pentesting and CTF challenges."
Keywords: "windows, lateral movement, malware, cheatsheet, oscp, linux"
URL: "https://zurefx.github.io/notes/note-active-directory-attack-paths-150.html"
URL_IMAGES: ""
Date: "2025-03-12"
Tags: "Windows, Lateral Movement, Malware, Cheatsheet, OSCP, Linux"
Section: "notes"
Lang: "en"
main_img: "note-active-directory-attack-paths-150"
Permalink: "/notes/note-active-directory-attack-paths-150.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Flask

### Constrained Delegation

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

- `Pass the Hash`
- `DNS Rebinding`
- `nikto`

- `Kerberoasting`
- `Command Injection`
- `Broken Access Control`
- `enum4linux`
- `rpcclient`
- `impacket`

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.242.21/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.102.63.232
```

## NFS No Root Squash

### Django

```powershell
feroxbuster -h
evil-winrm -i 10.123.166.129 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.116.206.217 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

## sharphound

### crackmapexec

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.
