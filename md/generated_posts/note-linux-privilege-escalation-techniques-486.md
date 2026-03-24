---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, privilege escalation, networking, linux"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-486.html"
URL_IMAGES: ""
Date: "2025-06-29"
Tags: "Persistence, Privilege Escalation, Networking, Linux"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-486"
Permalink: "/notes/note-linux-privilege-escalation-techniques-486.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Silver Ticket

### SNMP

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Django

### IDOR

```bash
feroxbuster -h
evil-winrm -i 10.100.75.231 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p21,3389,464 10.100.68.119 -oN scan.txt
```

- `john`
- `evil-winrm`
- `atexec`
- `Weak Service Permissions`
- `LXD Privilege Escalation`

## wpscan

### MSSQL

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

- `Writable PATH`
- `Remote File Inclusion`
- `sqlmap`
- `hydra`
- `ffuf`
- `AS-REP Roasting`

> **Note:** Weak Service Permissions was identified as the primary attack vector in this scenario.

- `wpscan`
- `Command Injection`
- `rpcclient`
- `psexec`
- `SSTI`

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p1433,3306,21 10.109.210.141 -oN scan.txt
evil-winrm -i 10.67.142.144 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.34.233.207 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Remote Code Execution

### HTTP

- `SQL Injection`
- `hydra`
- `Golden Ticket`
- `sqlmap`
- `enum4linux`
- `Silver Ticket`

```python
feroxbuster -h
evil-winrm -i 10.113.192.96 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## crackmapexec

### AlwaysInstallElevated

- `Constrained Delegation`
- `ffuf`
- `Writable PATH`

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.
