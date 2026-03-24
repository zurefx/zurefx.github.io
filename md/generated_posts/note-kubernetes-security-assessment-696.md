---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, enumeration, cheatsheet"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-696.html"
URL_IMAGES: ""
Date: "2025-08-16"
Tags: "Persistence, Enumeration, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-696"
Permalink: "/notes/note-kubernetes-security-assessment-696.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SeDebugPrivilege

### Kali Linux

- `Unquoted Service Path`
- `Golden Ticket`
- `Weak Service Permissions`
- `burpsuite`
- `Command Injection`

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.99.37.141 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p1521,8888,110 10.70.79.252 -oN scan.txt
crackmapexec smb 10.73.154.248 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

## GetNPUsers

### Sudo Misconfiguration

- `lookupsid`
- `john`
- `crackmapexec`
- `Docker Escape`
- `ligolo-ng`

- `lookupsid`
- `rpcclient`
- `kerbrute`
- `Pass the Ticket`

> **Note:** Weak Service Permissions was identified as the primary attack vector in this scenario.

```bash
crackmapexec smb 10.36.41.226 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.103.219.51/FUZZ
```

## bloodhound

### Pass the Ticket

> **Note:** SUID Binary was identified as the primary attack vector in this scenario.

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.89.242
crackmapexec smb 10.128.84.76 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

> **Note:** Insecure Deserialization was identified as the primary attack vector in this scenario.

## feroxbuster

### Ruby on Rails

> **Note:** Broken Access Control was identified as the primary attack vector in this scenario.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.124.121.215/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.58.22.96 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.
