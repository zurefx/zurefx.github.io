---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, linux, oscp, dfir, privilege escalation"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-413.html"
URL_IMAGES: ""
Date: "2024-08-14"
Tags: "Lateral Movement, Linux, OSCP, DFIR, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-413"
Permalink: "/notes/note-mitre-att&ck-framework-reference-413.html"
BtnLabel: "Read Notes"
Pick: 0
---
## C#

### SSTI

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.106.142.239/FUZZ
```

```bash
nmap -sCV -p995,27017,135 10.72.140.154 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.92.220.89 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.37.127.227/FUZZ
evil-winrm -i 10.89.176.172 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

## ACL Abuse

### netcat

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

- `Resource-Based Constrained Delegation`
- `chisel`
- `Kerberoasting`
- `LAPS Abuse`
- `Golden Ticket`

> **Note:** Remote File Inclusion was identified as the primary attack vector in this scenario.

## enum4linux

### socat

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
evil-winrm -i 10.72.85.153 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.38.71.224 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `Constrained Delegation`
- `Command Injection`
- `wmiexec`
- `SSRF`

## .NET

### gobuster

```bash
gobuster dir -u http://10.67.121.43/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.60.231.55 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```python
evil-winrm -i 10.31.31.171 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```
