---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "windows, dfir, persistence, blue team, lateral movement, malware"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-172.html"
URL_IMAGES: ""
Date: "2024-11-14"
Tags: "Windows, DFIR, Persistence, Blue Team, Lateral Movement, Malware"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-172"
Permalink: "/notes/note-memory-forensics-with-volatility-172.html"
BtnLabel: "Read Notes"
Pick: 0
---
## netcat

### DNS Rebinding

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

- `wmiexec`
- `mimikatz`
- `nmap`

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

```python
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

## wmiexec

### IMAP

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.40.146.69
```

```bash
feroxbuster -h
gobuster dir -u http://10.100.100.226/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

## CMD

### SUID Binary

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.226.40/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p1521,8888,8888 10.52.223.193 -oN scan.txt
feroxbuster -h
```

## Nginx

### HTTPS

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
feroxbuster -h
evil-winrm -i 10.102.20.41 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p3389,25,23 10.94.23.206 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.119.195.109/FUZZ
feroxbuster -h
```

## feroxbuster

### SMTP

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.86.63.227 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.103.13.78/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```
