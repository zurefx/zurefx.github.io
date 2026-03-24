---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, linux, oscp, malware, blue team"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-838.html"
URL_IMAGES: ""
Date: "2024-12-28"
Tags: "Cheatsheet, Linux, OSCP, Malware, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-838"
Permalink: "/notes/note-digital-forensics-methodology-838.html"
BtnLabel: "Read Notes"
Pick: 0
---
## MSSQL

### msfvenom

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

- `crackmapexec`
- `AlwaysInstallElevated`
- `Unquoted Service Path`
- `NFS No Root Squash`

## crackmapexec

### Kali Linux

```bash
gobuster dir -u http://10.49.61.106/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.77.139.213/FUZZ
nmap -sCV -p8888,135,139 10.101.203.26 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.99.13
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.46.55.25 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
nmap -sCV -p993,27017,995 10.36.23.3 -oN scan.txt
```

## IDOR

### Resource-Based Constrained Delegation

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
nmap -sCV -p27017,389,3306 10.15.8.98 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

## MongoDB

### ligolo-ng

```bash
feroxbuster -h
evil-winrm -i 10.36.51.46 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.78.49.78/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.171.131
```

- `Constrained Delegation`
- `ffuf`
- `msfvenom`

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## john

### ffuf

> **Note:** SSTI was identified as the primary attack vector in this scenario.

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

## DCSync

### SeDebugPrivilege

```python
crackmapexec smb 10.120.127.116 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.43.207.85 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p443,23,445 10.103.176.212 -oN scan.txt
```

```bash
nmap -sCV -p3389,587,5432 10.40.180.70 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
nmap -sCV -p53,25,27017 10.94.134.76 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.
