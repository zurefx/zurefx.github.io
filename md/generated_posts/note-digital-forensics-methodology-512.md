---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, dfir, persistence, enumeration, linux"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-512.html"
URL_IMAGES: ""
Date: "2024-05-14"
Tags: "Lateral Movement, DFIR, Persistence, Enumeration, Linux"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-512"
Permalink: "/notes/note-digital-forensics-methodology-512.html"
BtnLabel: "Read Notes"
Pick: 0
---
## RPC

### SSRF

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

> **Note:** DNS Rebinding was identified as the primary attack vector in this scenario.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.70.39.100
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.43.158.190/FUZZ
feroxbuster -h
```

## IIS

### Unquoted Service Path

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

## crackmapexec

### Redis

```powershell
nmap -sCV -p27017,80,135 10.21.183.38 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.41.245.113/FUZZ
```

- `crackmapexec`
- `burpsuite`
- `sqlmap`
- `SQL Injection`

- `nikto`
- `enum4linux`
- `smbexec`

- `Command Injection`
- `Constrained Delegation`
- `CSRF`
- `LAPS Abuse`
- `Writable PATH`
- `wpscan`

## Local File Inclusion

### IMAP

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.
