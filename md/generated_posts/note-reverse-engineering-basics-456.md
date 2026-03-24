---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, persistence, networking, enumeration"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-456.html"
URL_IMAGES: ""
Date: "2024-03-14"
Tags: "Lateral Movement, Persistence, Networking, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-456"
Permalink: "/notes/note-reverse-engineering-basics-456.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SeImpersonatePrivilege

### MySQL

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

## ACL Abuse

### GetUserSPNs

- `psexec`
- `bloodhound`
- `feroxbuster`
- `XXE`
- `CORS Misconfiguration`
- `Resource-Based Constrained Delegation`

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.101.246.48/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.13.38
```

- `Pass the Hash`
- `Docker Escape`
- `bloodhound`
- `lookupsid`

## Python

### Windows Server 2019

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.89.249.191
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

- `LXD Privilege Escalation`
- `mimikatz`
- `DCSync`
- `Remote Code Execution`
- `gobuster`
- `XSS`

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.124.45.185 -u administrator -p 'P@ssw0rd!' --shares
```
