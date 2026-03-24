---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, blue team, dfir, privilege escalation, windows, malware"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-959.html"
URL_IMAGES: ""
Date: "2024-03-31"
Tags: "Persistence, Blue Team, DFIR, Privilege Escalation, Windows, Malware"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-959"
Permalink: "/notes/note-memory-forensics-with-volatility-959.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Writable PATH

### nmap

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

- `NTLM Relay`
- `sharphound`
- `Command Injection`
- `nikto`

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

## Joomla

### Active Directory

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.20.228.88
nmap -sCV -p445,389,443 10.99.75.211 -oN scan.txt
gobuster dir -u http://10.103.192.141/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
gobuster dir -u http://10.87.159.55/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.32.67.198 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## FTP

### evil-winrm

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p443,443,21 10.44.189.243 -oN scan.txt
```

```bash
feroxbuster -h
```
