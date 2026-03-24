---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, windows, blue team, persistence, networking, oscp"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-800.html"
URL_IMAGES: ""
Date: "2025-10-11"
Tags: "DFIR, Windows, Blue Team, Persistence, Networking, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-800"
Permalink: "/notes/note-kubernetes-security-assessment-800.html"
BtnLabel: "Read Notes"
Pick: 0
---
## evil-winrm

### RDP

```python
feroxbuster -h
crackmapexec smb 10.51.5.5 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p636,5986,3306 10.24.224.34 -oN scan.txt
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.48.189 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.23.178.132 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.95.176.246 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.34.68.4/FUZZ
gobuster dir -u http://10.115.24.189/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## SMB

### Sudo Misconfiguration

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

## ffuf

### CORS Misconfiguration

```python
evil-winrm -i 10.71.238.216 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.11.243.250/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.24.243.9 -u administrator -p 'P@ssw0rd!' --shares
```

- `chisel`
- `feroxbuster`
- `pwncat`
- `dcomexec`
- `AS-REP Roasting`

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

## sqlmap

### crackmapexec

> **Note:** LAPS Abuse was identified as the primary attack vector in this scenario.

```bash
evil-winrm -i 10.114.137.90 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.83.107.10 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.100.230.196 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Windows Server 2019

### Debian

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.46.217.147 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.16.107.71 -u administrator -p 'P@ssw0rd!' --shares
```

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.
