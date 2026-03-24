---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, linux, malware, cheatsheet, blue team"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-542.html"
URL_IMAGES: ""
Date: "2024-07-13"
Tags: "OSCP, Linux, Malware, Cheatsheet, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-542"
Permalink: "/notes/note-docker-security-hardening-542.html"
BtnLabel: "Read Notes"
Pick: 0
---
## evil-winrm

### Docker Escape

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.85.11.179 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Laravel

### metasploit

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.15.205.38 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.31.73.70 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## .NET

### smbclient

- `Constrained Delegation`
- `rpcclient`
- `chisel`
- `Insecure Deserialization`
- `SSTI`

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

## wpscan

### Redis

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.101.185.75
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.61.8.153 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.44.55.177
```

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

## RPC

### IIS

> **Note:** DLL Hijacking was identified as the primary attack vector in this scenario.

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

## GetUserSPNs

### LXD Privilege Escalation

```bash
evil-winrm -i 10.81.176.152 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `Command Injection`
- `netcat`
- `Unquoted Service Path`
- `psexec`
- `LXD Privilege Escalation`

```powershell
evil-winrm -i 10.124.240.48 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```
