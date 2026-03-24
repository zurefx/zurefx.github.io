---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, dfir, blue team, privilege escalation, linux"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-664.html"
URL_IMAGES: ""
Date: "2025-11-27"
Tags: "Persistence, DFIR, Blue Team, Privilege Escalation, Linux"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-664"
Permalink: "/notes/note-docker-security-hardening-664.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Resource-Based Constrained Delegation

### atexec

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.94.186.230 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

> **Note:** Local File Inclusion was identified as the primary attack vector in this scenario.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.18.153.1/FUZZ
```

## dcomexec

### Elasticsearch

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.10.163.175/FUZZ
evil-winrm -i 10.129.112.147 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p3306,21,21 10.13.166.117 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.77.109.215/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.115.246/FUZZ
```

## DLL Hijacking

### NTLM Relay

> **Note:** Resource-Based Constrained Delegation was identified as the primary attack vector in this scenario.

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.22.185/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

## netcat

### LXD Privilege Escalation

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
evil-winrm -i 10.102.177.7 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
nmap -sCV -p139,993,1433 10.55.201.21 -oN scan.txt
```

```bash
gobuster dir -u http://10.29.33.202/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p5986,3389,8443 10.38.126.128 -oN scan.txt
evil-winrm -i 10.74.15.9 -u administrator -p 'P@ssw0rd!'
```

## CSRF

### Java

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

```python
crackmapexec smb 10.40.172.234 -u administrator -p 'P@ssw0rd!' --shares
```
