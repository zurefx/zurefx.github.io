---
TitleSEO: "Sigma Rule Development | ZureFX"
TitlePost: "Sigma Rule Development"
Author: "ZureFX"
Description: "Personal notes on Sigma Rule Development. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, cheatsheet, privilege escalation, windows, malware, blue team"
URL: "https://zurefx.github.io/notes/note-sigma-rule-development-215.html"
URL_IMAGES: ""
Date: "2025-11-20"
Tags: "Enumeration, Cheatsheet, Privilege Escalation, Windows, Malware, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-sigma-rule-development-215"
Permalink: "/notes/note-sigma-rule-development-215.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Constrained Delegation

### Insecure Deserialization

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

## mimikatz

### ffuf

- `gobuster`
- `nikto`
- `crackmapexec`

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Telnet

### Ubuntu 20.04

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.60.193.20/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p135,464,8080 10.81.207.235 -oN scan.txt
nmap -sCV -p5432,3306,135 10.37.25.229 -oN scan.txt
```

- `gobuster`
- `impacket`
- `ffuf`

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

## atexec

### SeImpersonatePrivilege

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.125.36.36 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```powershell
feroxbuster -h
```

- `Resource-Based Constrained Delegation`
- `Weak Service Permissions`
- `secretsdump`
- `CSRF`
- `smbexec`
- `Subdomain Takeover`

```powershell
nmap -sCV -p143,993,23 10.113.80.64 -oN scan.txt
gobuster dir -u http://10.96.216.17/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```
