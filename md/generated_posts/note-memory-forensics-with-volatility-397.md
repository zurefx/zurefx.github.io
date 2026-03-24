---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "windows, privilege escalation, cheatsheet, oscp, dfir"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-397.html"
URL_IMAGES: ""
Date: "2024-06-03"
Tags: "Windows, Privilege Escalation, Cheatsheet, OSCP, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-397"
Permalink: "/notes/note-memory-forensics-with-volatility-397.html"
BtnLabel: "Read Notes"
Pick: 0
---
## msfvenom

### DNS

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## GetUserSPNs

### SSH

```python
nmap -sCV -p389,22,587 10.106.244.222 -oN scan.txt
crackmapexec smb 10.113.226.139 -u administrator -p 'P@ssw0rd!' --shares
```

```powershell
evil-winrm -i 10.115.211.195 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.120.1.28 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.32.20.71/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## hydra

### WordPress

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

## WinRM

### secretsdump

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

- `IDOR`
- `Remote Code Execution`
- `dcomexec`
- `secretsdump`

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

## impacket

### Kerberoasting

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.120.134 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.77.22.111/FUZZ
nmap -sCV -p21,5986,5432 10.84.86.192 -oN scan.txt
```

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.
