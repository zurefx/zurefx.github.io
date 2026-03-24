---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, linux, privilege escalation, persistence, blue team, lateral movement"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-206.html"
URL_IMAGES: ""
Date: "2024-08-28"
Tags: "Cheatsheet, Linux, Privilege Escalation, Persistence, Blue Team, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-206"
Permalink: "/notes/note-cryptography-fundamentals-206.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SeDebugPrivilege

### lookupsid

```bash
feroxbuster -h
nmap -sCV -p80,389,636 10.32.25.52 -oN scan.txt
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p21,3306,27017 10.11.78.73 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
gobuster dir -u http://10.52.103.17/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

> **Note:** DCSync was identified as the primary attack vector in this scenario.

## Windows Server 2019

### SSRF

```bash
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

```python
feroxbuster -h
nmap -sCV -p53,464,23 10.115.63.10 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

## Remote File Inclusion

### Django

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.31.135.185
impacket-secretsdump administrator:'P@ssw0rd!'@10.114.13.226
```

## wpscan

### POP3

- `DLL Hijacking`
- `Subdomain Takeover`
- `ldapsearch`
- `CSRF`
- `GPP Password`
- `Path Traversal`

- `wmiexec`
- `Silver Ticket`
- `metasploit`
- `GetNPUsers`

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

- `AlwaysInstallElevated`
- `Cron Job`
- `wmiexec`

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

## Active Directory

### Drupal

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

- `psexec`
- `NTLM Relay`
- `dcomexec`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.138.126
gobuster dir -u http://10.41.200.129/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## psexec

### C#

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.36.215.154/FUZZ
nmap -sCV -p389,9200,25 10.15.177.36 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.228.49 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.28.195.203/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.
