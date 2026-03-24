---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "networking, windows, persistence"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-655.html"
URL_IMAGES: ""
Date: "2026-03-13"
Tags: "Networking, Windows, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-655"
Permalink: "/notes/note-linux-privilege-escalation-techniques-655.html"
BtnLabel: "Read Notes"
Pick: 0
---
## pwncat

### .NET

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.88.137.95 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.55.218.224/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

- `GetUserSPNs`
- `Remote Code Execution`
- `rubeus`
- `AS-REP Roasting`
- `netcat`
- `evil-winrm`

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Sudo Misconfiguration

### IIS

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.103.174.115/FUZZ
crackmapexec smb 10.105.210.130 -u administrator -p 'P@ssw0rd!' --shares
```

```bash
evil-winrm -i 10.99.188.39 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.27.202.200/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.80.201/FUZZ
```

> **Note:** SeDebugPrivilege was identified as the primary attack vector in this scenario.

> **Note:** AlwaysInstallElevated was identified as the primary attack vector in this scenario.

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

## PostgreSQL

### enum4linux

```bash
nmap -sCV -p9200,9200,23 10.12.171.244 -oN scan.txt
crackmapexec smb 10.123.162.63 -u administrator -p 'P@ssw0rd!' --shares
```

```bash
feroxbuster -h
evil-winrm -i 10.58.136.143 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.88.41.24 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.83.70.13 -u administrator -p 'P@ssw0rd!'
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.28.72.65/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.63.45.76/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```powershell
evil-winrm -i 10.74.125.110 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.71.41/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.38.11
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

## GPP Password

### Elasticsearch

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

- `SUID Binary`
- `AS-REP Roasting`
- `SeImpersonatePrivilege`
- `Silver Ticket`

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.43.20.117/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.64.217.184
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## HTTP

### Remote Code Execution

- `Resource-Based Constrained Delegation`
- `netcat`
- `gobuster`
- `DNS Rebinding`

```python
gobuster dir -u http://10.64.100.170/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.66.28.236 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

> **Note:** Unquoted Service Path was identified as the primary attack vector in this scenario.

## XSS

### mimikatz

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.212.209 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.28.233.249 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.111.145.145
```

```bash
feroxbuster -h
```
