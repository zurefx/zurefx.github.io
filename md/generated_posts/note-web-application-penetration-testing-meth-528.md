---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, oscp, blue team, enumeration"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-528.html"
URL_IMAGES: ""
Date: "2024-10-11"
Tags: "Persistence, OSCP, Blue Team, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-528"
Permalink: "/notes/note-web-application-penetration-testing-meth-528.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Laravel

### SSTI

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

> **Note:** Constrained Delegation was identified as the primary attack vector in this scenario.

## wmiexec

### Unconstrained Delegation

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.42.198.125/FUZZ
feroxbuster -h
```

> **Note:** Kerberoasting was identified as the primary attack vector in this scenario.

> **Note:** Remote File Inclusion was identified as the primary attack vector in this scenario.

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.111.163.133/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.70.39.134/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.43.65.250/FUZZ
```

## SeDebugPrivilege

### GetNPUsers

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.54.173.186 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.94.134.176 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.65.120.108 -u administrator -p 'P@ssw0rd!'
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.168.165/FUZZ
crackmapexec smb 10.63.215.203 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `Remote File Inclusion`
- `XSS`
- `dcomexec`

- `Pass the Ticket`
- `SeDebugPrivilege`
- `netcat`
- `CSRF`
- `evil-winrm`
- `Sudo Misconfiguration`
