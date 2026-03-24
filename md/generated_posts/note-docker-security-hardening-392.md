---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, linux, networking, cheatsheet, persistence, privilege escalation"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-392.html"
URL_IMAGES: ""
Date: "2024-03-25"
Tags: "OSCP, Linux, Networking, Cheatsheet, Persistence, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-392"
Permalink: "/notes/note-docker-security-hardening-392.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SQL Injection

### Windows Server 2019

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p389,3306,53 10.101.244.79 -oN scan.txt
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.11.191.155 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Remote Code Execution

### gobuster

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

- `chisel`
- `NFS No Root Squash`
- `CORS Misconfiguration`
- `Kerberoasting`

> **Note:** XXE was identified as the primary attack vector in this scenario.

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

## Python

### NTLM Relay

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

```python
gobuster dir -u http://10.47.234.210/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.22.108.73 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p995,139,139 10.102.88.85 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.
