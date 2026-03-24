---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "networking, persistence, linux, cheatsheet, oscp"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-388.html"
URL_IMAGES: ""
Date: "2025-06-12"
Tags: "Networking, Persistence, Linux, Cheatsheet, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-388"
Permalink: "/notes/note-blue-team-detection-techniques-388.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Drupal

### Windows Server 2019

- `SUID Binary`
- `netcat`
- `sqlmap`

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Pass the Ticket

### FTP

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

```python
gobuster dir -u http://10.50.243.50/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
nmap -sCV -p143,3306,443 10.123.88.14 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.183.31
crackmapexec smb 10.24.120.95 -u administrator -p 'P@ssw0rd!' --shares
```

```powershell
nmap -sCV -p1521,636,1433 10.106.62.236 -oN scan.txt
evil-winrm -i 10.18.110.5 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p464,8443,8888 10.35.82.142 -oN scan.txt
crackmapexec smb 10.75.214.89 -u administrator -p 'P@ssw0rd!' --shares
```

## SeDebugPrivilege

### XXE

- `enum4linux`
- `lookupsid`
- `dcomexec`
- `NFS No Root Squash`
- `crackmapexec`

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

## LDAP

### HTTPS

> **Note:** Docker Escape was identified as the primary attack vector in this scenario.

- `Resource-Based Constrained Delegation`
- `Remote File Inclusion`
- `SUID Binary`
- `impacket`
- `wpscan`
- `Constrained Delegation`

```bash
evil-winrm -i 10.11.135.235 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.20.191.172 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.214.5 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

## LAPS Abuse

### SNMP

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

- `pwncat`
- `atexec`
- `Insecure Deserialization`
- `Broken Access Control`
- `Unconstrained Delegation`
- `Silver Ticket`

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.
