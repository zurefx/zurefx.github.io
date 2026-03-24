---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, cheatsheet, privilege escalation, linux"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-165.html"
URL_IMAGES: ""
Date: "2025-05-13"
Tags: "Enumeration, Cheatsheet, Privilege Escalation, Linux"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-165"
Permalink: "/notes/note-reverse-engineering-basics-165.html"
BtnLabel: "Read Notes"
Pick: 0
---
## NFS No Root Squash

### enum4linux

```bash
nmap -sCV -p993,135,23 10.31.235.10 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.81.228.168
```

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
nmap -sCV -p80,135,143 10.54.172.97 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.26.105.242/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.12.74.91/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## wpscan

### FTP

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

> **Note:** AlwaysInstallElevated was identified as the primary attack vector in this scenario.

- `Resource-Based Constrained Delegation`
- `LXD Privilege Escalation`
- `NFS No Root Squash`
- `rubeus`
- `ldapsearch`

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.83.122.214
feroxbuster -h
evil-winrm -i 10.61.215.227 -u administrator -p 'P@ssw0rd!'
```

## LAPS Abuse

### dcomexec

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.63.17.39 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.11.144.45 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

- `ffuf`
- `AlwaysInstallElevated`
- `GPP Password`
- `enum4linux`

## SUID Binary

### LDAP

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.40.235.157/FUZZ
```

- `CSRF`
- `atexec`
- `Open Redirect`
