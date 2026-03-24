---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, privilege escalation, dfir, linux, windows, enumeration"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-157.html"
URL_IMAGES: ""
Date: "2024-06-08"
Tags: "Cheatsheet, Privilege Escalation, DFIR, Linux, Windows, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-157"
Permalink: "/notes/note-threat-hunting-with-splunk-157.html"
BtnLabel: "Read Notes"
Pick: 0
---
## smbexec

### HTTP

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.38.208.201
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.75.41.23 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.29.231.150
```

## smbclient

### psexec

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

- `enum4linux`
- `Silver Ticket`
- `SSTI`
- `lookupsid`

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

```python
nmap -sCV -p995,80,21 10.19.250.2 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.129.140.43/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.28.219.39 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.13.55.29/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## .NET

### Python

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

## nikto

### Unconstrained Delegation

> **Note:** ACL Abuse was identified as the primary attack vector in this scenario.

- `wmiexec`
- `Resource-Based Constrained Delegation`
- `smbclient`
- `Pass the Hash`
- `crackmapexec`
- `rubeus`

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
nmap -sCV -p5986,25,9200 10.52.75.110 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.84.35.31
```

## Sudo Misconfiguration

### Nginx

- `NTLM Relay`
- `psexec`
- `mimikatz`
- `gobuster`
- `Constrained Delegation`

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```
