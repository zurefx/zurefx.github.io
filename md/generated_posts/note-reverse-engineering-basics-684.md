---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "linux, oscp, cheatsheet, networking"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-684.html"
URL_IMAGES: ""
Date: "2025-02-06"
Tags: "Linux, OSCP, Cheatsheet, Networking"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-684"
Permalink: "/notes/note-reverse-engineering-basics-684.html"
BtnLabel: "Read Notes"
Pick: 0
---
## HTTP

### Node.js

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

- `Resource-Based Constrained Delegation`
- `secretsdump`
- `feroxbuster`
- `Remote File Inclusion`
- `Insecure Deserialization`
- `Weak Service Permissions`

> **Note:** Resource-Based Constrained Delegation was identified as the primary attack vector in this scenario.

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```python
feroxbuster -h
gobuster dir -u http://10.54.243.135/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Kali Linux

### burpsuite

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Django

### SeDebugPrivilege

```bash
crackmapexec smb 10.94.190.53 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.28.183.142 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.85.107.95/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.103.166.103/FUZZ
crackmapexec smb 10.59.250.221 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p1521,53,3268 10.108.61.99 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.39.55.91
```

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.97.51.55
crackmapexec smb 10.115.137.204 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.56.69.245/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.94.137.85 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.
