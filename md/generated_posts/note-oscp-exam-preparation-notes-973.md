---
TitleSEO: "OSCP Exam Preparation Notes | ZureFX"
TitlePost: "OSCP Exam Preparation Notes"
Author: "ZureFX"
Description: "Personal notes on OSCP Exam Preparation Notes. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, cheatsheet, lateral movement"
URL: "https://zurefx.github.io/notes/note-oscp-exam-preparation-notes-973.html"
URL_IMAGES: ""
Date: "2026-02-23"
Tags: "Enumeration, Cheatsheet, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-oscp-exam-preparation-notes-973"
Permalink: "/notes/note-oscp-exam-preparation-notes-973.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Windows Server 2019

### CORS Misconfiguration

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```python
evil-winrm -i 10.71.124.240 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.87.107.104
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

- `Docker Escape`
- `feroxbuster`
- `Writable PATH`
- `NFS No Root Squash`

- `Insecure Deserialization`
- `Open Redirect`
- `chisel`
- `msfvenom`

## enum4linux

### kerbrute

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
gobuster dir -u http://10.71.39.106/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.57.147.167 -u administrator -p 'P@ssw0rd!' --shares
```

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.63.151.118/FUZZ
```

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

## Resource-Based Constrained Delegation

### chisel

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

## RPC

### PowerShell

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.159.62 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
crackmapexec smb 10.94.110.76 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.41.5.227/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.36.15.93/FUZZ
```

```bash
feroxbuster -h
evil-winrm -i 10.20.85.21 -u administrator -p 'P@ssw0rd!'
```

- `sharphound`
- `socat`
- `DCSync`
- `smbclient`
- `AlwaysInstallElevated`

## nmap

### Python

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## sharphound

### msfvenom

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

- `Subdomain Takeover`
- `Unconstrained Delegation`
- `Docker Escape`
- `msfvenom`
- `Local File Inclusion`
