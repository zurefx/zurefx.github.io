---
TitleSEO: "Incident Response Playbook | ZureFX"
TitlePost: "Incident Response Playbook"
Author: "ZureFX"
Description: "Personal notes on Incident Response Playbook. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, privilege escalation, networking, oscp, persistence, windows"
URL: "https://zurefx.github.io/notes/note-incident-response-playbook-785.html"
URL_IMAGES: ""
Date: "2024-03-06"
Tags: "Enumeration, Privilege Escalation, Networking, OSCP, Persistence, Windows"
Section: "notes"
Lang: "en"
main_img: "note-incident-response-playbook-785"
Permalink: "/notes/note-incident-response-playbook-785.html"
BtnLabel: "Read Notes"
Pick: 0
---
## evil-winrm

### Ubuntu 20.04

- `LXD Privilege Escalation`
- `nmap`
- `ldapsearch`
- `ffuf`
- `SeDebugPrivilege`

> **Note:** LXD Privilege Escalation was identified as the primary attack vector in this scenario.

- `NFS No Root Squash`
- `CSRF`
- `chisel`
- `atexec`
- `ldapsearch`

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

## Bash

### dcomexec

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.109.68.43 -u administrator -p 'P@ssw0rd!' --shares
```

```bash
feroxbuster -h
nmap -sCV -p8443,110,1521 10.38.41.174 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.52.117.71
```

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Local File Inclusion

### SUID Binary

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.38.77.35 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.25.242.203
evil-winrm -i 10.34.219.99 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p389,1433,21 10.96.221.91 -oN scan.txt
```

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.58.232.17 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.66.201.105 -u administrator -p 'P@ssw0rd!' --shares
```

- `SQL Injection`
- `SeImpersonatePrivilege`
- `NFS No Root Squash`
- `Open Redirect`
- `DNS Rebinding`

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

## Docker Escape

### SSRF

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

- `Remote Code Execution`
- `dcomexec`
- `Kerberoasting`

> **Note:** Broken Access Control was identified as the primary attack vector in this scenario.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.254.58 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.81.99.225/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```
