---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, malware, lateral movement, persistence, blue team, windows"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-127.html"
URL_IMAGES: ""
Date: "2026-03-10"
Tags: "Enumeration, Malware, Lateral Movement, Persistence, Blue Team, Windows"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-127"
Permalink: "/notes/note-cryptography-fundamentals-127.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Django

### metasploit

- `secretsdump`
- `Weak Service Permissions`
- `SeImpersonatePrivilege`
- `Pass the Hash`
- `psexec`

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

## netcat

### bloodhound

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

- `socat`
- `LXD Privilege Escalation`
- `Unconstrained Delegation`

- `Writable PATH`
- `Cron Job`
- `secretsdump`

## IMAP

### SSRF

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p389,25,3389 10.25.199.198 -oN scan.txt
```

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.18.249.65
gobuster dir -u http://10.112.177.82/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.29.134.121 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

## Docker Escape

### feroxbuster

- `bloodhound`
- `Command Injection`
- `Cron Job`
- `ACL Abuse`

- `Open Redirect`
- `sqlmap`
- `wmiexec`
- `evil-winrm`
- `SeImpersonatePrivilege`

- `CORS Misconfiguration`
- `DLL Hijacking`
- `Unquoted Service Path`

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

## Spring

### smbexec

- `feroxbuster`
- `Unconstrained Delegation`
- `Broken Access Control`

> **Note:** AlwaysInstallElevated was identified as the primary attack vector in this scenario.

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.39.201.253/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.199.84/FUZZ
```

## Java

### MongoDB

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.78.160.216
nmap -sCV -p8080,1521,9200 10.105.177.228 -oN scan.txt
```

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.
