---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, linux, cheatsheet, dfir"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-926.html"
URL_IMAGES: ""
Date: "2025-12-29"
Tags: "Blue Team, Linux, Cheatsheet, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-926"
Permalink: "/notes/note-linux-privilege-escalation-techniques-926.html"
BtnLabel: "Read Notes"
Pick: 0
---
## LAPS Abuse

### DLL Hijacking

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.109.133.46/FUZZ
feroxbuster -h
gobuster dir -u http://10.46.10.23/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.80.94.30 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

## GetUserSPNs

### Active Directory

- `bloodhound`
- `wmiexec`
- `ffuf`
- `smbclient`
- `rubeus`

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

```python
gobuster dir -u http://10.78.200.243/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.113.234.126 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.74.151.155 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

## NFS

### Windows Server 2019

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.
