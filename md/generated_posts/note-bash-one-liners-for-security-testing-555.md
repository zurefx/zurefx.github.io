---
TitleSEO: "Bash One-Liners for Security Testing | ZureFX"
TitlePost: "Bash One-Liners for Security Testing"
Author: "ZureFX"
Description: "Personal notes on Bash One-Liners for Security Testing. Quick reference for pentesting and CTF challenges."
Keywords: "linux, cheatsheet, windows, enumeration, privilege escalation"
URL: "https://zurefx.github.io/notes/note-bash-one-liners-for-security-testing-555.html"
URL_IMAGES: ""
Date: "2026-01-14"
Tags: "Linux, Cheatsheet, Windows, Enumeration, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-bash-one-liners-for-security-testing-555"
Permalink: "/notes/note-bash-one-liners-for-security-testing-555.html"
BtnLabel: "Read Notes"
Pick: 0
---
## crackmapexec

### netcat

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Subdomain Takeover

### Redis

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.33.241.47
nmap -sCV -p21,993,464 10.80.97.175 -oN scan.txt
```

> **Note:** Path Traversal was identified as the primary attack vector in this scenario.

```powershell
gobuster dir -u http://10.67.33.248/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.116.246.249 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

- `Path Traversal`
- `AS-REP Roasting`
- `Open Redirect`
- `Writable PATH`
- `XXE`
- `enum4linux`

## evil-winrm

### RPC

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

## Constrained Delegation

### SMB

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

```python
crackmapexec smb 10.58.212.42 -u administrator -p 'P@ssw0rd!' --shares
```
