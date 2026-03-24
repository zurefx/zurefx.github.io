---
TitleSEO: "Common CTF Tricks and Techniques | ZureFX"
TitlePost: "Common CTF Tricks and Techniques"
Author: "ZureFX"
Description: "Personal notes on Common CTF Tricks and Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, privilege escalation, networking, enumeration, linux, dfir"
URL: "https://zurefx.github.io/notes/note-common-ctf-tricks-and-techniques-219.html"
URL_IMAGES: ""
Date: "2025-10-31"
Tags: "OSCP, Privilege Escalation, Networking, Enumeration, Linux, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-common-ctf-tricks-and-techniques-219"
Permalink: "/notes/note-common-ctf-tricks-and-techniques-219.html"
BtnLabel: "Read Notes"
Pick: 0
---
## nmap

### SNMP

```powershell
crackmapexec smb 10.68.240.10 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.232.182 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.115.254.236 -u administrator -p 'P@ssw0rd!' --shares
```

```powershell
feroxbuster -h
```

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

## Kerberoasting

### hashcat

- `metasploit`
- `kerbrute`
- `john`

- `kerbrute`
- `NTLM Relay`
- `mimikatz`

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p9200,8080,110 10.127.31.82 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.108.237.148
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.110.188.242 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## IIS

### SUID Binary

```python
crackmapexec smb 10.84.136.71 -u administrator -p 'P@ssw0rd!' --shares
```

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.25.71.167 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.68.3.127 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.25.51.123 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.47.195.11/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.16.223.30/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

## john

### Unconstrained Delegation

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.121.247.27
```

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.
