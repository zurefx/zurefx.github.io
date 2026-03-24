---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, blue team, privilege escalation"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-412.html"
URL_IMAGES: ""
Date: "2024-07-11"
Tags: "Lateral Movement, Blue Team, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-412"
Permalink: "/notes/note-web-application-penetration-testing-meth-412.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Weak Service Permissions

### Python

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

## pwncat

### rpcclient

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.114.5 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
nmap -sCV -p3306,3306,21 10.115.160.38 -oN scan.txt
```

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.58.98 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.87.234.240/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.92.147.148/FUZZ
gobuster dir -u http://10.56.172.200/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.111.215.37 -u administrator -p 'P@ssw0rd!'
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
crackmapexec smb 10.99.246.208 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## PostgreSQL

### burpsuite

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.
