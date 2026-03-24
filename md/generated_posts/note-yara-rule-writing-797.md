---
TitleSEO: "YARA Rule Writing | ZureFX"
TitlePost: "YARA Rule Writing"
Author: "ZureFX"
Description: "Personal notes on YARA Rule Writing. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, cheatsheet, lateral movement"
URL: "https://zurefx.github.io/notes/note-yara-rule-writing-797.html"
URL_IMAGES: ""
Date: "2024-07-31"
Tags: "Privilege Escalation, Cheatsheet, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-yara-rule-writing-797"
Permalink: "/notes/note-yara-rule-writing-797.html"
BtnLabel: "Read Notes"
Pick: 0
---
## secretsdump

### GetNPUsers

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.80.126.217 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.26.143.122/FUZZ
```

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.84.199 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.39.246.23 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.56.61.145 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.113.139 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

## smbclient

### CSRF

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

## Cron Job

### AS-REP Roasting

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p5432,993,27017 10.129.222.218 -oN scan.txt
evil-winrm -i 10.127.142.231 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

- `SSRF`
- `rpcclient`
- `psexec`
- `nmap`
- `mimikatz`
- `ACL Abuse`

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

## HTTPS

### RDP

```python
nmap -sCV -p1433,3268,3306 10.42.150.175 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3268,143,5986 10.100.121.223 -oN scan.txt
```

- `rubeus`
- `GPP Password`
- `burpsuite`

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

## PHP

### Open Redirect

```bash
evil-winrm -i 10.30.24.209 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.128.62.254 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.109.60.2/FUZZ
crackmapexec smb 10.30.14.39 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

## Redis

### bloodhound

```python
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.125.73.166 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.
