---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, persistence, networking"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-340.html"
URL_IMAGES: ""
Date: "2025-09-24"
Tags: "Privilege Escalation, Persistence, Networking"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-340"
Permalink: "/notes/note-blue-team-detection-techniques-340.html"
BtnLabel: "Read Notes"
Pick: 0
---
## RDP

### mimikatz

```python
crackmapexec smb 10.102.170.231 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `impacket`
- `socat`
- `NFS No Root Squash`
- `Insecure Deserialization`
- `enum4linux`

## MSSQL

### sharphound

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

- `NFS No Root Squash`
- `Local File Inclusion`
- `rpcclient`
- `SeImpersonatePrivilege`
- `Weak Service Permissions`

## rubeus

### IIS

```bash
nmap -sCV -p443,636,1521 10.62.68.71 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

```bash
crackmapexec smb 10.78.127.223 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.108.233.167
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.101.122.97/FUZZ
evil-winrm -i 10.58.160.169 -u administrator -p 'P@ssw0rd!'
```

## enum4linux

### SSH

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
gobuster dir -u http://10.40.101.85/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p1433,5985,23 10.19.146.29 -oN scan.txt
evil-winrm -i 10.107.243.59 -u administrator -p 'P@ssw0rd!'
```
