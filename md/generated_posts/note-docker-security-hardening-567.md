---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, linux, enumeration"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-567.html"
URL_IMAGES: ""
Date: "2024-08-29"
Tags: "Privilege Escalation, Linux, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-567"
Permalink: "/notes/note-docker-security-hardening-567.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SNMP

### NTLM Relay

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.40.219.25/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.51.235.52/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

```python
evil-winrm -i 10.10.85.141 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.116.143.154 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

## sqlmap

### dcomexec

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.92.176.179 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

- `Subdomain Takeover`
- `ACL Abuse`
- `DCSync`

```powershell
feroxbuster -h
crackmapexec smb 10.56.49.209 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

## Ubuntu 20.04

### chisel

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.84.87.222
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.118.21.187
evil-winrm -i 10.26.87.49 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.107.206.231/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.35.121.108
```

> **Note:** CORS Misconfiguration was identified as the primary attack vector in this scenario.

## mimikatz

### Node.js

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

## hashcat

### nmap

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.160.225 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.122.75.214
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.87.169.78/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.33.63 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.71.210.163/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.79.213.85/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Drupal

### LDAP

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

- `SQL Injection`
- `mimikatz`
- `rubeus`
- `crackmapexec`

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.
