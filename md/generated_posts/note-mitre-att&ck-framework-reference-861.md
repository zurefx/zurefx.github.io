---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, windows, oscp, lateral movement, linux"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-861.html"
URL_IMAGES: ""
Date: "2025-07-11"
Tags: "Cheatsheet, Windows, OSCP, Lateral Movement, Linux"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-861"
Permalink: "/notes/note-mitre-att&ck-framework-reference-861.html"
BtnLabel: "Read Notes"
Pick: 0
---
## hashcat

### psexec

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.58.249.158/FUZZ
gobuster dir -u http://10.85.48.87/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.110.37.26/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

- `nikto`
- `SeImpersonatePrivilege`
- `LAPS Abuse`
- `ligolo-ng`
- `DLL Hijacking`

- `metasploit`
- `Pass the Hash`
- `XSS`
- `Docker Escape`
- `bloodhound`
- `evil-winrm`

## SSH

### PostgreSQL

```bash
evil-winrm -i 10.96.75.5 -u administrator -p 'P@ssw0rd!'
```

```bash
feroxbuster -h
```

```bash
nmap -sCV -p5986,135,587 10.29.122.37 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.117.223.65 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## HTTP

### john

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.24.233.35 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.2.87 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.111.6.127 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).
