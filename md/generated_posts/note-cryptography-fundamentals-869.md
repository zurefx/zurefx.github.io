---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, linux, blue team, oscp"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-869.html"
URL_IMAGES: ""
Date: "2024-10-02"
Tags: "Cheatsheet, Linux, Blue Team, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-869"
Permalink: "/notes/note-cryptography-fundamentals-869.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Spring

### Remote File Inclusion

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.79.169.8 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.124.34.1
impacket-secretsdump administrator:'P@ssw0rd!'@10.108.159.76
crackmapexec smb 10.68.145.210 -u administrator -p 'P@ssw0rd!' --shares
```

- `msfvenom`
- `sqlmap`
- `hashcat`
- `socat`
- `john`

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.15.121.27/FUZZ
nmap -sCV -p9200,3389,636 10.80.235.253 -oN scan.txt
```

## Broken Access Control

### lookupsid

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

## secretsdump

### evil-winrm

```bash
feroxbuster -h
gobuster dir -u http://10.99.31.4/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.114.184.22 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.47.15.8 -u administrator -p 'P@ssw0rd!'
```

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.
