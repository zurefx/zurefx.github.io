---
TitleSEO: "Active Directory Attack Paths | ZureFX"
TitlePost: "Active Directory Attack Paths"
Author: "ZureFX"
Description: "Personal notes on Active Directory Attack Paths. Quick reference for pentesting and CTF challenges."
Keywords: "linux, blue team, dfir, persistence, malware"
URL: "https://zurefx.github.io/notes/note-active-directory-attack-paths-212.html"
URL_IMAGES: ""
Date: "2024-11-02"
Tags: "Linux, Blue Team, DFIR, Persistence, Malware"
Section: "notes"
Lang: "en"
main_img: "note-active-directory-attack-paths-212"
Permalink: "/notes/note-active-directory-attack-paths-212.html"
BtnLabel: "Read Notes"
Pick: 0
---
## LAPS Abuse

### DNS Rebinding

- `Pass the Hash`
- `DLL Hijacking`
- `feroxbuster`
- `Insecure Deserialization`

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.49.58.33 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Kerberoasting

### wmiexec

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `Constrained Delegation`
- `sqlmap`
- `Golden Ticket`

## secretsdump

### Open Redirect

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p3389,389,27017 10.40.177.60 -oN scan.txt
```

## GetUserSPNs

### Broken Access Control

> **Note:** XSS was identified as the primary attack vector in this scenario.

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.14.205.230 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.66.193.171 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.126.125.77 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.
