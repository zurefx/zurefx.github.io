---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "networking, windows, cheatsheet, dfir, lateral movement"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-936.html"
URL_IMAGES: ""
Date: "2024-03-11"
Tags: "Networking, Windows, Cheatsheet, DFIR, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-936"
Permalink: "/notes/note-mitre-att&ck-framework-reference-936.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Spring

### Kerberoasting

> **Note:** DLL Hijacking was identified as the primary attack vector in this scenario.

```bash
evil-winrm -i 10.90.199.107 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.120.26.220/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.95.209.161 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

```bash
nmap -sCV -p22,8080,3306 10.125.250.58 -oN scan.txt
```

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.50.193.116 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.31.231 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## enum4linux

### SSRF

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

## SeDebugPrivilege

### GetUserSPNs

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

> **Note:** SeDebugPrivilege was identified as the primary attack vector in this scenario.

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

## PHP

### evil-winrm

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

- `Remote File Inclusion`
- `Constrained Delegation`
- `rpcclient`
- `dcomexec`
- `Command Injection`

## POP3

### hashcat

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p8080,464,3389 10.67.199.170 -oN scan.txt
```

```powershell
gobuster dir -u http://10.44.145.36/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.23.59.37/FUZZ
```

```powershell
crackmapexec smb 10.34.9.129 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.
