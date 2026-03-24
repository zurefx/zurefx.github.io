---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, linux, windows, blue team, persistence"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-750.html"
URL_IMAGES: ""
Date: "2024-09-21"
Tags: "Lateral Movement, Linux, Windows, Blue Team, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-750"
Permalink: "/notes/note-blue-team-detection-techniques-750.html"
BtnLabel: "Read Notes"
Pick: 0
---
## ldapsearch

### LAPS Abuse

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.110.244.99/FUZZ
gobuster dir -u http://10.105.208.181/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.52.89.28
nmap -sCV -p587,8443,27017 10.101.166.34 -oN scan.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
crackmapexec smb 10.94.131.36 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.114.93 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.40.122.150 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## impacket

### SSH

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

## Debian

### Node.js

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

- `smbclient`
- `rpcclient`
- `DNS Rebinding`

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.119.76.95
nmap -sCV -p8080,9200,1521 10.126.233.245 -oN scan.txt
nmap -sCV -p443,389,8888 10.73.159.246 -oN scan.txt
nmap -sCV -p5985,8080,3268 10.68.18.137 -oN scan.txt
```
