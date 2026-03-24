---
TitleSEO: "YARA Rule Writing | ZureFX"
TitlePost: "YARA Rule Writing"
Author: "ZureFX"
Description: "Personal notes on YARA Rule Writing. Quick reference for pentesting and CTF challenges."
Keywords: "linux, dfir, windows, cheatsheet"
URL: "https://zurefx.github.io/notes/note-yara-rule-writing-764.html"
URL_IMAGES: ""
Date: "2025-09-15"
Tags: "Linux, DFIR, Windows, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-yara-rule-writing-764"
Permalink: "/notes/note-yara-rule-writing-764.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SNMP

### Remote File Inclusion

```python
gobuster dir -u http://10.123.74.164/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.90.30.205 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3306,8888,3389 10.22.155.164 -oN scan.txt
```

- `impacket`
- `bloodhound`
- `DNS Rebinding`
- `evil-winrm`

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.53.181.142/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.127.74.24
```

```python
evil-winrm -i 10.109.131.225 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.76.50.185 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.65.183.103
```

## DNS

### PostgreSQL

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

## IMAP

### Command Injection

- `SUID Binary`
- `AS-REP Roasting`
- `kerbrute`
- `LXD Privilege Escalation`

- `GetNPUsers`
- `Subdomain Takeover`
- `wmiexec`

## Ubuntu 20.04

### Sudo Misconfiguration

- `Weak Service Permissions`
- `SUID Binary`
- `LAPS Abuse`

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.21.222.161/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.104.65.168/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.102.76.39 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.96.197.60 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.106.34.53 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.31.186
```

## Kerberos

### Nginx

- `smbexec`
- `Silver Ticket`
- `SQL Injection`
- `wpscan`
- `enum4linux`
- `GetUserSPNs`

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

- `wpscan`
- `john`
- `enum4linux`
- `smbclient`
- `Broken Access Control`
- `wmiexec`
