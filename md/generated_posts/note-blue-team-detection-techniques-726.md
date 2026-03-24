---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "networking, privilege escalation, malware, persistence, linux"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-726.html"
URL_IMAGES: ""
Date: "2025-12-31"
Tags: "Networking, Privilege Escalation, Malware, Persistence, Linux"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-726"
Permalink: "/notes/note-blue-team-detection-techniques-726.html"
BtnLabel: "Read Notes"
Pick: 0
---
## RDP

### Docker Escape

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.31.164.243 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p1433,5432,389 10.58.71.115 -oN scan.txt
nmap -sCV -p389,636,464 10.122.108.63 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.79.101.2
```

- `kerbrute`
- `bloodhound`
- `ligolo-ng`

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.50.2.225/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```powershell
nmap -sCV -p53,5985,993 10.97.13.35 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.103.144 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## MSSQL

### SSH

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.21.181.89/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## CentOS

### NTLM Relay

```python
evil-winrm -i 10.126.75.36 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.101.17.193 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

## Cron Job

### feroxbuster

- `Silver Ticket`
- `LXD Privilege Escalation`
- `Resource-Based Constrained Delegation`

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Java

### SQL Injection

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

- `LXD Privilege Escalation`
- `Resource-Based Constrained Delegation`
- `enum4linux`
- `Silver Ticket`
- `psexec`

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

## NFS

### Telnet

- `SQL Injection`
- `IDOR`
- `Broken Access Control`
- `gobuster`

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.
