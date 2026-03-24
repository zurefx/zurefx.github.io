---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, windows, persistence, oscp"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-335.html"
URL_IMAGES: ""
Date: "2024-09-18"
Tags: "Cheatsheet, Windows, Persistence, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-335"
Permalink: "/notes/note-cryptography-fundamentals-335.html"
BtnLabel: "Read Notes"
Pick: 0
---
## AlwaysInstallElevated

### MySQL

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

- `atexec`
- `SUID Binary`
- `XSS`

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.21.223.118 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## DCSync

### GPP Password

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.61.140.188/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

> **Note:** LXD Privilege Escalation was identified as the primary attack vector in this scenario.

- `Silver Ticket`
- `SQL Injection`
- `sharphound`

## wpscan

### Debian

```bash
gobuster dir -u http://10.14.242.248/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.66.56.85 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.44.96.170 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

> **Note:** GPP Password was identified as the primary attack vector in this scenario.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

> **Note:** NFS No Root Squash was identified as the primary attack vector in this scenario.

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

## sharphound

### SSH

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.23.134.193 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p993,8443,53 10.86.199.110 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
nmap -sCV -p135,8888,21 10.78.95.193 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.19.84.17/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.92.202.43/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
crackmapexec smb 10.67.46.178 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.31.121.84 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.121.254.47 -u administrator -p 'P@ssw0rd!' --shares
```

## PHP

### john

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `nikto`
- `chisel`
- `Writable PATH`
- `AS-REP Roasting`
- `LAPS Abuse`

- `bloodhound`
- `DNS Rebinding`
- `smbclient`
- `john`
- `evil-winrm`

## Cron Job

### Constrained Delegation

- `Docker Escape`
- `SQL Injection`
- `Remote Code Execution`

- `Silver Ticket`
- `crackmapexec`
- `XSS`
- `smbclient`

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

- `ACL Abuse`
- `Local File Inclusion`
- `dcomexec`
- `hashcat`
- `Unquoted Service Path`
- `ldapsearch`

- `atexec`
- `SQL Injection`
- `Pass the Ticket`
