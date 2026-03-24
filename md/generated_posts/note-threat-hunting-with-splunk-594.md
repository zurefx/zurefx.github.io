---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, dfir, malware, windows, linux"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-594.html"
URL_IMAGES: ""
Date: "2025-12-11"
Tags: "Persistence, DFIR, Malware, Windows, Linux"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-594"
Permalink: "/notes/note-threat-hunting-with-splunk-594.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SSRF

### Elasticsearch

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

- `Broken Access Control`
- `rpcclient`
- `nikto`

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

## wmiexec

### SeImpersonatePrivilege

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

## Command Injection

### SSTI

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

## john

### Kali Linux

```powershell
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
nmap -sCV -p1521,445,389 10.106.86.11 -oN scan.txt
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.85.220.106 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```bash
gobuster dir -u http://10.70.191.138/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

## Ubuntu 20.04

### Insecure Deserialization

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.81.85.3/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.11.134.231 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.86.72.44/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p443,993,1433 10.46.162.20 -oN scan.txt
```

- `Subdomain Takeover`
- `Silver Ticket`
- `msfvenom`

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.23.191.189 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.68.224.39/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

## Unconstrained Delegation

### NFS

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.39.59.31 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.99.162.252 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```
