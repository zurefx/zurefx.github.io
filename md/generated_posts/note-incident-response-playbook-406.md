---
TitleSEO: "Incident Response Playbook | ZureFX"
TitlePost: "Incident Response Playbook"
Author: "ZureFX"
Description: "Personal notes on Incident Response Playbook. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, windows, networking"
URL: "https://zurefx.github.io/notes/note-incident-response-playbook-406.html"
URL_IMAGES: ""
Date: "2026-01-27"
Tags: "DFIR, Windows, Networking"
Section: "notes"
Lang: "en"
main_img: "note-incident-response-playbook-406"
Permalink: "/notes/note-incident-response-playbook-406.html"
BtnLabel: "Read Notes"
Pick: 0
---
## crackmapexec

### Sudo Misconfiguration

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.34.217.78/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.128.85.52/FUZZ
evil-winrm -i 10.57.75.150 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```python
nmap -sCV -p135,139,3268 10.112.143.166 -oN scan.txt
evil-winrm -i 10.128.158.153 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.65.162.11 -u administrator -p 'P@ssw0rd!' --shares
```

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.229.165 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## impacket

### XXE

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.11.144.102 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

## ffuf

### dcomexec

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.92.10.207 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.108.182.240/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.43.118.104/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```python
nmap -sCV -p139,3306,389 10.46.250.132 -oN scan.txt
crackmapexec smb 10.73.217.94 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
nmap -sCV -p443,21,3389 10.58.109.44 -oN scan.txt
```
