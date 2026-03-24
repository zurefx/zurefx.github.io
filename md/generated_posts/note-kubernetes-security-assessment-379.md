---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, enumeration, lateral movement, cheatsheet, malware, linux"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-379.html"
URL_IMAGES: ""
Date: "2025-09-19"
Tags: "Privilege Escalation, Enumeration, Lateral Movement, Cheatsheet, Malware, Linux"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-379"
Permalink: "/notes/note-kubernetes-security-assessment-379.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Java

### LDAP

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
crackmapexec smb 10.87.192.181 -u administrator -p 'P@ssw0rd!' --shares
```

## rpcclient

### SSRF

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

- `AS-REP Roasting`
- `pwncat`
- `ffuf`
- `Command Injection`
- `impacket`
- `ldapsearch`

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```python
feroxbuster -h
gobuster dir -u http://10.51.44.232/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
nmap -sCV -p139,464,1433 10.50.229.48 -oN scan.txt
```

## Node.js

### enum4linux

> **Note:** Unconstrained Delegation was identified as the primary attack vector in this scenario.

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

## impacket

### Command Injection

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.127.116.220 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

```bash
gobuster dir -u http://10.113.9.7/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
nmap -sCV -p587,135,5985 10.77.247.229 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.48.51.232/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```
