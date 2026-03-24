---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, oscp, privilege escalation, blue team"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-443.html"
URL_IMAGES: ""
Date: "2025-06-10"
Tags: "Enumeration, OSCP, Privilege Escalation, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-443"
Permalink: "/notes/note-docker-security-hardening-443.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Node.js

### Active Directory

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.95.127.54 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

> **Note:** Command Injection was identified as the primary attack vector in this scenario.

## nikto

### Weak Service Permissions

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3389,3268,135 10.90.227.9 -oN scan.txt
```

## Silver Ticket

### CSRF

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.85.192.226/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.96.81.48 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

## CMD

### DCSync

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## GPP Password

### secretsdump

```bash
nmap -sCV -p8443,22,5986 10.36.190.53 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.94.109.6/FUZZ
```

- `Constrained Delegation`
- `secretsdump`
- `XSS`
- `crackmapexec`

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.113.4.39/FUZZ
feroxbuster -h
```

```bash
gobuster dir -u http://10.112.153.208/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.69.32.110
feroxbuster -h
```

## NFS No Root Squash

### ffuf

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

```bash
nmap -sCV -p23,3389,143 10.114.226.84 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```
