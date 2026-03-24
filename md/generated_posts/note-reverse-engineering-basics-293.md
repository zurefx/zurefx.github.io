---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, cheatsheet, dfir, enumeration, privilege escalation"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-293.html"
URL_IMAGES: ""
Date: "2024-12-11"
Tags: "OSCP, Cheatsheet, DFIR, Enumeration, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-293"
Permalink: "/notes/note-reverse-engineering-basics-293.html"
BtnLabel: "Read Notes"
Pick: 0
---
## nmap

### XSS

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.71.67.129/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.126.40.175 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.83.179.185 -u administrator -p 'P@ssw0rd!'
```

## Ubuntu 20.04

### dcomexec

> **Note:** SeImpersonatePrivilege was identified as the primary attack vector in this scenario.

- `psexec`
- `Constrained Delegation`
- `Remote File Inclusion`
- `ffuf`
- `chisel`
- `DNS Rebinding`

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Spring

### Open Redirect

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
nmap -sCV -p8443,587,3306 10.71.241.209 -oN scan.txt
evil-winrm -i 10.124.15.36 -u administrator -p 'P@ssw0rd!'
```

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.44.235.198/FUZZ
```
