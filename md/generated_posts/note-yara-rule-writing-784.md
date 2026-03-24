---
TitleSEO: "YARA Rule Writing | ZureFX"
TitlePost: "YARA Rule Writing"
Author: "ZureFX"
Description: "Personal notes on YARA Rule Writing. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, cheatsheet, networking"
URL: "https://zurefx.github.io/notes/note-yara-rule-writing-784.html"
URL_IMAGES: ""
Date: "2025-01-12"
Tags: "Enumeration, Cheatsheet, Networking"
Section: "notes"
Lang: "en"
main_img: "note-yara-rule-writing-784"
Permalink: "/notes/note-yara-rule-writing-784.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Command Injection

### wpscan

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

- `AS-REP Roasting`
- `pwncat`
- `GetUserSPNs`
- `SSRF`
- `smbclient`

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

## GetNPUsers

### Java

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

- `SUID Binary`
- `NFS No Root Squash`
- `LXD Privilege Escalation`
- `Silver Ticket`
- `Broken Access Control`
- `nmap`

## RDP

### CORS Misconfiguration

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.98.205.187
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.113.28 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.113.52.156/FUZZ
```

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

## bloodhound

### Windows Server 2019

- `DCSync`
- `impacket`
- `smbclient`
- `GetNPUsers`

- `Path Traversal`
- `Remote Code Execution`
- `Writable PATH`
- `XXE`
- `rubeus`

- `XXE`
- `psexec`
- `ffuf`
- `Golden Ticket`
- `gobuster`
- `GetNPUsers`

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.68.125.191 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.14.77.19 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## impacket

### MSSQL

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.31.209.77 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.43.39.121/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

- `LXD Privilege Escalation`
- `Resource-Based Constrained Delegation`
- `lookupsid`
- `XXE`
- `Subdomain Takeover`

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

## HTTP

### Redis

```python
nmap -sCV -p5985,1521,464 10.29.123.162 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.
