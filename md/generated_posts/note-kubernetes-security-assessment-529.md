---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "malware, persistence, oscp"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-529.html"
URL_IMAGES: ""
Date: "2025-07-13"
Tags: "Malware, Persistence, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-529"
Permalink: "/notes/note-kubernetes-security-assessment-529.html"
BtnLabel: "Read Notes"
Pick: 0
---
## NFS

### XSS

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.60.133.229/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.60.125.125 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.14.160.139 -u administrator -p 'P@ssw0rd!' --shares
```

## Django

### Remote File Inclusion

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.39.68.13
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.59.211/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.75.236.41 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.74.66.16/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

## atexec

### Ruby on Rails

> **Note:** Unconstrained Delegation was identified as the primary attack vector in this scenario.

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

```bash
feroxbuster -h
nmap -sCV -p143,993,5432 10.29.131.240 -oN scan.txt
```

- `LXD Privilege Escalation`
- `gobuster`
- `CORS Misconfiguration`
- `impacket`
- `chisel`
- `atexec`

## ldapsearch

### nmap

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

```python
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.49.12.121 -u administrator -p 'P@ssw0rd!'
```

- `Silver Ticket`
- `lookupsid`
- `rpcclient`
- `Unquoted Service Path`
- `kerbrute`

> **Note:** NFS No Root Squash was identified as the primary attack vector in this scenario.

```bash
crackmapexec smb 10.124.247.203 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
feroxbuster -h
```

## CORS Misconfiguration

### SSH

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

```powershell
nmap -sCV -p443,3268,21 10.44.137.152 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `SeDebugPrivilege`
- `bloodhound`
- `LXD Privilege Escalation`
- `Cron Job`
- `GetUserSPNs`
- `GPP Password`

## DNS

### Weak Service Permissions

```bash
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

- `SQL Injection`
- `Remote File Inclusion`
- `mimikatz`

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.
