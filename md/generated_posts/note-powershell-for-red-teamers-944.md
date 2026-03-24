---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "windows, oscp, networking"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-944.html"
URL_IMAGES: ""
Date: "2024-09-06"
Tags: "Windows, OSCP, Networking"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-944"
Permalink: "/notes/note-powershell-for-red-teamers-944.html"
BtnLabel: "Read Notes"
Pick: 0
---
## GetUserSPNs

### atexec

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

- `bloodhound`
- `Silver Ticket`
- `SeDebugPrivilege`
- `Weak Service Permissions`
- `smbclient`

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

- `Weak Service Permissions`
- `evil-winrm`
- `SeImpersonatePrivilege`
- `SSTI`
- `SQL Injection`
- `john`

## Unquoted Service Path

### Subdomain Takeover

```powershell
gobuster dir -u http://10.36.144.106/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.127.23.247
gobuster dir -u http://10.100.94.168/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## crackmapexec

### HTTPS

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

## GetNPUsers

### PHP

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.88.250.43 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.33.124.90 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.62.85.128 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

```bash
nmap -sCV -p8888,9200,5985 10.101.232.171 -oN scan.txt
crackmapexec smb 10.113.228.243 -u administrator -p 'P@ssw0rd!' --shares
```

- `Cron Job`
- `NFS No Root Squash`
- `Command Injection`
- `GetNPUsers`

## secretsdump

### smbexec

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.126.33.88 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```bash
gobuster dir -u http://10.62.27.249/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

## metasploit

### WinRM

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.
