---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, networking, lateral movement, blue team"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-376.html"
URL_IMAGES: ""
Date: "2024-01-29"
Tags: "DFIR, Networking, Lateral Movement, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-376"
Permalink: "/notes/note-memory-forensics-with-volatility-376.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Flask

### Local File Inclusion

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.221.230/FUZZ
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.43.46 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.42.194.93 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
gobuster dir -u http://10.78.199.79/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

## SSH

### enum4linux

- `Cron Job`
- `SSTI`
- `Constrained Delegation`
- `pwncat`

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

```python
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.22.239.179/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## SeDebugPrivilege

### WinRM

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

## MySQL

### smbexec

- `DLL Hijacking`
- `Resource-Based Constrained Delegation`
- `crackmapexec`

> **Note:** Golden Ticket was identified as the primary attack vector in this scenario.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `LAPS Abuse`
- `wpscan`
- `lookupsid`
