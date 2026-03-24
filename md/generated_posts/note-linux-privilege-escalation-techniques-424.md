---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "windows, privilege escalation, blue team"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-424.html"
URL_IMAGES: ""
Date: "2025-06-16"
Tags: "Windows, Privilege Escalation, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-424"
Permalink: "/notes/note-linux-privilege-escalation-techniques-424.html"
BtnLabel: "Read Notes"
Pick: 0
---
## wpscan

### DLL Hijacking

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.10.226.204/FUZZ
evil-winrm -i 10.27.5.243 -u administrator -p 'P@ssw0rd!'
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.114.76.210/FUZZ
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## HTTP

### Pass the Ticket

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.118.16.219/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.45.114/FUZZ
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.79.7/FUZZ
```

- `smbclient`
- `msfvenom`
- `ACL Abuse`
- `Open Redirect`

```bash
evil-winrm -i 10.39.241.1 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

- `Unquoted Service Path`
- `dcomexec`
- `chisel`

## PostgreSQL

### SUID Binary

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.51.55.197
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.26.171.141
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.95.21.238/FUZZ
```

```bash
gobuster dir -u http://10.129.31.39/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p22,587,80 10.91.78.40 -oN scan.txt
feroxbuster -h
```

## Active Directory

### Unquoted Service Path

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

> **Note:** SQL Injection was identified as the primary attack vector in this scenario.

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.79.106.231 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.72.119.199/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.205.172
```

> **Note:** Open Redirect was identified as the primary attack vector in this scenario.

## psexec

### nmap

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.105.182.98 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```
