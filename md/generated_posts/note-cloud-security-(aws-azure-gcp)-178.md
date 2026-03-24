---
TitleSEO: "Cloud Security (AWS/Azure/GCP) | ZureFX"
TitlePost: "Cloud Security (AWS/Azure/GCP)"
Author: "ZureFX"
Description: "Personal notes on Cloud Security (AWS/Azure/GCP). Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, malware, linux, dfir, blue team"
URL: "https://zurefx.github.io/notes/note-cloud-security-(aws-azure-gcp)-178.html"
URL_IMAGES: ""
Date: "2025-09-07"
Tags: "Cheatsheet, Malware, Linux, DFIR, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-cloud-security-(aws-azure-gcp)-178"
Permalink: "/notes/note-cloud-security-(aws-azure-gcp)-178.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SSH

### Node.js

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.53.155.57 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.119.207.170/FUZZ
```

```bash
evil-winrm -i 10.59.54.24 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## SSTI

### rubeus

- `smbclient`
- `rpcclient`
- `sqlmap`
- `CORS Misconfiguration`
- `AS-REP Roasting`

```bash
feroxbuster -h
evil-winrm -i 10.102.168.124 -u administrator -p 'P@ssw0rd!'
```

```powershell
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

- `Writable PATH`
- `SSRF`
- `sqlmap`
- `LXD Privilege Escalation`
- `Constrained Delegation`

## gobuster

### IIS

- `atexec`
- `rubeus`
- `chisel`

> **Note:** ACL Abuse was identified as the primary attack vector in this scenario.

## enum4linux

### XSS

- `CSRF`
- `enum4linux`
- `feroxbuster`
- `sqlmap`
- `metasploit`
- `SUID Binary`

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

## CMD

### Joomla

- `Unquoted Service Path`
- `Command Injection`
- `Constrained Delegation`
- `IDOR`
- `rpcclient`
- `mimikatz`

- `Path Traversal`
- `DLL Hijacking`
- `secretsdump`
- `dcomexec`

## Active Directory

### Command Injection

```bash
evil-winrm -i 10.67.224.197 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.48.220.123 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.91.134.246 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
crackmapexec smb 10.74.142.194 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.34.130.100 -u administrator -p 'P@ssw0rd!'
```

```bash
nmap -sCV -p1521,445,27017 10.39.43.151 -oN scan.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.
