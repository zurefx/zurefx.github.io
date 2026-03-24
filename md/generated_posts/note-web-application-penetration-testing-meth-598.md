---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, windows, persistence"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-598.html"
URL_IMAGES: ""
Date: "2025-11-19"
Tags: "DFIR, Windows, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-598"
Permalink: "/notes/note-web-application-penetration-testing-meth-598.html"
BtnLabel: "Read Notes"
Pick: 0
---
## LXD Privilege Escalation

### SUID Binary

```bash
evil-winrm -i 10.53.245.161 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
feroxbuster -h
```

> **Note:** XXE was identified as the primary attack vector in this scenario.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.33.228.225
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.111.164.63 -u administrator -p 'P@ssw0rd!'
```

```powershell
evil-winrm -i 10.67.49.145 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

## Broken Access Control

### LAPS Abuse

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.37.4
nmap -sCV -p443,995,993 10.64.168.171 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.39.152.218/FUZZ
nmap -sCV -p23,8080,636 10.95.109.141 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```python
nmap -sCV -p135,1433,5986 10.62.126.206 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

## Ubuntu 20.04

### Elasticsearch

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

## sqlmap

### Kerberos

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

- `SUID Binary`
- `IDOR`
- `crackmapexec`

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.98.144.27 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.45.98.24 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.54.78.9 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.18.174.141
```

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.
