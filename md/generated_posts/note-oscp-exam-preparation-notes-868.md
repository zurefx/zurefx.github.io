---
TitleSEO: "OSCP Exam Preparation Notes | ZureFX"
TitlePost: "OSCP Exam Preparation Notes"
Author: "ZureFX"
Description: "Personal notes on OSCP Exam Preparation Notes. Quick reference for pentesting and CTF challenges."
Keywords: "malware, dfir, linux, windows"
URL: "https://zurefx.github.io/notes/note-oscp-exam-preparation-notes-868.html"
URL_IMAGES: ""
Date: "2024-05-20"
Tags: "Malware, DFIR, Linux, Windows"
Section: "notes"
Lang: "en"
main_img: "note-oscp-exam-preparation-notes-868"
Permalink: "/notes/note-oscp-exam-preparation-notes-868.html"
BtnLabel: "Read Notes"
Pick: 0
---
## burpsuite

### metasploit

> **Note:** Weak Service Permissions was identified as the primary attack vector in this scenario.

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.122.70.35 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.99.123.183
```

## PostgreSQL

### psexec

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

- `LAPS Abuse`
- `XSS`
- `Remote File Inclusion`
- `Constrained Delegation`
- `enum4linux`
- `nmap`

```bash
nmap -sCV -p464,3389,139 10.119.18.137 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.81.78.103 -u administrator -p 'P@ssw0rd!' --shares
```

## MySQL

### chisel

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

- `sharphound`
- `hashcat`
- `wpscan`

```bash
nmap -sCV -p389,5985,8888 10.76.83.87 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

> **Note:** NFS No Root Squash was identified as the primary attack vector in this scenario.
