---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "windows, cheatsheet, malware, privilege escalation, oscp"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-167.html"
URL_IMAGES: ""
Date: "2024-01-26"
Tags: "Windows, Cheatsheet, Malware, Privilege Escalation, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-167"
Permalink: "/notes/note-powershell-for-red-teamers-167.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Ruby on Rails

### Broken Access Control

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.34.161 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p587,5986,443 10.126.180.140 -oN scan.txt
gobuster dir -u http://10.103.146.22/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

- `nmap`
- `metasploit`
- `burpsuite`
- `Command Injection`

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

## Elasticsearch

### wmiexec

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.63.55.158
gobuster dir -u http://10.81.220.118/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```powershell
gobuster dir -u http://10.51.26.216/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

- `Path Traversal`
- `SeDebugPrivilege`
- `gobuster`
- `impacket`
- `sharphound`

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```bash
gobuster dir -u http://10.87.240.196/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

## SeImpersonatePrivilege

### AS-REP Roasting

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

> **Note:** Pass the Ticket was identified as the primary attack vector in this scenario.

## Node.js

### Kerberos

- `msfvenom`
- `pwncat`
- `burpsuite`
- `impacket`
- `smbexec`

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.218.111 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.55.210/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.118.136 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.16.192.145
```

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

## POP3

### psexec

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.
