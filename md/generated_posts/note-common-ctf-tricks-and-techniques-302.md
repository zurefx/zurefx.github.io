---
TitleSEO: "Common CTF Tricks and Techniques | ZureFX"
TitlePost: "Common CTF Tricks and Techniques"
Author: "ZureFX"
Description: "Personal notes on Common CTF Tricks and Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, malware, networking, blue team, enumeration"
URL: "https://zurefx.github.io/notes/note-common-ctf-tricks-and-techniques-302.html"
URL_IMAGES: ""
Date: "2025-08-25"
Tags: "OSCP, Malware, Networking, Blue Team, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-common-ctf-tricks-and-techniques-302"
Permalink: "/notes/note-common-ctf-tricks-and-techniques-302.html"
BtnLabel: "Read Notes"
Pick: 0
---
## PHP

### Apache

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
nmap -sCV -p5985,3268,8443 10.127.81.41 -oN scan.txt
gobuster dir -u http://10.72.104.143/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

```powershell
crackmapexec smb 10.107.206.37 -u administrator -p 'P@ssw0rd!' --shares
```

## Kerberoasting

### Flask

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

- `SSRF`
- `gobuster`
- `NFS No Root Squash`
- `hydra`

## RDP

### Remote File Inclusion

```python
crackmapexec smb 10.59.156.120 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.119.36.249
```

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

```bash
nmap -sCV -p587,3268,1433 10.14.88.206 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.84.62.105/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.15.67.152 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Golden Ticket

### Resource-Based Constrained Delegation

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

## lookupsid

### Remote Code Execution

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

## SQL Injection

### HTTPS

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

- `LXD Privilege Escalation`
- `socat`
- `SQL Injection`
- `impacket`

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p22,139,8443 10.43.128.6 -oN scan.txt
nmap -sCV -p135,587,445 10.111.247.180 -oN scan.txt
```
