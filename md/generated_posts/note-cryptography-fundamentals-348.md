---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "networking, oscp, windows, lateral movement, blue team, cheatsheet"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-348.html"
URL_IMAGES: ""
Date: "2024-05-16"
Tags: "Networking, OSCP, Windows, Lateral Movement, Blue Team, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-348"
Permalink: "/notes/note-cryptography-fundamentals-348.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Local File Inclusion

### Resource-Based Constrained Delegation

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.120.219.49/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.127.90.44 -u administrator -p 'P@ssw0rd!'
```

## rubeus

### Remote Code Execution

```powershell
gobuster dir -u http://10.44.113.50/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
evil-winrm -i 10.20.83.248 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

> **Note:** Unconstrained Delegation was identified as the primary attack vector in this scenario.

## ligolo-ng

### Writable PATH

```bash
gobuster dir -u http://10.117.213.107/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.44.35.234
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.10.185.40/FUZZ
evil-winrm -i 10.67.45.98 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.77.190.112/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Unquoted Service Path

### rpcclient

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```bash
gobuster dir -u http://10.108.87.38/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.68.73.15/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.39.142.126/FUZZ
```

## SMTP

### Open Redirect

- `Docker Escape`
- `DCSync`
- `dcomexec`

- `smbexec`
- `Silver Ticket`
- `SUID Binary`
- `Golden Ticket`
- `impacket`
- `psexec`

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.
