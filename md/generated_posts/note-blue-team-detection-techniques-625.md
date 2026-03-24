---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "malware, cheatsheet, persistence, privilege escalation"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-625.html"
URL_IMAGES: ""
Date: "2025-05-22"
Tags: "Malware, Cheatsheet, Persistence, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-625"
Permalink: "/notes/note-blue-team-detection-techniques-625.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Silver Ticket

### SMTP

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.36.188.167 -u administrator -p 'P@ssw0rd!'
```

- `bloodhound`
- `kerbrute`
- `enum4linux`
- `Pass the Hash`
- `NTLM Relay`
- `Docker Escape`

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

## PHP

### Weak Service Permissions

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

> **Note:** Subdomain Takeover was identified as the primary attack vector in this scenario.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.11.126.179
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.115.104.41/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.75.88.147
feroxbuster -h
```

- `XSS`
- `NFS No Root Squash`
- `NTLM Relay`
- `dcomexec`

## .NET

### Constrained Delegation

- `feroxbuster`
- `crackmapexec`
- `ldapsearch`

```python
evil-winrm -i 10.15.242.13 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p636,143,9200 10.48.23.73 -oN scan.txt
evil-winrm -i 10.119.21.37 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.46.41.171 -u administrator -p 'P@ssw0rd!'
```

## Open Redirect

### Writable PATH

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.20.183.221 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.54.27.217 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.60.196.173/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

## Pass the Hash

### MSSQL

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.69.23.150/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```
