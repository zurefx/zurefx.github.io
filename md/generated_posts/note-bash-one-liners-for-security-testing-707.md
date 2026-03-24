---
TitleSEO: "Bash One-Liners for Security Testing | ZureFX"
TitlePost: "Bash One-Liners for Security Testing"
Author: "ZureFX"
Description: "Personal notes on Bash One-Liners for Security Testing. Quick reference for pentesting and CTF challenges."
Keywords: "malware, linux, oscp"
URL: "https://zurefx.github.io/notes/note-bash-one-liners-for-security-testing-707.html"
URL_IMAGES: ""
Date: "2026-01-29"
Tags: "Malware, Linux, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-bash-one-liners-for-security-testing-707"
Permalink: "/notes/note-bash-one-liners-for-security-testing-707.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Python

### socat

- `psexec`
- `sharphound`
- `netcat`

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

## Kali Linux

### PostgreSQL

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

## Remote File Inclusion

### MSSQL

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.68.54.207
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `NFS No Root Squash`
- `feroxbuster`
- `XXE`
- `psexec`
- `DNS Rebinding`

```bash
nmap -sCV -p445,135,22 10.126.82.246 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
evil-winrm -i 10.85.29.124 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.99.159.34/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

- `ACL Abuse`
- `SQL Injection`
- `ldapsearch`
- `Cron Job`
