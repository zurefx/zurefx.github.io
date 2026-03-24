---
TitleSEO: "Cloud Security (AWS/Azure/GCP) | ZureFX"
TitlePost: "Cloud Security (AWS/Azure/GCP)"
Author: "ZureFX"
Description: "Personal notes on Cloud Security (AWS/Azure/GCP). Quick reference for pentesting and CTF challenges."
Keywords: "blue team, dfir, linux, lateral movement, networking"
URL: "https://zurefx.github.io/notes/note-cloud-security-(aws-azure-gcp)-975.html"
URL_IMAGES: ""
Date: "2025-06-10"
Tags: "Blue Team, DFIR, Linux, Lateral Movement, Networking"
Section: "notes"
Lang: "en"
main_img: "note-cloud-security-(aws-azure-gcp)-975"
Permalink: "/notes/note-cloud-security-(aws-azure-gcp)-975.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Kerberos

### Elasticsearch

```powershell
evil-winrm -i 10.81.166.174 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.105.251.99
gobuster dir -u http://10.126.50.21/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

## msfvenom

### pwncat

```python
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

## wpscan

### Python

> **Note:** DNS Rebinding was identified as the primary attack vector in this scenario.

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

```python
crackmapexec smb 10.63.200.192 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.21.158.47
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## nikto

### .NET

```python
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.72.229.59/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```powershell
gobuster dir -u http://10.20.1.67/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.99.230/FUZZ
```

## enum4linux

### Ruby on Rails

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.45.176.170 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

## XXE

### CMD

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

```powershell
nmap -sCV -p587,5986,8080 10.57.103.31 -oN scan.txt
```

```bash
evil-winrm -i 10.18.105.227 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.43.35.210 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.
