---
TitleSEO: "Sigma Rule Development | ZureFX"
TitlePost: "Sigma Rule Development"
Author: "ZureFX"
Description: "Personal notes on Sigma Rule Development. Quick reference for pentesting and CTF challenges."
Keywords: "networking, oscp, privilege escalation, malware"
URL: "https://zurefx.github.io/notes/note-sigma-rule-development-732.html"
URL_IMAGES: ""
Date: "2024-10-25"
Tags: "Networking, OSCP, Privilege Escalation, Malware"
Section: "notes"
Lang: "en"
main_img: "note-sigma-rule-development-732"
Permalink: "/notes/note-sigma-rule-development-732.html"
BtnLabel: "Read Notes"
Pick: 0
---
## ldapsearch

### MongoDB

- `ACL Abuse`
- `Subdomain Takeover`
- `ligolo-ng`
- `Cron Job`
- `mimikatz`

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

## DNS

### Nginx

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

```bash
nmap -sCV -p995,27017,21 10.111.137.133 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

## Python

### PHP

> **Note:** CSRF was identified as the primary attack vector in this scenario.

```bash
gobuster dir -u http://10.116.237.6/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.101.53.191 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## dcomexec

### POP3

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.33.215/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `XSS`
- `DCSync`
- `CSRF`

```python
gobuster dir -u http://10.87.218.91/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.123.165.137
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```
