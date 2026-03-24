---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, privilege escalation, persistence"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-932.html"
URL_IMAGES: ""
Date: "2025-06-10"
Tags: "Lateral Movement, Privilege Escalation, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-932"
Permalink: "/notes/note-powershell-for-red-teamers-932.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Redis

### atexec

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

```python
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.56.87.186
crackmapexec smb 10.81.152.85 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

## .NET

### NTLM Relay

> **Note:** Path Traversal was identified as the primary attack vector in this scenario.

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.75.10.28 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.73.28.212/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.10.2.141/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.186.165 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.62.146.83/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p139,3389,5432 10.41.128.71 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.82.201.220 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## crackmapexec

### wmiexec

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

## Cron Job

### WordPress

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.14.193.54
nmap -sCV -p464,389,135 10.43.4.120 -oN scan.txt
evil-winrm -i 10.122.178.236 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p22,5985,53 10.81.171.198 -oN scan.txt
```

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.
