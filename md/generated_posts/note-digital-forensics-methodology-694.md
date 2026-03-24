---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "networking, cheatsheet, privilege escalation, malware"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-694.html"
URL_IMAGES: ""
Date: "2024-07-11"
Tags: "Networking, Cheatsheet, Privilege Escalation, Malware"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-694"
Permalink: "/notes/note-digital-forensics-methodology-694.html"
BtnLabel: "Read Notes"
Pick: 0
---
## smbexec

### AlwaysInstallElevated

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.85.56.237 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.97.99.17 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

- `Kerberoasting`
- `atexec`
- `SeImpersonatePrivilege`

## LDAP

### psexec

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.221.228
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

## SeImpersonatePrivilege

### SSTI

```bash
nmap -sCV -p5986,9200,5432 10.115.161.241 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.83.188.36/FUZZ
```

- `wpscan`
- `crackmapexec`
- `feroxbuster`
- `bloodhound`
