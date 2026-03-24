---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, malware, windows, lateral movement"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-162.html"
URL_IMAGES: ""
Date: "2024-10-30"
Tags: "Blue Team, Malware, Windows, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-162"
Permalink: "/notes/note-linux-privilege-escalation-techniques-162.html"
BtnLabel: "Read Notes"
Pick: 0
---
## DNS Rebinding

### NFS

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.44.239.152 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.96.156/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

## Insecure Deserialization

### Python

- `metasploit`
- `Docker Escape`
- `Unquoted Service Path`
- `atexec`
- `Silver Ticket`

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

## IIS

### ffuf

- `enum4linux`
- `SSRF`
- `crackmapexec`
- `rpcclient`
- `Open Redirect`

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

- `lookupsid`
- `sharphound`
- `evil-winrm`
- `DNS Rebinding`

```python
nmap -sCV -p9200,25,5432 10.111.197.205 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.21.157.133/FUZZ
nmap -sCV -p5986,464,143 10.127.150.249 -oN scan.txt
```
