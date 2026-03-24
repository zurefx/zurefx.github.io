---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, oscp, dfir"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-856.html"
URL_IMAGES: ""
Date: "2024-03-05"
Tags: "Persistence, OSCP, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-856"
Permalink: "/notes/note-digital-forensics-methodology-856.html"
BtnLabel: "Read Notes"
Pick: 0
---
## RDP

### Kerberoasting

```python
evil-winrm -i 10.78.133.153 -u administrator -p 'P@ssw0rd!'
```

- `crackmapexec`
- `Resource-Based Constrained Delegation`
- `netcat`

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```python
evil-winrm -i 10.18.2.169 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.78.157/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.70.224 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

## GetUserSPNs

### SeDebugPrivilege

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.92.6.248/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.45.113.190
evil-winrm -i 10.19.87.208 -u administrator -p 'P@ssw0rd!'
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## WinRM

### PHP

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

> **Note:** AS-REP Roasting was identified as the primary attack vector in this scenario.

- `AlwaysInstallElevated`
- `rubeus`
- `NFS No Root Squash`
- `Open Redirect`
- `GetUserSPNs`
- `Remote File Inclusion`

## Remote File Inclusion

### CentOS

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

- `wpscan`
- `hashcat`
- `chisel`

- `Kerberoasting`
- `rpcclient`
- `ffuf`
- `Unquoted Service Path`
- `psexec`
- `NTLM Relay`

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

## IIS

### SNMP

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

## Command Injection

### WordPress

- `AS-REP Roasting`
- `LAPS Abuse`
- `sqlmap`
- `rpcclient`
- `bloodhound`

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.102.20
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `feroxbuster`
- `SeDebugPrivilege`
- `pwncat`
- `Golden Ticket`
- `Command Injection`

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.60.9.5/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.51.150.43/FUZZ
crackmapexec smb 10.49.109.201 -u administrator -p 'P@ssw0rd!' --shares
```

- `Docker Escape`
- `GPP Password`
- `Resource-Based Constrained Delegation`
- `enum4linux`
- `gobuster`
