---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, malware, privilege escalation, blue team, linux, lateral movement"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-520.html"
URL_IMAGES: ""
Date: "2025-01-12"
Tags: "Persistence, Malware, Privilege Escalation, Blue Team, Linux, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-520"
Permalink: "/notes/note-linux-privilege-escalation-techniques-520.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Elasticsearch

### Python

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.14.26.248/FUZZ
crackmapexec smb 10.94.50.135 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

## HTTP

### GetUserSPNs

```python
crackmapexec smb 10.25.152.137 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p5985,443,464 10.118.116.43 -oN scan.txt
crackmapexec smb 10.54.93.41 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.114.233.87
gobuster dir -u http://10.105.219.76/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.108.208.67 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.47.181 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

## psexec

### socat

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

> **Note:** Remote File Inclusion was identified as the primary attack vector in this scenario.

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

## metasploit

### C#

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
crackmapexec smb 10.67.13.124 -u administrator -p 'P@ssw0rd!' --shares
```

## SSH

### Writable PATH

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.11.157.1
impacket-secretsdump administrator:'P@ssw0rd!'@10.125.63.18
```

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```
